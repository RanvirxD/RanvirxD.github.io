import { useEffect } from 'react';
import '@/App.css';
import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import Resume from '@/pages/Resume';
import Bookshelf from '@/pages/Bookshelf';
import Papershelf from '@/pages/Papershelf';

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    window.__lenis = lenis;
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
  return children;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/bookshelf" element={<Bookshelf />} />
              <Route path="/papershelf" element={<Papershelf />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
