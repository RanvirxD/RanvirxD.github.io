import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundGrid from './BackgroundGrid';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
  }, [pathname]);
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundGrid />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
