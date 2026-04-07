import React from 'react';
import './FounderSection.css';
import { motion } from 'framer-motion';

const FounderSection = () => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      className="founder-section"
      style={{ backgroundImage: `url('/Background.png')` }}
    >
      <div className="founder-overlay"></div>

      <motion.div
        className="container founder-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* LEFT IMAGE */}
        <motion.div
          className="founder-image-wrapper"
          variants={fadeLeft}
        >
          <div className="founder-frame">
            <img
              src="/Deep Datta.PNG"
              alt="Dr. Deep Datta"
              className="founder-doctor-img"
            />
          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          className="founder-text-content"
          variants={fadeRight}
        >
          <motion.h2 className="founder-headline" variants={fadeRight}>
             Tripura's Family Dentist
          </motion.h2>

          <motion.p className="founder-paragraph" variants={fadeRight}>
            Meet Dr. Deep Datta, the friendly face behind 32 Signature Smilez. With a passion for Maxillofacial surgery and comprehensive dental care, he founded our practice with one simple goal in mind: to make the "dreaded dental visit" comfortable and enjoyable for everyone.
          </motion.p>

          <motion.p className="founder-paragraph" variants={fadeRight}>
            With a passion for transforming the way people feel about dental care, Dr. Datta has created an experience that engages all five senses and truly sets our practice apart from the rest.
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default FounderSection;