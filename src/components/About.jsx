import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-photo-wrap">
        {/* <svg className="about-decor" viewBox="0 0 700 500" preserveAspectRatio="none">
          <polygon points="0,340 260,230 300,270 40,380" />
          <polygon points="260,230 700,60 700,110 300,270" />
        </svg> */}
        <img className="about-photo" src="./images/about-section.jpg" alt="Pat Owen" />
      </div>

      <div className="about-content">
        <p className="about-eyebrow">About Pat Williams Owen</p>
        <h2 className="about-heading">
          The Person<br />Behind the Words.
        </h2>

        <p className="about-text">
          Pat grew up in Kentucky, the daughter of a Methodist minister. She now lives in Louisville and spends the winters in Sarasota. She earned three degrees from the University of Louisville, an undergraduate and master's degree in English as well as a JD from the Brandeis College of Law.
          <br/>
          She is the author of four collections of poetry: Crossing the Sky Bridge (Larkspur Press, 2016), Orion's Belt at the End of the Drive (Accents Publishing, 2019), Bardo of Becoming (Accents Publishing, 2022), and The Crossroad (Shadeland House Modern Press, 2025).
          <br/>
          Her work as appeared in <i>The Louisville Review</i>, <i>Gulf Stream Literary Magazine</i>, <i>Atlanta Review</i>, <i>The Hong Kong Review</i>, <i>Highland Park Poetry</i>, <i>Raven's Perch</i>, other print and online literary journals and several anthologies.
          <br/>
          She was a finalist in the Atlanta Review International Poetry Competition and an award winner in the Chautauqua Writer's Center 2020 Literary Arts Center. Her poem, "Our First Apartment", was a winner in the Steve Kowit Poetry Prize of 2025. The poem appeared in the <i>San Diego Poetry Annual 2025-26.</i>
        </p>
      </div>
    </section>
  );
}