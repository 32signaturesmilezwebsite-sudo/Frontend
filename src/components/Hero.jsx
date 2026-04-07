import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-light-section">

      {/* Background */}
      <div
        className="hero-light-bg"
        style={{ backgroundImage: "url('/Background.jpg')" }}
      ></div>

      <div className="container hero-light-container">

        {/* LEFT CONTENT WITH ANIMATION */}
        <motion.div
          className="hero-light-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          <motion.h1
            className="hero-headline"
            variants={fadeUp}
          >
            Your Signature Smilez<br />Family Dentist
          </motion.h1>

          <motion.p
            className="hero-subheadline"
            variants={fadeUp}
          >
            A new approach to dental comfort
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
          >
            <Link to="/contact" className="btn btn-primary">
              <span className="btn-text">Request Appointment</span>
            </Link>

            <a href="tel:+919077770586" className="btn btn-secondary">
              <span className="btn-text">Call: +91 90777 70586</span>
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
  className="hero-light-image"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="doctor-card">
    
    <div className="doctor-frame">
      <img
        src="/Deep Datta.PNG"
        alt="Dr. Deep Datta"
        className="doctor-hero-img"
      />
    </div>

    {/* NEW TEXT */}
    <div className="doctor-info">
      <h3>Dr. Deep Datta</h3>
        <div className="doctor-divider"></div>

      <p>MDS Oral Maxillofacial Surgeon<br/>& Implantologist</p>
    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;