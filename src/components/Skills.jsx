import React from 'react';
import { useInView } from 'react-intersection-observer';
import java from '../assets/skills/java.jpeg';
import reactImg from '../assets/skills/react.png';
import mysql from '../assets/skills/mysql.jpeg';
import tail from '../assets/skills/tailwindcss.png';
import node from '../assets/skills/node.jpeg';
import js from '../assets/skills/js.jpeg';
import html from '../assets/skills/html.jpeg';
import css from '../assets/skills/c.jpeg';
import '../styles/Skills.css';

const services = [
  { icon: '⚙️', title: 'Backend Development', desc: 'Spring Boot, REST APIs, Microservices with clean architecture and high performance.' },
  { icon: '🎨', title: 'Frontend Development', desc: 'React.js & Angular UIs with responsive design and seamless UX.' },
  { icon: '🗄️', title: 'Database Design', desc: 'MySQL & MongoDB schema design, query optimization and data modelling.' },
  { icon: '🔗', title: 'API Integration', desc: 'Third-party API integration, JWT auth, and secure endpoint design.' },
];

const skills = [
  { img: java, name: 'Java', level: 90 },
  { img: js, name: 'JavaScript', level: 85 },
  { img: reactImg, name: 'React.js', level: 80 },
  { img: node, name: 'Node.js', level: 72 },
  { img: html, name: 'HTML5', level: 90 },
  { img: css, name: 'CSS3', level: 82 },
  { img: mysql, name: 'MySQL', level: 85 },
  { img: tail, name: 'Tailwind', level: 78 },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="section-label">What I Do</div>
      <h2 className="section-title-big">Skills & <span>Expertise</span></h2>
      <p className="section-sub">Technologies I work with to build modern, scalable applications.</p>

      <div className="services-row">
        {services.map((s, i) => (
          <div className="service-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="service-icon">{s.icon}</span>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="skills-grid-title">Tech Stack</div>
      <div className="skills-grid">
        {skills.map((sk, i) => (
          <div className="skill-tile" key={i}>
            <img src={sk.img} alt={sk.name} />
            <div className="skill-tile-name">{sk.name}</div>
            <div className="skill-tile-bar">
              <div
                className="skill-tile-fill"
                style={{ width: inView ? `${sk.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
