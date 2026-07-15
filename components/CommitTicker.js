"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

function formatTimeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const units = [
    ["y", 31536000],
    ["mo", 2592000],
    ["d", 86400],
    ["h", 3600],
    ["m", 60],
  ];
  for (const [label, secs] of units) {
    const value = Math.floor(seconds / secs);
    if (value >= 1) return `${value}${label} ago`;
  }
  return "just now";
}

export default function CommitTicker() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/events/public?per_page=30`
        );
        if (!res.ok) throw new Error("bad response");

        const events = await res.json();
        const push = events.find((e) => e.type === "PushEvent");

        if (!push || !push.payload?.commits?.length) {
          if (!cancelled) setState({ status: "empty" });
          return;
        }

        const commit = push.payload.commits[push.payload.commits.length - 1];

        if (!cancelled) {
          setState({
            status: "ok",
            hash: commit.sha.slice(0, 7),
            message: commit.message.split("\n")[0].slice(0, 60),
            repo: push.repo.name.split("/")[1],
            time: formatTimeAgo(new Date(push.created_at)),
          });
        }
      } catch {
        if (!cancelled) setState({ status: "error" });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="commit-ticker">
        <span className="dot" />
        <span>loading latest commit…</span>
      </div>
    );
  }

  if (state.status === "empty") {
    return (
      <div className="commit-ticker">
        <span className="dot" />
        <span>no recent public commits</span>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="commit-ticker">
        <span className="dot" style={{ background: "var(--text-faint)" }} />
        <span>couldn&apos;t reach GitHub right now</span>
      </div>
    );
  }

  return (
    <div className="commit-ticker">
      <span className="dot" />
      <span className="hash">{state.hash}</span>
      <span>{state.message}</span>
      <span style={{ color: "var(--text-faint)" }}>
        · {state.repo} · {state.time}
      </span>
      <span className="cursor" />
    </div>
  );
}
