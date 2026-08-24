import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CursorPulse from './CursorPulse';
import Nav from './Nav';
import Footer from './Footer';
import Lightbox from './Lightbox';
import useScrollReveal from '../hooks/useScrollReveal';
import useTypewriter from '../hooks/useTypewriter';
import useLightbox from '../hooks/useLightbox';

export default function Layout() {
  const { pathname } = useLocation();
  const lightbox = useLightbox();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useScrollReveal(pathname);
  useTypewriter(pathname);

  return (
    <>
      <CursorPulse />
      <Nav />
      <div className="route-fade" key={pathname}>
        <Outlet />
      </div>
      <Footer />
      <Lightbox {...lightbox} />
    </>
  );
}
