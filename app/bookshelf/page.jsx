import { books } from "@/lib/config";

// deterministic spine color per book, no images needed
const spineTones = ["#7a5c2e", "#3b4b52", "#5a3b52", "#3b5a45", "#5a4a3b"];

export default function BookshelfPage() {
  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// bookshelf</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Bookshelf
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Books that changed how I think about building things, working, or
        both.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {books.map((book, i) => (
          <div key={book.title} className="card p-5 flex gap-4 items-start">
            <div
              className="w-3 h-20 rounded-full shrink-0"
              style={{ background: spineTones[i % spineTones.length] }}
            />
            <div>
              <h2 className="font-semibold" style={{ color: "var(--text)" }}>{book.title}</h2>
              <p className="font-mono text-sm mt-0.5" style={{ color: "var(--text-faint)" }}>
                {book.author}
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                {book.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
