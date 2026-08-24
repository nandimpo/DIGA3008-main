import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CursorPulse from './CursorPulse';
import Nav from './Nav';
import Footer from './Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import useTypewriter from '../hooks/useTypewriter';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    </>
  );
}
