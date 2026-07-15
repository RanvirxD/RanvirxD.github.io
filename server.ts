// Minimal Bun static file server for the portfolio.
// Run with: bun run dev  (see package.json)

const PUBLIC_DIR = `${import.meta.dir}/public`;
const PORT = Number(process.env.PORT) || 3000;

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // default to index.html
    if (pathname === "/") pathname = "/index.html";

    // allow /projects -> /projects.html style routing later
    const filePath = `${PUBLIC_DIR}${pathname}`;
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    // fallback: try appending .html (clean URLs)
    const htmlFile = Bun.file(`${PUBLIC_DIR}${pathname}.html`);
    if (await htmlFile.exists()) {
      return new Response(htmlFile);
    }

    return new Response("404 — page not found", { status: 404 });
  },
});

console.log(`Portfolio running at http://localhost:${PORT}`);
