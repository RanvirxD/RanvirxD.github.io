import { ReactNode } from "react";

interface Props {
  number: string;
  title: string;
  children: ReactNode;
}

export default function Section({
  number,
  title,
  children,
}: Props) {
  return (
    <section
      className="border-t border-neutral-300 py-20"
      id={title.toLowerCase()}
    >
      <div className="mb-12 flex items-center gap-5">
        <span className="text-sm tracking-[0.4em] text-neutral-400">
          {number}
        </span>

        <h2
          className="text-4xl md:text-5xl font-semibold"
          style={{
            fontFamily: "IBM Plex Serif",
          }}
        >
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}