
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import './ContactSection.css';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="contact-section" ref={ref}>
      <div className="container contact-container">
        
        {/* LEFT CARD */}
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-card-bg" style={{ backgroundImage: `url('/istockphoto-510081750-612x612.jpg')` }}></div>
          
          <div className="contact-card-content">
            <h2 className="contact-title">Don't Be A Stranger</h2>
            
            <div className="contact-info-list">

              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div className="contact-text-block">
                  <p>Agartala, Tripura</p>
                  <p>799001</p>

                  {/* ✅ GOOGLE MAPS LINK */}
                  <a 
                    href="https://maps.app.goo.gl/ij38iuNN8hMKx2Ab9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Get Directions
                  </a>

                </div>
              </div>
              
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div className="contact-text-block">
                  <p>+91 90777 70586</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <Clock className="contact-icon" />
                <div className="contact-text-block">
                  <p>Monday-Sunday:</p>
                  <p>9:00 am - 9:00 pm</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-card-bg" style={{ backgroundImage: `url('/istockphoto-510081750-612x612.jpg')` }}></div>

          <div className="contact-card-content right-text">
            <h2 className="contact-title">Let's Get Smiling!</h2>
            
            <p className="contact-desc">
              Make your dream smile come true. Call us at <strong>+91 90777 70586</strong> to book a consultation with Dr. Datta or contact us online.
            </p>
            
            <div className="action-button-wrapper">
              <Link to="/contact" className="premium-btn">
                Request Appointment
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;

