import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Chokho Hisab — Offline Accounting App',
    desc: 'Offline-first Flutter accounting app for shopkeepers, delivery services, and personal users — localized in English, Gujarati, and Hindi. Profile-based UX covers udhar ledgers, daily delivery swipe logging, cash books, and expense tracking with voice entry and WhatsApp bill sharing. Built on Drift/SQLite (20+ tables), Riverpod, and go_router across 40+ screens with P&L reports and PDF/CSV export.',
    tags: ['Flutter', 'Riverpod', 'Drift / SQLite', 'go_router', 'Speech-to-Text', 'fl_chart'],
    category: 'personal',
    emoji: '📒',
    live: null,
    badge: 'Latest',
  },
  {
    title: 'PayGo — Rider & Driver Apps',
    desc: 'Production ride-hailing & parcel delivery super-app. Two Flutter apps (Rider + Driver) communicating in real time over WebSockets backed by Firebase.',
    tags: ['Flutter', 'GetX', 'Firebase', 'Google Maps', 'WebSockets', 'Dart'],
    category: 'mobile',
    emoji: '🚗',
    live: null,
    badge: 'Production',
  },
  {
    title: 'TaxiPlus & Slay — White-Label Variants',
    desc: 'Client-branded deployments of PayGo for regional transport operators in Gujarat. Full re-skin, custom feature toggles, and independent release pipelines.',
    tags: ['Flutter Flavors', 'GetX', 'Firebase', 'Custom Theming', 'CI/CD'],
    category: 'mobile',
    emoji: '🏷️',
    live: null,
    badge: 'Client Project',
  },
  {
    title: 'OTR Recognition — OCR App',
    desc: 'Flutter utility app that extracts editable text from photos and screenshots using an OCR API. Camera capture or gallery upload — text returned in under a second.',
    tags: ['Flutter', 'OCR API', 'REST', 'Image Picker', 'Dart'],
    category: 'personal',
    emoji: '📷',
    live: null,
    badge: 'Personal',
  },
  {
    title: 'Animal Husbandry Management App',
    desc: 'Redesigned and rebuilt key UI screens of a livestock management app for farmers to track animals, health records, and feed schedules.',
    tags: ['Flutter', 'Material Design 3', 'Responsive UI'],
    category: 'client',
    emoji: '🐄',
    live: null,
    badge: 'Client Project',
  },
];

const filters = ['all', 'mobile', 'personal', 'client'];

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">Apps I've built during internships and personal exploration.</p>
        </div>
        <div className="project-filters">
          {filters.map(f => (
            <button key={f} className={`filter-btn ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-card-top">
                <div className="project-emoji">{project.emoji}</div>
                <span className="project-category">{project.badge}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
