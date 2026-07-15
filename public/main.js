// ==========================================================================
// CONFIG — replace these with your real details
// ==========================================================================
const CONFIG = {
  githubUsername: "ranvirxD",
};

// --------------------------------------------------------------------------
// Footer year
// --------------------------------------------------------------------------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// --------------------------------------------------------------------------
// Mobile nav toggle
// --------------------------------------------------------------------------
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
}

// --------------------------------------------------------------------------
// Cmd/Ctrl+K hint — focuses the search input if present (search itself is
// a placeholder for now, wired up once the search page/index exists)
// --------------------------------------------------------------------------
const searchTrigger = document.querySelector("[data-search-trigger]");

document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchTrigger?.classList.add("ring-1");
    setTimeout(() => searchTrigger?.classList.remove("ring-1"), 300);
  }
});

// --------------------------------------------------------------------------
// Live "latest commit" ticker — pulled from the GitHub public events API
// --------------------------------------------------------------------------
async function loadLatestCommit() {
  const el = document.querySelector("[data-commit-ticker]");
  if (!el) return;

  if (CONFIG.githubUsername === "your-github-username") {
    el.innerHTML = `
      <span class="dot"></span>
      <span>set your GitHub username in main.js to go live</span>
    `;
    return;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${CONFIG.githubUsername}/events/public?per_page=30`
    );
    if (!res.ok) throw new Error("GitHub API request failed");

    const events = await res.json();
    const pushEvent = events.find((e) => e.type === "PushEvent");

    if (!pushEvent || !pushEvent.payload?.commits?.length) {
      el.innerHTML = `
        <span class="dot"></span>
        <span>no recent public commits</span>
      `;
      return;
    }

    const commit =
      pushEvent.payload.commits[pushEvent.payload.commits.length - 1];
    const repoName = pushEvent.repo.name.split("/")[1];
    const message = commit.message.split("\n")[0].slice(0, 60);
    const sha = commit.sha.slice(0, 7);
    const timeAgo = formatTimeAgo(new Date(pushEvent.created_at));

    el.innerHTML = `
      <span class="dot"></span>
      <span class="hash">${sha}</span>
      <span>${escapeHtml(message)}</span>
      <span style="color: var(--text-faint)">· ${repoName} · ${timeAgo}</span>
      <span class="cursor"></span>
    `;
  } catch (err) {
    el.innerHTML = `
      <span class="dot" style="background:#8a929b"></span>
      <span>couldn't reach GitHub right now</span>
    `;
  }
}

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

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

loadLatestCommit();
