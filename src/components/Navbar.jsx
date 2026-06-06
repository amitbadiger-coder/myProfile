import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Github, url: 'https://github.com/amitbadiger-coder', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/amitbadiger26/', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://x.com/AmitBadiger2002', label: 'Twitter' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">Amit<span>.</span></a>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeLink === item.id ? 'active' : ''}
                  onClick={() => setActiveLink(item.id)}
                >{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <div className="nav-social">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a href="#contact" className="btn-connect">Hire Me</a>
          </div>
          <button className="nav-hamburger" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className={`nav-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)}>Hire Me</a>
      </div>
    </>
  );
};

export default Navbar;
