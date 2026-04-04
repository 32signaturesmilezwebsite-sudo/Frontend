
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './WelcomeSection.css';
import { motion, useInView } from 'framer-motion';

const WelcomeSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="welcome-section" ref={ref}>
      <div className="container welcome-container">
        
        {/* LEFT IMAGE */}
        <motion.div 
          className="welcome-image-wrapper"
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/109011124_2574952122770799_5844121879148698477_n.jpg" 
            alt="32 Signature Smilez Team" 
            className="welcome-team-img"
          />
        </motion.div>
        
        {/* RIGHT TEXT */}
        <motion.div 
          className="welcome-text-content"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="welcome-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Welcome To Your Happy Place
          </motion.h2>

          <motion.p 
            className="welcome-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            Your happiness is everything to us. As your Agartala family dentist, Dr. Datta is committed to giving you a strong and stunning smile that will have you beaming with pride. Come to your first appointment and ask us about our comprehensive 3-year warranty!
          </motion.p>

          <motion.div 
            className="welcome-action"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <Link to="/contact" className="premium-btn">
              <span>New Patients</span>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WelcomeSection;

