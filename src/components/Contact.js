import { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'chintansavsani1234@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const payload = new FormData();
    payload.append('name', form.name);
    payload.append('email', form.email);
    payload.append('_subject', `Portfolio: ${form.service}`);
    payload.append('message', form.message);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Could not send your message. Please try again.');
      }

      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.message ||
          `Something went wrong. Email me directly at ${CONTACT_EMAIL}.`
      );
    }
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">Have a question or want to work together? I'd love to hear from you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Say hello</h3>
            <p>Whether it's a project, a question, or just a chat — my inbox is always open.</p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-item-text">
                  <span>Email</span>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-item-text">
                  <span>Phone</span>
                  <a href="tel:+919727677388">+91 97276 77388</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-text">
                  <span>Location</span>
                  <p>Rajkot, Gujarat, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div className="contact-item-text">
                  <span>GitHub</span>
                  <a href="https://github.com/csavsani2002" target="_blank" rel="noreferrer">github.com/csavsani2002</a>
                </div>
              </div>
            </div>
            <div className="contact-availability">
              <span className="avail-dot" />
              <div>
                <strong>Open to Opportunities</strong>
                <span>Full-time, part-time, or contract</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="success-msg">Message sent! I'll get back to you within 24 hours.</div>
            )}
            {status === 'error' && errorMsg && (
              <div className="error-msg">{errorMsg}</div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={isSending}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="service"
                value={form.service}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                disabled={isSending}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget..."
                rows={5}
                required
                disabled={isSending}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
              {!isSending && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
