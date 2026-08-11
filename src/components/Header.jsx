import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Events', href: '/events' },
  { label: 'Readings & Discussions', href: '/readings' },
];

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-photo-wrap">
        <img className="hero-photo" src="/images/header-4.jpeg" alt="Pat Owen" />
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

        <a className="contact-btn" href="/contact">Contact</a>
      </nav>

      <div className="hero-content">
        <blockquote>
          "A successful poem changes the reader. At the end of a poem, the reader is wiser, more compassionate."
        </blockquote>
        <div className="blockquote-low">
            Pat Owen
        </div>

        <p className="hero-desc">
          Published poet Pat Williams Owen is the author of four poetry collections. Her work focuses on memory, family, grief, love and everyday life. She transitioned from a career in legal publishing to writing poetry.
        </p>

        {/* <div className="cta-group">
          <a className="cta-btn" href="/readings">Poetry Readings &gt;</a>
          <a className="cta-btn" href="/events">Literary Events &gt;</a>
        </div> */}
      </div>
    </header>
  );
}