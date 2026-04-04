
import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

/* 🔥 REVIEWS (NO AUTHORS) */
const reviewsData = [
  {
    id: 1,
    text: "Dr Datta and his staff are courteous and professional at all times. You feel as if your business is really appreciated. My wife and I have gotten great dental care for several years and we would not consider going anywhere else."
  },
  {
    id: 2,
    text: "Great people in this office! Everyone is friendly, caring, and always smiling! And the biggest thing is they LISTEN to you. I will definitely continue to go for years to come!"
  },
  {
    id: 3,
    text: "Totally outstanding, professional and courteous service in every regard. They made sure I was completely comfortable throughout the entire procedure. 10/10."
  },
  {
    id: 4,
    text: "The clinic is extremely clean and modern. The staff is polite and the doctor explains everything very clearly. Best dental experience I’ve had."
  },
  {
    id: 5,
    text: "I was very anxious before my treatment, but the team handled everything so calmly and professionally. I didn’t feel any pain at all!"
  },
  {
    id: 6,
    text: "Highly recommend 32 Signature Smilez! The attention to detail and care provided here is truly exceptional."
  },
  {
    id: 7,
    text: "My child actually enjoys visiting the dentist now! The environment is very friendly and welcoming."
  },
  {
    id: 8,
    text: "From consultation to treatment, everything was smooth and well-organized. You can really trust their expertise."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* 🔥 Scroll Animation */
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  /* 🔥 FIXED AUTOPLAY */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* 🔥 Animation Variants */
  const variants = {
    initial: { opacity: 0, y: 30, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.97 }
  };

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">

        {/* LEFT SIDE */}
        <motion.div
          className="testimonials-left"
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials-title">Word of Mouth</h2>

          <div className="testimonial-slider-area">

            <button className="slider-nav-btn prev" onClick={prevReview}>
              <ChevronLeft size={24} />
            </button>

            <div className="testimonial-bubble">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <p className="testimonial-text">
                    <span className="quote-mark">“</span>
                    <span className="stars">★★★★★</span>
                    {reviewsData[currentIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="slider-nav-btn next" onClick={nextReview}>
              <ChevronRight size={24} />
            </button>

          </div>

          {/* DOTS */}
          <div className="slider-dots">
            {reviewsData.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="testimonials-right"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/IMG_0591.jpeg"
            alt="Happy family"
            className="testimonials-family-img"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
