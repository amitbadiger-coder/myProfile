import React, { useState, useEffect } from 'react';
import { Github, Globe, X } from 'lucide-react';
import aimock from '../assets/img/aimock.jpeg';
import hotel from '../assets/img/hotel.jpeg';
import voyage from '../assets/img/voyege.jpeg';
import pizza from '../assets/img/pizza.jpeg';
import ai from '../assets/img/AI.jpeg';
import '../styles/Project.css';

const projectsData = [
  {
    id: 1, title: 'AI Mock Interview',
    description: 'AI-powered interview simulator supporting multiple sessions with automated scoring and feedback generation.',
    fullDescription: 'Built an AI-based mock interview system simulating technical and HR scenarios. Supports concurrent sessions with automated scoring and real-time AI-driven feedback based on user responses.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI API', 'Clerk'],
    category: 'ai-ml', image: aimock,
    github: 'https://github.com/amitbadiger-coder/ai_mock_interview',
    live: 'https://aimockinterview-mu.vercel.app/',
    features: ['User authentication & authorization', 'Create and manage mock interviews', 'Real-time interview sessions', 'AI-generated feedback & scoring', 'Performance improvement tracking'],
  },
  {
    id: 2, title: 'Hotel Management System',
    description: 'Full-stack hotel management platform with room booking, billing, staff records, and customer management.',
    fullDescription: 'Enhanced Spring Boot backend with Angular frontend covering room booking, customer management, billing, and staff records across 5+ modules. Tested with Postman.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JS'],
    category: 'full-stack', image: hotel,
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://taskmanager-demo.example.com',
    features: ['Room booking & availability', 'Customer management', 'Billing & invoicing', 'Staff records & scheduling', 'Secure data management'],
  },
  {
    id: 3, title: 'AI Course Generator',
    description: 'AI-powered platform that generates structured learning paths and course content from user inputs.',
    fullDescription: 'Freelance project — a responsive React.js UI for course creation, preview, and management. Integrated AI models to dynamically generate modules, lessons, and learning objectives.',
    technologies: ['React', 'Next.js', 'JavaScript', 'Gemini API', 'MongoDB', 'CSS3'],
    category: 'ai-ml', image: ai,
    github: 'https://github.com/amitbadiger-coder/GenerativeAi',
    live: 'https://gencoursewebsite.vercel.app/',
    features: ['AI-generated course content', 'PDF, PPT & summary exports', 'Interactive course builder', 'Favorites & course management', 'Responsive design'],
  },
  {
    id: 4, title: 'Voyage Management System',
    description: 'Voyage and travel management system built with Java, MySQL, and modern frontend technologies.',
    fullDescription: 'A travel and voyage management platform with rich features for managing trips, bookings, and user engagement. Built with a Java backend and clean HTML/CSS/JS frontend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    category: 'full-stack', image: voyage,
    github: 'https://github.com/yourusername/blog-platform',
    live: 'https://blog-demo.example.com',
    features: ['Trip management', 'User authentication', 'Booking system', 'Data analytics dashboard', 'Image uploads'],
  },
  {
    id: 5, title: 'Food Frontend',
    description: 'Pizza ordering website with customer feedback display and interactive order management.',
    fullDescription: 'A modern pizza ordering interface built in React, featuring customer feedback display, order placement, and a clean, responsive layout.',
    technologies: ['HTML', 'React', 'CSS', 'JavaScript'],
    category: 'frontend', image: pizza,
    github: 'https://github.com/amitbadiger-coder/food',
    live: 'https://foodfrontendproject-omega.vercel.app/',
    features: ['Interactive menu', 'Customer feedback section', 'Responsive layout', 'Order placement'],
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'full-stack', name: 'Full Stack' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'ai-ml', name: 'AI / ML' },
];

const catLabel = { 'full-stack': 'Full Stack', 'frontend': 'Frontend', 'ai-ml': 'AI/ML' };

const Project = () => {
  const [active, setActive] = useState('all');
  const [filtered, setFiltered] = useState(projectsData);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);
  const PER_PAGE = 3;

  useEffect(() => {
    setFiltered(active === 'all' ? projectsData : projectsData.filter(p => p.category === active));
    setPage(0);
  }, [active]);

  const current = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const total = Math.ceil(filtered.length / PER_PAGE);

  return (
    <section className="projects-section" id="projects">
      <div className="proj-header">
        <div className="section-label">My Work</div>
        <h2 className="section-title-big">Featured <span>Projects</span></h2>
        <p className="section-sub">A selection of projects I've built — from AI tools to enterprise backends.</p>
      </div>

      <div className="proj-filters">
        {categories.map(c => (
          <button key={c.id} className={`filter-btn ${active === c.id ? 'active' : ''}`} onClick={() => setActive(c.id)}>
            {c.name}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {current.map(p => (
          <div className="proj-card" key={p.id} onClick={() => setSelected(p)}>
            <div className="proj-img-wrap">
              <img src={p.image} alt={p.title} />
              <div className="proj-overlay">
                <div className="proj-overlay-links" onClick={e => e.stopPropagation()}>
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="overlay-link github"><Github size={14} /> Code</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="overlay-link live"><Globe size={14} /> Live</a>}
                </div>
              </div>
              <span className="proj-cat-badge">{catLabel[p.category] || p.category}</span>
            </div>
            <div className="proj-body">
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.description}</div>
              <div className="proj-tags">
                {p.technologies.slice(0, 4).map((t, i) => <span key={i} className="proj-tag">{t}</span>)}
                {p.technologies.length > 4 && <span className="proj-tag">+{p.technologies.length - 4}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="proj-pagination">
          <button className="pg-btn" disabled={page === 0} onClick={() => setPage(p => p - 1)}>← Prev</button>
          <span className="pg-info">{page + 1} / {total}</span>
          <button className="pg-btn" disabled={page === total - 1} onClick={() => setPage(p => p + 1)}>Next →</button>
        </div>
      )}

      {selected && (
        <div className="proj-modal-overlay" onClick={() => setSelected(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} className="modal-img" />
            <div className="modal-body">
              <div className="modal-title">{selected.title}</div>
              <div className="modal-desc">{selected.fullDescription}</div>
              <div className="modal-section-title">Key Features</div>
              <ul className="modal-features">
                {selected.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="modal-section-title">Technologies</div>
              <div className="modal-tech">
                {selected.technologies.map((t, i) => <span key={i} className="modal-tech-tag">{t}</span>)}
              </div>
              <div className="modal-links">
                <div className="modal-link-btns">
                  {selected.github && <a href={selected.github} target="_blank" rel="noreferrer" className="overlay-link github"><Github size={14} /> Code</a>}
                  {selected.live && <a href={selected.live} target="_blank" rel="noreferrer" className="overlay-link live"><Globe size={14} /> Live Demo</a>}
                </div>
                <button className="modal-close" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
