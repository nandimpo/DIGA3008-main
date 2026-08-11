import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/scripts', label: 'Scripts' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/design', label: 'Design' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <input
        type="checkbox"
        id="check"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />
      <label htmlFor="check" className="burger-button">
        <i className="fa-solid fa-bars"></i>
      </label>
      <label className="logo">NM</label>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href="https://www.linkedin.com/in/nandi-m-4aa89123b"
            className="linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
