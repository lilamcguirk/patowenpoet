import './ReadingsHero.css';

export default function ReadingsHero() {
  return (
    <section className="readings-hero">
      <div className="readings-hero-inner">
        <h1 className="readings-hero-heading">
          Poetry Readings &amp; Book Discussions
        </h1>

        <p className="readings-hero-subtext">
          Pat Owen is available for poetry readings, literary events, and book
          discussions.
        </p>

        <a href="#contact" className="readings-hero-button">
          Contact for Readings <span aria-hidden="true">&gt;</span>
        </a>
      </div>
    </section>
  );
}