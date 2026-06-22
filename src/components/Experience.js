import './Experience.css';

const experiences = [
  {
    role: 'Junior Flutter Developer',
    company: 'Sunray Datalinks Pvt. Ltd.',
    location: 'Rajkot, Gujarat',
    period: 'May 2026 – Present',
    current: true,
    desc: 'Sunray Datalinks is a Rajkot-based software company delivering ERP solutions, custom business software, and mobile apps for SMEs across manufacturing, logistics, and retail.',
    points: [
      'Leading development of HisabMitra — an offline-first Flutter accounting app for Indian SME workflows (Khata, udhar, supplier dues).',
      'Implemented combined party ledger with debit/credit columns and running balance — similar to desktop billing software like Miracle.',
      'Designed FIFO payment allocation that auto-applies collections to oldest unpaid invoices per customer or supplier.',
      'Architected local-first data layer with SQLite (sqflite) and JSON document storage for 10+ entity types; migrated legacy Hive storage without data loss.',
      'Used Provider for reactive state across 12+ providers covering sales, purchases, payments, ledger, and dashboard.',
      'Built reusable ledger service merging sales, purchases, payments, and partner transactions chronologically.',
      'Implemented PDF report generation and responsive UI with NavigationRail on tablet/desktop plus Firebase Auth for secure login.',
    ],
    tags: ['Flutter', 'Provider', 'SQLite', 'Firebase Auth', 'PDF Generation', 'Dart'],
  },
  {
    role: 'Junior Flutter Developer',
    company: 'Nexon Software Solutions Pvt. Ltd.',
    location: 'Rajkot, Gujarat',
    period: 'Feb 2026 – May 2026',
    current: false,
    desc: 'Nexon builds white-label mobility and logistics platforms. Flagship products include PayGo (ride-hailing & parcel delivery super-app) and TaxiPlus / Slay (branded variants for regional transport operators).',
    points: [
      'Developed and maintained the PayGo Rider and PayGo Driver Flutter apps from Figma designs to production APKs.',
      'Integrated Google Maps SDK — real-time polyline routing, live vehicle tracking, ETA computation, and geofencing.',
      'Implemented Firebase OTP authentication, push notifications (FCM), and Firestore-backed trip records.',
      'Built WebSocket-powered bid/accept flow enabling sub-second request handshakes between rider and driver apps.',
      'Delivered UI for TaxiPlus and Slay white-label variants — custom branding, splash screens, and colour themes per client spec.',
      'Resolved critical location-tracking drift bugs, reducing incorrect ETA reports by an estimated 40%.',
      'Maintained Git feature-branch workflow; participated in daily stand-ups and sprint retrospectives.',
    ],
    tags: ['Flutter', 'GetX', 'Firebase', 'Google Maps', 'WebSockets', 'Dart'],
  },
  {
    role: 'Flutter Intern',
    company: 'Brands.Live',
    location: 'Ahmedabad, Gujarat',
    period: 'Apr 2024 – Jul 2024',
    current: false,
    desc: 'Brands.Live is a creative-tech startup providing a social-media content generation platform for brands and small businesses.',
    points: [
      'Built responsive Flutter UIs — mastered Column, Row, Stack, ListView, GridView widget trees.',
      'Wrote clean Dart code following team conventions; participated in weekly code reviews.',
      'Contributed to a design-system component library used across the company\'s Flutter projects.',
      'Attended daily Agile stand-ups — first professional exposure to sprint planning and backlog grooming.',
    ],
    tags: ['Flutter', 'Dart', 'Material Design', 'Agile'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">Work experience and an internship where I built real, production-deployed applications.</p>
        </div>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-card ${exp.current ? 'current' : ''}`}>
              <div className="exp-card-left">
                <div className="exp-dot" />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-card-right">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · {exp.location}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    {exp.current && <span className="exp-badge-current">Current</span>}
                  </div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-section">
          <h3 className="edu-title">Education</h3>
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <h4>Master of Computer Applications (MCA)</h4>
                <p>Noble University, Junagadh</p>
                <span>2024 – 2026 (Expected)</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon">📚</div>
              <div>
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <p>Bhakta Kavi Narsinh Mehta University</p>
                <span>2021 – 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
