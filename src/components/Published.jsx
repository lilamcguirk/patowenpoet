import './Published.css';

const journalPubs = [
  { poem: '“Going to See the Buddha,”', journal: 'Louisville Review', year: '2010' },
  { poem: '“Seeing Anew,”', journal: 'Gulf Shore Literary Magazine', year: '2015' },
  { poem: '“Hawks.”', journal: 'Sheila-Na-Gig', year: '2021' },
  { poem: '“I Try to Remember Her a Toddler,”', journal: 'Louisville Review', year: '2022' },
  {
    poem: '“The Crossroad,” “Midsummer,” “Returning to Kentucky in Late April,”',
    journal: 'Hong Kong Review',
    year: 'Vol IV, No 1',
  },
  { poem: '“It Becomes Part of Us,”', journal: 'The Raven’s Perch', year: '2022' },
  { poem: '“Change the Sheets,”', journal: 'Halcyon', year: '2022' },
  { poem: '“Sapiens,”', journal: 'Highland Park Poetry', year: '2022' },
  { poem: '“Polishing my Shoes,”', journal: 'Louisville Review', year: '2025' },
  {
    poem: '“Autistic Kid at the Gym,” “At the Natural History Museum,” “Can you See at Last,”',
    journal: 'California Quarterly',
    year: '2026',
  },
  { poem: '“Breasts,”', journal: 'Raven’s Review', year: '2026' },
];

const anthologyPubs = [
  { poem: 'Inside a Fragile Body', anthology: '& Grace', year: 2015, link: 'https://lexpomo.com/poem/inside-a-fragile-body/' },
  { poem: 'Boring', anthology: 'The Messenger is Sudden Thunder', year: 2016, link: 'https://lexpomo.com/poem/boring/' },
  { poem: 'After the Funeral', anthology: 'The Heavy Lifting', year: 2017, link: 'https://lexpomo.com/poem/after-the-funeral/' },
  { poem: 'The Tin Man', anthology: "Let's Do It Live", year: 2018, link: 'https://lexpomo.com/poem/the-tin-man/' },
  { poem: 'Arc', anthology: 'If Only They Were Hungrier They Would Swallow Me Whole', year: 2019, link: 'https://lexpomo.com/poem/arc/' },
  { poem: 'Packing', anthology: 'Maps We Forgot To Bring', year: 2020, link: 'https://lexpomo.com/poem/packing-2/' },
  { poem: 'Post Pandemic', anthology: 'But There Was Fire In The Distance', year: 2021, link: 'https://lexpomo.com/poem/post-pandemic/' },
  { poem: 'His Shoes', anthology: 'locks & bones & bells & stones & stamps & maps', year: 2022, link: 'https://lexpomo.com/poem/his-shoes/' },
  { poem: 'Mid-Summer', anthology: 'Something Like Sentience Scattered and Smoldering', year: 2023, link: 'https://lexpomo.com/poem/mid-summer/' },
  { poem: 'After Surgery', anthology: 'A Kinder Kindling Than Most', year: 2024, link: 'https://lexpomo.com/poem/after-surgery-2/' },
  { poem: 'On the Opinion of Others', anthology: 'All The Broods Are Hatching At Once', year: 2025, link: 'https://lexpomo.com/poem/on-the-opinion-of-others/' },
];

const awards = [
  {
    poem: '“1974 Sanibel Island,”',
    journal: 'Atlanta Review',
    detail: 'Poetry Contest winner',
    year: '2024',
  },
  {
    poem: '“Our First Apartment,”',
    detail: 'Steve Kowitt Prize, 2nd Runner Up,',
    journal: 'San Diego Arts Guild',
    year: '2025',
  },
];

export default function Published() {
  return (
    <section className="published" id="readings">
      <div className="published-inner">
        <h1 className="published-heading">
          Published in Journals
          <br />
          &amp; Anthologies
        </h1>

        <p className="published-subtext">
          A curated list of literary journals, anthologies, and awards featuring
          Pat Owen&rsquo;s poetry.
        </p>

        <div className="published-columns">
          <div>
            <h2 className="published-section-heading">Journals</h2>
            <ul className="published-list">
              {journalPubs.map((item, i) => (
                <li key={i}>
                  {item.poem} <em>{item.journal}</em> {item.year}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="published-section-heading">Anthologies</h2>
            <ul className="published-list">
              {anthologyPubs.map((entry, i) => (
                <li key={i}>
                  &ldquo;
                  {entry.link ? (
                    <a href={entry.link} target="_blank" rel="noopener noreferrer">
                      {entry.poem}
                    </a>
                  ) : (
                    entry.poem
                  )}
                  ,&rdquo; <em>{entry.anthology}</em> {entry.year}
                </li>
              ))}
            </ul>

            <h2 className="published-section-heading published-section-heading--spaced">
              Awards
            </h2>
            <ul className="published-list">
              {awards.map((item, i) => (
                <li key={i}>
                  {item.poem} {item.journal && <em>{item.journal}</em>}{' '}
                  {item.detail} {item.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}