import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Calendar, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <>
      {/* Spacer to prevent content jump since header is fixed */}
      <div className="header-spacer"></div>
      
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <div className="logo-container" onClick={handleNavClick}>
            <Link to="/">
              <img src="/logo.png" alt="32 Signature Smilez" className="brand-logo-img" />
            </Link>
          </div>

          {/* Right Actions */}
          <div className="header-actions">
            <Link to="/contact" className="btn-request-appointment">Request Appointment</Link>
            <button className="menu-toggle-btn" onClick={() => setMenuOpen(true)}>
              <Menu size={36} color="#111111" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mega Menu Overlay */}
      <div className={`mega-menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="mega-menu-bg" style={{ backgroundImage: `url('/istockphoto-510081750-612x612.jpg')` }}></div>
        <div className="mega-menu-content">
          <button className="menu-close-btn" onClick={() => setMenuOpen(false)}>
            <X size={40} color="#111111" strokeWidth={1} />
          </button>
          
          <div className="container">
            <div className="mega-menu-grid">
              
              {/* Column 1: About & New Patients */}
              <div className="mega-menu-col">
                <h3 className="mega-col-title">About</h3>
                <ul className="mega-menu-links">
                  <li><NavLink to="/about" onClick={handleNavClick}>About Us</NavLink></li>
                  <li><NavLink to="/problems-we-treat" onClick={handleNavClick}>Problems We Treat</NavLink></li>
                  <li><NavLink to="/bad-breath" onClick={handleNavClick}>Bad Breath</NavLink></li>
                </ul>
                
                <h3 className="mega-col-title" style={{marginTop: '40px'}}>New Patients</h3>
                <ul className="mega-menu-links mb-4">
                  <li><NavLink to="/new-patients" onClick={handleNavClick}>New Patient Info</NavLink></li>
                  
                </ul>
                
                <div className="menu-btn-wrapper">
                  <Link to="/contact" className="btn-request-appointment inline-block" onClick={handleNavClick}>Request Appointment</Link>
                </div>
              </div>

              {/* Column 2: Cosmetic & Restorative */}
              <div className="mega-menu-col">
                <h3 className="mega-col-title">Cosmetic</h3>
                <ul className="mega-menu-links">
                  <li><NavLink to="/cosmetic-dentistry" onClick={handleNavClick}>Cosmetic Dentistry</NavLink></li>
                  <li><NavLink to="/veneers" onClick={handleNavClick}>Veneers</NavLink></li>
                  <li><NavLink to="/teeth-whitening" onClick={handleNavClick}>Teeth Whitening</NavLink></li>
                  <li><NavLink to="/dental-bonding" onClick={handleNavClick}>Bonding</NavLink></li>
                </ul>

                <h3 className="mega-col-title" style={{marginTop: '40px'}}>Restorative</h3>
                <ul className="mega-menu-links">
                  <li><NavLink to="/treatment/restorative" onClick={handleNavClick}>Restorative Dentistry</NavLink></li>
                  <li><NavLink to="/treatment/bridges" onClick={handleNavClick}>Bridges</NavLink></li>
                  <li><NavLink to="/dental-crowns" onClick={handleNavClick}>Traditional Crowns</NavLink></li>
                  <li><NavLink to="/treatment/same-day-crowns" onClick={handleNavClick}>Same-Day Crowns</NavLink></li>
                  <li><NavLink to="/treatment/implant-restoration" onClick={handleNavClick}>Implant Restoration</NavLink></li>
                  <li><NavLink to="/treatment/inlays-onlays" onClick={handleNavClick}>Inlays Onlays</NavLink></li>
                </ul>
              </div>

              {/* Column 3: General */}
              <div className="mega-menu-col">
                <h3 className="mega-col-title">General</h3>
                <ul className="mega-menu-links">
                  <li><NavLink to="/treatment/general-dentistry" onClick={handleNavClick}>General Dentistry</NavLink></li>
                  <li><NavLink to="/treatment/cleaning-exams" onClick={handleNavClick}>Cleaning & Exams</NavLink></li>
                  <li><NavLink to="/treatment/fillings" onClick={handleNavClick}>Fillings</NavLink></li>
                  <li><NavLink to="/treatment/mercury-filling-removal" onClick={handleNavClick}>Mercury Filling Removal</NavLink></li>
                  <li><NavLink to="/treatment/sedation" onClick={handleNavClick}>Sedation</NavLink></li>
                  <li><NavLink to="/treatment/family-dentistry" onClick={handleNavClick}>Family Dentistry</NavLink></li>
                  <li><NavLink to="/treatment/pediatric-dentistry" onClick={handleNavClick}>Pediatric Dentistry</NavLink></li>
                  <li><NavLink to="/treatment/emergency-dentistry" onClick={handleNavClick}>Emergency Dentistry</NavLink></li>
                  <li><NavLink to="/treatment/mouthguards" onClick={handleNavClick}>Mouthguards</NavLink></li>
                  <li><NavLink to="/treatment/sealants" onClick={handleNavClick}>Sealants</NavLink></li>
                  <li><NavLink to="/treatment/gum-treatment" onClick={handleNavClick}>Gum Treatment</NavLink></li>
                  <li><NavLink to="/treatment/fluoride-treatment" onClick={handleNavClick}>Fluoride Treatment</NavLink></li>
                  <li><NavLink to="/treatment/tooth-extractions" onClick={handleNavClick}>Tooth Extractions</NavLink></li>
                  <li><NavLink to="/treatment/special-needs-dentistry" onClick={handleNavClick}>Special Needs Dentistry</NavLink></li>
                </ul>
              </div>

            </div>

            {/* Bottom Contact Footer inside Menu */}
            <div className="mega-menu-footer">
              <div className="mega-footer-left">
                {/* Map styling matching the reference */}
                <div className="mega-map-placeholder">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7186178792014!2d91.27855367610667!3d23.83441588628929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f412c125749f%3A0x6bba843a85b991cf!2s32%20Signature%20Smilez%20Multispeciality%20Dental%20Clinic%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1711993414842!5m2!1sen!2sin" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0, borderRadius: '4px' }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

              <div className="mega-footer-right">
                <ul className="mega-contact-list">
                  <li>
                    <MapPin size={22} className="mc-icon" />
                    <div>
                      <p>Thakur Pally Rd, opposite satsangha ashram,</p>
                      <p>Krishna Nagar, Agartala, Tripura 799001</p>
                      <a href="https://maps.app.goo.gl/vYRxei6adkCdmwYH6" target="_blank" rel="noreferrer" className="get-directions">Get Directions</a>
                    </div>
                  </li>
                  <li>
                    <Phone size={22} className="mc-icon" />
                    <p><a href="tel:+919077770586">+91 90777 70586</a></p>
                  </li>
                  <li>
                    <Calendar size={22} className="mc-icon" />
                    <div>
                      <p>Monday-Sunday:</p>
                      <p>10:00 am - 8:00 pm</p>
                    </div>
                  </li>
                  <li>
                    <Mail size={22} className="mc-icon" />
                    <p><a href="mailto:32signaturesmilez@gmail.com">32signaturesmilez@gmail.com</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
