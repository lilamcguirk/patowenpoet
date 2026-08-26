import { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Books', href: '#books' },
  { label: 'Media', href: '#media' },
  { label: 'Readings & Discussions', href: '#readings' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero" id="home">
      <div className="hero-photo-wrap">
        <img
          className="hero-photo"
          src="/images/header-6.png"
          alt="Pat Owen"
        />
        <div className="hero-photo-fade" />
      </div>

      <div className="hero-overlay" />

      <nav className="hero-nav">
        <div className="brand">
          <h1>Pat Owen</h1>
          <p>Poet</p>
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className="contact-btn" href="mailto:patowen3@yahoo.com">
          Contact
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="mobile-contact-btn"
          href="mailto:patowen3@yahoo.com"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>

      <div className="hero-content">
        <blockquote>
          &ldquo;A successful poem changes the reader. At the end of a poem,
          the reader is wiser, more compassionate.&rdquo;
        </blockquote>

        <div className="blockquote-low">Pat Owen</div>

        <p className="hero-desc">
          Published poet Pat Williams Owen is the author of four poetry
          collections. Her work focuses on memory, family, grief, love and
          everyday life. She transitioned from a career in legal publishing
          to writing poetry.
        </p>
      </div>
    </header>
  );
}