import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CursorPulse from './CursorPulse';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CursorPulse />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
