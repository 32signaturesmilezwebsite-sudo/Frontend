
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, ArrowUp } from 'lucide-react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">

      <div className="footer-full-line"></div>

      <div className="container">
        <motion.h2 
          className="footer-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Stay In Touch
        </motion.h2>
      </div>

      <div className="footer-full-line"></div>

      <motion.div 
        className="container footer-contact-grid"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Col 1 */}
        <div className="footer-contact-col left-padding">
          <MapPin className="footer-icon" />
          <div className="footer-text">
            <p>Agartala, Tripura</p>
            <p>799001</p>
            <a href="https://maps.app.goo.gl/2zTDTt4Qt6dXQEAL6" target="_blank" rel="noreferrer" className="footer-link-text">Get Directions</a>
          </div>
        </div>

        {/* Col 2 */}
        <div className="footer-contact-col">
          <div className="footer-stacked-col">
            <div className="footer-info-row">
              <Phone className="footer-icon" />
              <div className="footer-text">
                <p>+91 90777 70586</p>
              </div>
            </div>

            <div className="footer-info-row mt-15">
              <Mail className="footer-icon" />
              <div className="footer-text">
                <a href="mailto:32signaturesmilez@gmail.com" className="footer-link-override">
                  32signaturesmilez@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="footer-contact-col">
          <Clock className="footer-icon" />
          <div className="footer-text">
            <p>Monday-Sunday:</p>
            <p>10:00 am - 8:00 pm</p>
          </div>
        </div>

        {/* Col 4 */}
        <div className="footer-contact-col no-border">
          <Star className="footer-icon" />
          <div className="footer-text">
            <a href="https://maps.app.goo.gl/2zTDTt4Qt6dXQEAL6" target="_blank" rel="noreferrer" className="footer-link-text review-us-link">
              Review Us
            </a>
          </div>
        </div>
      </motion.div>

      <div className="footer-full-line"></div>

      <div className="container">
        <div className="footer-links-wrapper">

          <div className="footer-nav-row main-nav">
            <Link to="/about">About</Link>
            <span className="line-divider">|</span>
            <Link to="/services">Services</Link>
            <span className="line-divider">|</span>
            <Link to="/new-patients">New Patients</Link>
            <span className="line-divider">|</span>
            <Link to="/contact">Request Appointment</Link>
          </div>

          <div className="footer-nav-row sub-nav">
            <Link to="#">Privacy Policy</Link>
            <span className="line-divider">|</span>
            <Link to="#">Accessibility Statement</Link>
          </div>

        </div>

        {/* Social */}
        <div className="footer-social-wrapper">
          <a href="https://www.facebook.com/32SignatureSmilez" target="_blank" rel="noreferrer" className="social-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3b4657">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/signaturesmilezcliniq?igsh=MW5sbjUzc2tvNmRpZw==" target="_blank" rel="noreferrer" className="social-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b4657" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="footer-bottom-bar-container">
        <div className="footer-brand-logo-wrapper">
          <img src="/logo.png" alt="Logo" className="footer-brand-logo" />
        </div>
      </div>

      {/* Scroll Button */}
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <ArrowUp size={24} />
      </button>

    </footer>
  );
};

export default Footer;

