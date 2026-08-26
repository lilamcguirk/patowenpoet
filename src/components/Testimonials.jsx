import { useState, useEffect } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      excerpt:
        'TEST Pat Owen\'s new collection of poems are gems collected from a life spent strolling through the early dark. Her poetry is the practice...',
      full:
        'Pat Owen\'s new collection of poems are gems collected from a life spent strolling through the early dark. Her poetry is the practice of interrogating reality in order to understand one\'s place in the world. It is the art of paying attention to the world, to others, and to self in order to understand how we relate one to the other. These poems are born from a curious mind and a compassionate heart. Good poems help the reader see the worls with fresh eyes. These poems both light up the world around us and ask us, then, to pay close and careful attention.',
      name: 'Jeremy Paden',
      role: '',
    },
    {
      excerpt:
        'Pat Owen is that rare poet who witnesses the divine in actually-lived lives——in wrinkles and café, otters and baseball, vulvas and ferns. Here is a music as attentive...',
      full:
        'Pat Owen is that rare poet who witnesses the divine in actually-lived lives——in wrinkles and café, otters and baseball, vulvas and ferns. Here is a music as attentive and tender as the practitioner\'s Zazen-breath, and like the Zazen master, here is a tenderness that is hard, sharp, quick. Set in the dangerous ecosystem of suburbia, that anesthetizing place, Orion\'s Belt at the End of the Drive offers the reader a striking wake-up alarm for the heart.',
      name: 'Rebecca Gayle Howell',
      role: '',
    },
    {
      excerpt:
        'Bardo of Becoming is full of tender, questioning memories of a beloved father, a departed dog, a cherished partner——all of them gone now...',
      full:
        'Bardo of Becoming is full of tender, questioning memories of a beloved father, a departed dog, a cherished partner——all of them gone now, leaving the writer with the small sensual details that make up a life; taste of cheese and crackers dissolving in the mouth, delicate scent of amaryllis, an ancient address book stuffed with post-it notes, all evidence of a life vibrantly lived, and living still in present time. In Owen\'s world the dead and the living rub shoulders, and the bardo of becoming is fresh as spring grass under a young girl\'s fingers, and always heppening now.',
      name: 'Alison Luterman',
      role: '',
    },
    {
      excerpt:
        'The poems in Pat Owen\'s new collection of memorable poems Bardo of Becoming reveal a speaker who\'s spent a lifetime paying attention and working...',
      full:
        'The poems in Pat Owen\'s new collection of memorable poems Bardo of Becoming reveal a speaker who\'s spent a lifetime paying attention and working to understand the meanings of her own story. How difficult it is to tell the truth about self, yet I find in these poems a staggering honesty. Upon reflection, the woman speaking in these beautifully image-rich poems is an early feminist. As an elder, she is fiercly independent and fiercly attached to the present, to the natural world, the plants, and fittingly, the birds, of her environment, and to the people and words and ideas she\'s loved and loves, fleeting, she knows, but of inestimable value. I hope these poems reach many.',
      name: 'Maureen Morehead',
      role: '',
    },
    {
      excerpt:
        'These poignant and deeply reflective poems capture the essence of life\'s pivotal monents——from tender memories of family and childhood to profound...',
      full:
        'These poignant and deeply reflective poems capture the essence of life\'s pivotal monents——from tender memories of family and childhood to profound reflections on grief. \'1974 Sanibel Island\' chronicles the pain and wonder of choosing your true path, even at the risk of alienating——perhaps even harming––those you love. It beautifully captures a moment in time, blending nostalgia with the tension of impending change. Sadly, it\'s followed by a series of poems that chronicle the heart-breaking illness and loss of her beloved. Typical of Owen\'s poetry, this pain is telegraphed through small moments brilliantly observed.',
      name: 'Patricia Averbach',
      role: '',
    },
    {
      excerpt:
        'I want to know it really happened (\'Old Calendars\'),\' writes Pat Williams Owen in her newest collection, The Crossroad, and I hear in the speaker\'s...',
      full:
        'I want to know it really happened (\'Old Calendars\'),\' writes Pat Williams Owen in her newest collection, The Crossroad, and I hear in the speaker\'s words a mantra for the way Owen makes her poems. With a documentarian\'s keen eye and a sojourner\'s profound attunement to wonder, this poet asks us to look closer at the natural world——\'the root dangling with mud / and the blossom glinting / with dew\' (\'The Gist of the Gist\')——and even closer at the human heart.',
      name: 'Julie Marie Wade',
      role: '',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setActiveIndex(null);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setActiveIndex(null);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  return (
    <div className="testimonials">
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-quote">{t.excerpt}</p>

            <button
              className="testimonial-readmore"
              onClick={() => setActiveIndex(i)}
            >
              Read more
            </button>

            <div className="testimonial-attribution">
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="testimonial-overlay"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="testimonial-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="testimonial-modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>

            <p className="testimonial-modal-quote">
              {testimonials[activeIndex].full}
            </p>

            <div className="testimonial-attribution">
              <p className="testimonial-name">
                {testimonials[activeIndex].name}
              </p>
              <p className="testimonial-role">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}