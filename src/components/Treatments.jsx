import React, { useEffect, useState } from 'react';
import './Treatments.css';
import { motion } from 'framer-motion';

/* ================= SCROLL DIRECTION HOOK ================= */
const useScrollDirection = () => {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateDirection);

    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  return direction;
};

/* ================= ICONS ================= */
const IconComfort = () => (
  <svg viewBox="0 0 100 100" className="feature-icon">
    <path d="M25 60 L75 60 L75 75 L25 75 Z" fill="none" stroke="#c57b43" strokeWidth="3"/>
    <path d="M15 50 L25 50 L25 85 M85 50 L75 50 L75 85" fill="none" stroke="#c57b43" strokeWidth="3"/>
    <circle cx="50" cy="27" r="8" fill="none" stroke="#c57b43" strokeWidth="3" />
    <path d="M35 45 Q50 50 65 45 L60 60 L40 60 Z" fill="none" stroke="#c57b43" strokeWidth="3"/>
    <path d="M35 45 L20 35 M65 45 L80 35" stroke="#c57b43" strokeWidth="3"/>
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 100 100" className="feature-icon">
    <path d="M35 30 C35 20 50 20 50 30 C50 20 65 20 65 30 C65 45 50 58 50 58 C50 58 35 45 35 30 Z"
      fill="none" stroke="#c57b43" strokeWidth="3"/>
    <path d="M25 65 C40 75 60 75 75 65" fill="none" stroke="#c57b43" strokeWidth="3"/>
    <path d="M35 71 L25 65 L20 75 M65 71 L75 65 L80 75" fill="none" stroke="#c57b43" strokeWidth="3"/>
  </svg>
);

const IconTooth = () => (
  <svg viewBox="0 0 100 100" className="feature-icon">
    <path d="M33 35 C20 35 25 55 30 65 C33 72 35 82 38 92 C40 98 45 98 47 90 C49 80 50 73 50 73 C50 73 51 80 53 90 C55 98 60 98 62 92 C65 82 67 72 70 65 C75 55 80 35 67 35 C58 35 50 45 50 45 C50 45 42 35 33 35 Z"
      fill="none" stroke="#c57b43" strokeWidth="3"/>
  </svg>
);

/* ================= DATA ================= */
const featuresData = [
  {
    id: 1,
    title: 'All-Around Comfort',
    desc: '"That wasn\'t painful at all!" is one of our favorite things to hear. We\'ll make sure you feel completely comfortable with our virtually painless injections and calming nitrous options.',
    icon: <IconComfort />
  },
  {
    id: 2,
    title: 'Just Like Home',
    desc: 'We\'re a family dental office — and we mean that in more ways than one. Our friendly staff is committed to making you feel like part of our family from day one.',
    icon: <IconHome />
  },
  {
    id: 3,
    title: 'Highest Quality Treatment',
    desc: 'You deserve a smile that lasts forever. We stand behind our work by providing the highest quality treatments and a 3 year warranty.',
    icon: <IconTooth />
  }
];

/* ================= ANIMATION ================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 }
  }
};

const getCardVariants = (direction) => ({
  hidden: {
    opacity: 0,
    y: direction === "down" ? 80 : -80,
    rotateX: direction === "down" ? 10 : -10,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18
    }
  }
});

/* ================= COMPONENT ================= */
const Treatments = () => {
  const direction = useScrollDirection();

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-title">Dental Care, Reimagined</h2>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {featuresData.map((item) => (
            <motion.div
              key={item.id}
              className="feature-card"
              variants={getCardVariants(direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;