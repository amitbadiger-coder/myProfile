import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { emailjs.init('CbbnUWe0j0msm4znk'); }, []);

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess(false);
    try {
      await emailjs.send('service_oee96d9', 'template_yyyor3e', formData, 'CbbnUWe0j0msm4znk');
      setSuccess(true);
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Failed to send. Please try again or email directly.');
    } finally { setLoading(false); }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-blob" />
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title-big" style={{ marginBottom: 40 }}>Let's <span>Work Together</span></h2>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info-card">
          <div className="contact-info-title">Contact Info</div>
          <div className="contact-info-sub">Open to full-time roles, freelance projects, and collaborations.</div>

          {[
            { icon: <Mail size={18} />, label: 'Email', val: 'amitbadiger26@gmail.com', href: 'mailto:amitbadiger26@gmail.com' },
            { icon: <Phone size={18} />, label: 'Phone', val: '+91 9110830711', href: 'tel:+919110830711' },
            { icon: <MapPin size={18} />, label: 'Location', val: 'Bengaluru, India', href: null },
          ].map((d, i) => (
            <div className="contact-detail" key={i}>
              <div className="contact-detail-icon">{d.icon}</div>
              <div className="contact-detail-info">
                <div className="contact-detail-label">{d.label}</div>
                <div className="contact-detail-val">
                  {d.href ? <a href={d.href}>{d.val}</a> : d.val}
                </div>
              </div>
            </div>
          ))}

          <div className="contact-social-row">
            {[
              { icon: <Github size={15} />, url: 'https://github.com/amitbadiger-coder', label: 'GitHub' },
              { icon: <Linkedin size={15} />, url: 'https://www.linkedin.com/in/amitbadiger26/', label: 'LinkedIn' },
              { icon: <Twitter size={15} />, url: 'https://x.com/AmitBadiger2002', label: 'Twitter' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="contact-social-btn">
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-card">
          <div className="contact-form-title">Send a Message</div>

          {success && <div className="form-alert success"><CheckCircle size={16} /> Message sent successfully!</div>}
          {error && <div className="form-alert error"><AlertCircle size={16} /> {error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label><User size={13} /> Name</label>
                <input className="form-control" type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label><Mail size={13} /> Email</label>
                <input className="form-control" type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label><MessageSquare size={13} /> Subject</label>
              <input className="form-control" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label><MessageSquare size={13} /> Message</label>
              <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn-send" disabled={loading}>
              {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
