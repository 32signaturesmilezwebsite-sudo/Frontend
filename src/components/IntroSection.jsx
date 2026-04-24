import React, { useState } from 'react';
import './IntroSection.css';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
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
    <section className="intro-section">
      <motion.div
        className="container intro-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* LEFT TEXT */}
        <motion.div className="intro-text-content" variants={fadeLeft}>
          <motion.h2 className="intro-headline" variants={fadeLeft}>
            A Fresh Take On Dentistry
          </motion.h2>

          <motion.p className="intro-paragraph" variants={fadeLeft}>
            Forget everything you know about dental care — at 32 Signature Smilez, we've planned an extra-special experience just for you. Our comprehensive dental clinic is designed around your comfort to ensure you feel amazing... because you are!
          </motion.p>

          <motion.p className="intro-highlight" variants={fadeLeft}>
            We can't wait to treat you to a sparkling smile — request an appointment with your Agartala family dentist today.
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE / VIDEO */}
        <motion.div className="intro-media-wrapper" variants={fadeRight}>
          <div className="intro-media-container" onClick={() => !isPlaying && setIsPlaying(true)}>
            {!isPlaying ? (
              <>
                <img 
                  src="/ChatGPT Image Apr 3, 2026, 12_09_13 PM.png" 
                  alt="A fresh take on dentistry at 32 Signature Smilez" 
                  className="intro-video-thumbnail" 
                />

                {/* Play Button */}
                <div className="play-button-overlay">
                  <PlayCircle size={80} color="#ffffff" strokeWidth={1} />
                </div>
              </>
            ) : (
                <iframe
                  className="intro-video-iframe"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1291687531325661&show_text=false&autoplay=true"
                  title="32 Signature Smilez Video"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
            )}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default IntroSection;