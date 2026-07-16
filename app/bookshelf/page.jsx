import { books } from "@/lib/config";

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

      <div className="mt-10">
        {books.map((book) => (
          <div key={book.title} className="flow-row">
            <p className="text-lg font-semibold" style={{ color: "var(--text)" }}>{book.title}</p>
            <p className="font-mono text-sm mt-0.5" style={{ color: "var(--text-faint)" }}>
              {book.author}
            </p>
            <p className="mt-1 text-base" style={{ color: "var(--text-muted)" }}>
              {book.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
