import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ranvir Singh - Portfolio",
  description: "Ranvir Singh — engineer and developer. Projects, experience, and writing.",
  icons: {
    icon: "/photo.png",
    shortcut: "/photo.png",
    apple: "/photo.png",
  },
};

// runs before paint so there's no light/dark flash on load
const themeInit = `
(function() {
  var saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Header />
        <main className="relative z-10 max-w-3xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
