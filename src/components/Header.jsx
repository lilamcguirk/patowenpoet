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
    <header className="site-header">
      <nav className="site-nav">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-content">
        <img
          className="header-photo"
          src="./images/header.jpeg"
          alt="Pat Owen"
        />
        <h1 className="header-name">Pat Owen</h1>
        <p className="header-subtitle">Poet</p>
      </div>
    </header>
  );
}