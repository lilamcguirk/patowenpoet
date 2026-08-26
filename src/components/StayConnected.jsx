import { useEffect } from 'react';
import './StayConnected.css';

export default function StayConnected() {
  useEffect(() => {
    if (window.ml) {
      window.ml('account', '2598385');
      return;
    }

    (function (w, d, e, u, f, l, n) {
      w[f] = w[f] || function () {
        (w[f].q = w[f].q || []).push(arguments);
      };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');

    window.ml('account', '2598385');
  }, []);

  return (
    <section className="stay-connected">
      <div className="stay-connected-inner">
        <h1 className="stay-connected-heading">Stay Connected</h1>

        <div className="stay-connected-row">
          <p className="stay-connected-subtext">
            Receive updates on new poems, upcoming readings, publications, and
            literary events.
          </p>

          <div className="ml-embedded" data-form="ys5lfq"></div>
        </div>
      </div>
    </section>
  );
}