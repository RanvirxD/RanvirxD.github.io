import { papers } from "@/lib/config";

export default function PapersPage() {
  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// paper shelf</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Paper Shelf
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Papers and long-form technical writing worth revisiting.
      </p>

      <div className="mt-10 space-y-4">
        {papers.map((paper) => {
          const Wrapper = paper.link ? "a" : "div";
          const wrapperProps = paper.link
            ? { href: paper.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <Wrapper key={paper.title} {...wrapperProps} className="card p-6 block">
              <h2 className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                {paper.title}
              </h2>
              <p className="font-mono text-sm mt-0.5" style={{ color: "var(--text-faint)" }}>
                {paper.source}
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                {paper.note}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
