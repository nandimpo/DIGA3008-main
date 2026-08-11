import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/portfolio/essays', label: 'Essays' },
  { to: '/portfolio/animation', label: 'Animation' },
  { to: '/portfolio/design', label: 'Design' },
  { to: '/portfolio/writing', label: 'Writing' },
];

export default function PortfolioFooterNav() {
  const { pathname } = useLocation();

  return (
    <footer className="portfolio-footer">
      <nav>
        <ul>
          {links.map((link) => {
            const isActive =
              pathname === link.to ||
              (link.to === '/portfolio/writing' && pathname === '/portfolio/writing-2');
            return (
              <li key={link.to}>
                <Link to={link.to} className={isActive ? 'active' : undefined}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
