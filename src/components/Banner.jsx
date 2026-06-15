import React, { useEffect, useState } from 'react';
import { ArrowRight} from 'lucide-react';
import logo from '../assets/img/brand1.jpeg';
import '../styles/Banner.css';

const ROLES = ['Java Spring Boot Dev', 'Full Stack Developer', 'Backend Engineer', 'API Architect'];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  dur: Math.random() * 12 + 8,
  delay: Math.random() * 10,
}));

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120);
  const period = 2200;

 useEffect(() => {
  const ticker = setInterval(() => {
    const i = loopNum % ROLES.length;
    const fullText = ROLES[i];

    const updated = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updated);

    if (isDeleting) {
      setDelta(d => Math.max(d * 0.9, 40));
    }

    if (!isDeleting && updated === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === '') {
      setIsDeleting(false);
      setLoopNum(n => n + 1);
      setDelta(120);
    }
  }, delta);

  return () => clearInterval(ticker);
}, [text, delta, loopNum, isDeleting, period]);
  return (
    <section className="banner" id="home">
      {/* Background effects */}
      <div className="banner-grid" />
      <div className="banner-blob banner-blob-1" />
      <div className="banner-blob banner-blob-2" />
      <div className="banner-blob banner-blob-3" />
      <div className="banner-particles">
        {PARTICLES.map(p => (
          <div key={p.id} className="particle" style={{
            width: p.size, height: p.size,
            left: `${p.left}%`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}
      </div>

      <div className="banner-inner">
        {/* LEFT */}
        <div className="banner-text">
          <div className="banner-label">
            <span className="banner-label-dot" />
            Available for opportunities
          </div>
          <h1 className="banner-title">
            Hi, I'm<br />
            <span className="banner-name">Amit Badiger</span>
          </h1>
          <div className="banner-typerow">
            <span className="banner-typelabel">I'm a</span>
            <span className="banner-type">{text}</span>
          </div>
          <p className="banner-desc">
            Java Spring Boot Developer with hands-on experience building RESTful APIs,
            microservices, and scalable backend systems. Passionate about clean architecture
            and delivering production-ready solutions.
          </p>
          <div className="banner-actions">
            <a href="#contact" className="btn-primary-glow">
              Let's Talk <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-outline-glow">
              View Projects
            </a>
          </div>
          <div className="banner-stats">
            <div className="stat-item">
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">25%</div>
              <div className="stat-label">API Speed Boost</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">APIs Built</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="banner-img-wrap">
          <div className="banner-img-ring ring1" />
          <div className="banner-img-ring ring2" />
          <div className="banner-img-ring ring3" />
          <div className="banner-img-glow" />
          <img src={logo} alt="Amit Badiger" className="banner-img" />
          <div className="banner-badge badge-top">
            <span className="badge-icon">⚡</span>
            <div>
              <div className="badge-label">Experience</div>
              <div className="badge-val">1+ Year</div>
            </div>
          </div>
          <div className="banner-badge badge-bottom">
            <span className="badge-icon">🚀</span>
            <div>
              <div className="badge-label">Stack</div>
              <div className="badge-val">Spring Boot</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-wheel"><div className="scroll-dot" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Banner;
