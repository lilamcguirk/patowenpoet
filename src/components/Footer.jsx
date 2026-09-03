import './Footer.css';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Books', href: '#books' },
    { label: 'Media', href: '#media' },
    { label: 'Journals & Anthologies', href: '#readings' },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 6.1a.8.8 0 0 0 1 0L19.8 6H4.2Zm15.8 1.6-6.9 5.7a2.8 2.8 0 0 1-3.6 0L4.6 7.6V18h15.4V7.6Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.6.5.7.28 1.2.63 1.7 1.14.5.5.86 1 1.15 1.7.25.6.44 1.4.5 2.6.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.5 2.6a4.9 4.9 0 0 1-1.15 1.7c-.5.5-1 .86-1.7 1.15-.6.25-1.4.44-2.6.5-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.6-.5a4.9 4.9 0 0 1-1.7-1.15 4.9 4.9 0 0 1-1.15-1.7c-.25-.6-.44-1.4-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .5-2.6.28-.7.63-1.2 1.14-1.7.5-.5 1-.86 1.7-1.15.6-.25 1.4-.44 2.6-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.77.07-1 .05-1.6.22-1.96.36-.5.2-.85.42-1.22.8-.38.37-.6.72-.8 1.22-.14.37-.31.95-.36 1.96C2.8 9.48 2.8 9.85 2.8 13s0 3.52.07 4.77c.05 1 .22 1.6.36 1.96.2.5.42.85.8 1.22.37.38.72.6 1.22.8.37.14.95.31 1.96.36 1.25.06 1.62.07 4.77.07s3.52 0 4.77-.07c1-.05 1.6-.22 1.96-.36.5-.2.85-.42 1.22-.8.38-.37.6-.72.8-1.22.14-.37.31-.95.36-1.96.06-1.25.07-1.62.07-4.77s0-3.52-.07-4.77c-.05-1-.22-1.6-.36-1.96a3.1 3.1 0 0 0-.8-1.22 3.1 3.1 0 0 0-1.22-.8c-.37-.14-.95-.31-1.96-.36C15.52 4 15.15 4 12 4Zm0 3.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.3-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21.9v-8.1h2.7l.4-3.15h-3.1V8.7c0-.9.25-1.53 1.55-1.53h1.66V4.35C15.98 4.24 15 4.16 13.86 4.16c-2.4 0-4.05 1.47-4.05 4.16v2.48H7.1v3.15h2.72v8.1h3.68Z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <h2 className="footer-name">Pat Owen</h2>
        <p className="footer-p">Poet</p>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-divider" />

        <p className="footer-copyright">
          &copy; {year} Pat Owen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}