import { useState } from 'react';
import './StayConnected.css';

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed) {
      setError('Please enter your email address.');
      setSuccess(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }

    // No backend hooked up yet — just confirming in the UI for now
    setError('');
    setSuccess(true);
    setEmail('');
  };

  return (
    <section className="stay-connected">
      <div className="stay-connected-inner">
        <h1 className="stay-connected-heading">Stay Connected</h1>

        <div className="stay-connected-row">
          <p className="stay-connected-subtext">
            Receive updates on new poems, upcoming readings, publications, and
            literary events.
          </p>

          <form
            className="stay-connected-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="stay-connected-input-wrap">
              <input
                type="email"
                className={`stay-connected-input ${error ? 'has-error' : ''}`}
                placeholder="Enter your email address here"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                aria-invalid={!!error}
                aria-describedby={error ? 'stay-connected-error' : undefined}
              />
              <button type="submit" className="stay-connected-button">
                Join the Mailing List
              </button>
            </div>

            {error && (
              <p id="stay-connected-error" className="stay-connected-error">
                {error}
              </p>
            )}

            {success && (
              <p className="stay-connected-success">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}