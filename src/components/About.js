import './About.css';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <div className="section-label">About Me</div>
          <h2 className="section-title">A bit about <span>me</span></h2>
          <p className="section-subtitle">Flutter developer passionate about clean UI/UX and apps that real users love.</p>
        </div>
        <div className="about-grid">
          <div className="about-left">
            <div className="about-img-wrap">
              <div className="about-img-bg" />
              <div className="about-img-inner">CS</div>
              <div className="about-exp-badge">
                <strong>4+</strong>
                <span>Months Exp.</span>
              </div>
            </div>
            <div className="about-stats">
              {[
                { num: '5', label: 'Projects Built' },
                { num: '1', label: 'Internship' },
                { num: 'MCA', label: 'Noble University' },
                { num: '40%', label: 'ETA Bug Reduction' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <h3>Building mobile apps people enjoy using</h3>
            <p>
              I'm a proactive Flutter developer currently at Sunray Datalinks (Rajkot), with prior
              experience at Nexon Software Solutions and an internship at Brands.Live (Ahmedabad).
              I specialise in cross-platform mobile development, offline-first business apps,
              real-time location services, and production-grade mobile ecosystems.
            </p>
            <p>
              Currently pursuing MCA at Noble University (Expected 2026), with a BCA from
              Bhakta Kavi Narsinh Mehta University (2021-2024). Passionate about clean UI/UX,
              state management, and delivering apps that real users love.
            </p>
            <div className="about-info">
              <div className="info-item"><strong>Name</strong>Chintan Savsani</div>
              <div className="info-item"><strong>Email</strong>chintansavsani1234@gmail.com</div>
              <div className="info-item"><strong>Phone</strong>+91 97276 77388</div>
              <div className="info-item"><strong>Location</strong>Rajkot, Gujarat</div>
              <div className="info-item"><strong>GitHub</strong>github.com/csavsani2002</div>
              <div className="info-item"><strong>Availability</strong>Open to opportunities</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
