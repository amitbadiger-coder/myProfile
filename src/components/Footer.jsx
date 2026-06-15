import React from 'react';
import {  Mail, Phone, MapPin, Send, Heart, ArrowRight } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand-name">Amit<span>.</span></div>
          <div className="footer-brand-desc">Full Stack Developer passionate about building scalable systems and modern web experiences.</div>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {['home','skills','projects','contact'].map(id => (
              <li key={id}><a href={`#${id}`}><ArrowRight size={12} />{id.charAt(0).toUpperCase()+id.slice(1)}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact-items">
            <div className="footer-contact-item"><Mail size={14} /><a href="mailto:amitbadiger26@gmail.com">amitbadiger26@gmail.com</a></div>
            <div className="footer-contact-item"><Phone size={14} /><a href="tel:+919110830711">+91 9110830711</a></div>
            <div className="footer-contact-item"><MapPin size={14} /><span>Bengaluru, India</span></div>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Stay Updated</div>
          <div className="footer-newsletter-desc">Subscribe for latest projects and updates.</div>
          <div className="footer-newsletter-form">
            <input type="email" placeholder="your@email.com" aria-label="Newsletter email" />
            <button type="button" aria-label="Subscribe"><Send size={16} /></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {year} Amit Badiger · Made with <Heart size={12} /> using React
        </div>
        <div className="footer-bottom-links">
          <a href="https://github.com/amitbadiger-coder" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/amitbadiger26/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/AmitBadiger2002" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
