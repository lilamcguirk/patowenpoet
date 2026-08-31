import './Featured.css';
import Testimonials from './Testimonials';

export default function Featured() {
  const books = [
    {
      title: 'Crossing the Sky Bridge',
      image: './images/book-2.jpg',
      description:
        'Her 2016 debut collection from Larkspur Press chronicles grief, and the consolations of nature and family.',
      note: 'Very limited supply available from Larkspur Press',
      link: 'tel:5551234567',
      linkText: 'Call Now',
    },
    {
      title: "Orion's Belt at the End of the Drive",
      image: './images/book-1.jpg',
      description:
        'The 2019 publication from Accents Publishing concerns itself with physical attention to the world around us and the rewards that follow.',
      link: 'https://www.accents-publishing.com/orionsbelt.html',
    },
    {
      title: 'Bardo of Becoming',
      image: './images/book-3.jpg',
      description:
        'The 2022 publication from Accents Publishing. These poems set out the present moment as a transformational time.',
      link: 'https://www.accents-publishing.com/bardoofbecoming.html',
    },
    {
      title: 'The Crossroad',
      image: './images/book-4.jpg',
      description:
        'The 2025 publication from Shadelandhouse Modern Press concerns itself with pivotal moments in a life.',
      link: 'https://smpbooks.com/product/the-crossroad/?srsltid=AfmBOooUreKa5YnDtoQbAMD6Ym5EOEB6xbA78BVgpXMeQlkYrYQZ2kEq',
    },
  ];

  const bookstores = [
    { name: "Carmichael's Bookstore", location: 'Louisville, KY', link: "https://carmichaelsbookstore.com/book/9781945049590?ic_referral=xk2rNnCOl8bgUh4XRgrhRr6iTiNhbd1Q2xhzBdTdlEQwM0Ybb4gaHRCe7v5pQkYHgDgXH8JA-LUvDJhSVbtlP13dv8YgtTbrsfwXXn7j1kPdyPM4iuHu0B0WFXm3lc0XBiJEOQ"},
    { name: 'Bookstore1', location: 'Sarasota, FL', link: "https://shop.sarasotabooks.com/product/crossroad-poems" },
    { name: 'Chautauqua Institution Bookstore', location: 'Chautauqua, NY', link: "https://chautauquabookstore.com/book/9781936628919" },
  ];

  return (
    <section className="featured" id="books">
      <div className="featured-header">
        <h2 className="featured-heading">
          Featured Poetry
          <br />
          Collections
        </h2>

        <div className="featured-intro">
          <p className="featured-subtext">
            Check out Pat Owen&rsquo;s poetry collections.
          </p>

          <div className="featured-stores">
            <span className="featured-stores-label">
              Also available at
            </span>

            <div className="featured-stores-list">
              {bookstores.map((store, i) =>
                store.link ? (
                  <a
                    key={i}
                    href={store.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-store-chip"
                  >
                    <span className="featured-store-name">{store.name}</span>
                    <span className="featured-store-location">
                      {store.location}
                    </span>
                  </a>
                ) : (
                  <span
                    key={i}
                    className="featured-store-chip featured-store-chip--static"
                  >
                    <span className="featured-store-name">{store.name}</span>
                    <span className="featured-store-location">
                      {store.location}
                    </span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="featured-divider" />

      <div className="featured-books">
        {books.map((book, i) => {
          const isPhone = book.link.startsWith('tel:');

          return (
            <div className="featured-book" key={i}>
              <img
                className="featured-book-image"
                src={book.image}
                alt={book.title}
              />

              <div className="featured-book-content">
                <h3 className="featured-book-title">
                  {book.title}
                </h3>

                <p className="featured-book-text">
                  {book.description}
                </p>

                {book.note && (
                  <p className="featured-book-note">
                    {book.note}
                  </p>
                )}

                {isPhone ? (
                  <a
                    href={book.link}
                    className="featured-book-link"
                  >
                    {book.linkText || 'Learn More'} &gt;
                  </a>
                ) : (
                  <a
                    href={book.link}
                    className="featured-book-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.linkText || 'Learn More'} &gt;
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Testimonials />
    </section>
  );
}