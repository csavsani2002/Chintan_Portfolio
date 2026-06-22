import './Skills.css';

const skills = [
  { name: 'Flutter (Cross-platform)', level: 88 },
  { name: 'Dart', level: 85 },
  { name: 'Firebase (Auth, Firestore, FCM)', level: 82 },
  { name: 'Riverpod & GetX State Management', level: 80 },
  { name: 'Drift / SQLite (Offline-First)', level: 78 },
  { name: 'Google Maps SDK & Live Tracking', level: 78 },
  { name: 'REST APIs & WebSockets', level: 75 },
];

const tools = [
  'Git / GitHub', 'Figma', 'Agile / Scrum', 'Material Design 3',
  'go_router', 'Speech-to-Text', 'fl_chart', 'PDF / CSV Export',
  'Java', 'Python', 'Kotlin', 'PHP',
  'OCR APIs', 'Firebase FCM', 'CI/CD', 'Flutter Flavors',
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Skills</div>
          <h2 className="section-title">My <span>Technical Stack</span></h2>
          <p className="section-subtitle">Technologies I use to build cross-platform mobile applications.</p>
        </div>
        <div className="skills-grid">
          <div className="skills-col">
            <h3>Core Proficiency</h3>
            {skills.map(skill => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ '--width': `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="skills-col">
            <h3>Tools & Languages</h3>
            <div className="tools-section">
              <div className="tools-grid">
                {tools.map(tool => (
                  <div key={tool} className="tool-badge">{tool}</div>
                ))}
              </div>
            </div>
            <div className="skills-cta-card">
              <h4>Always learning</h4>
              <p>
                Constantly exploring new Flutter packages, state management patterns,
                and mobile best practices to build better apps.
              </p>
              <button className="btn-white" onClick={() => scrollTo('projects')}>See My Work</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
