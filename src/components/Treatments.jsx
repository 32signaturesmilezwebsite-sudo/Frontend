import React from 'react';
import './Treatments.css';
import { motion } from 'framer-motion';

/* ---------------- BASE ICONS ---------------- */

const ToothOutline = () => (
  <path d="M 30,35 C 30,20 45,20 50,30 C 55,20 70,20 70,35 C 70,55 65,70 60,85 C 58,90 55,90 53,80 C 51,70 50,65 50,65 C 50,65 49,70 47,80 C 45,90 42,90 40,85 C 35,70 30,55 30,35 Z"
    fill="white" stroke="var(--primary-gold)" strokeWidth="3"/>
);

const Shadow = () => (
  <ellipse cx="50" cy="92" rx="25" ry="5" fill="rgba(212,175,55,0.1)" />
);

/* ---------------- ICONS ---------------- */

/* Maxillofacial Surgery */
const IconMaxillofacial = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <path d="M25,35 C25,20 75,20 75,35 L72,65 C72,75 65,82 50,82 C35,82 28,75 28,65 Z"
      fill="white" stroke="var(--primary-gold)" strokeWidth="2.5" />
    <line x1="35" y1="65" x2="65" y2="65" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="42" y1="65" x2="42" y2="72" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="50" y1="65" x2="50" y2="72" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="58" y1="65" x2="58" y2="72" stroke="var(--primary-gold)" strokeWidth="1.5" />
    <line x1="46" y1="40" x2="54" y2="40" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="36" x2="50" y2="44" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* Minor Oral Surgeries */
const IconMinorOralSurgery = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    <line x1="62" y1="18" x2="55" y2="50" stroke="var(--primary-gold)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M60,18 L65,20 L63,26 Z" fill="var(--primary-gold)" />
  </svg>
);

/* Kids Dentistry */
const IconKids = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    <circle cx="43" cy="42" r="3" fill="#000"/>
    <circle cx="57" cy="42" r="3" fill="#000"/>
    <path d="M42,55 C47,62 53,62 58,55" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

/* Smile Makeover */
const IconSmile = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    <path d="M40,55 C45,65 55,65 60,55" stroke="#000" fill="none" strokeWidth="2"/>
    <circle cx="70" cy="25" r="3" fill="var(--primary-gold)"/>
    <line x1="70" y1="18" x2="70" y2="32" stroke="var(--primary-gold)" strokeWidth="1.5"/>
    <line x1="63" y1="25" x2="77" y2="25" stroke="var(--primary-gold)" strokeWidth="1.5"/>
  </svg>
);

/* Root Canal */
const IconRootCanal = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    <line x1="50" y1="30" x2="50" y2="80"
      stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="50" cy="55" r="4" fill="var(--primary-gold)" opacity="0.6"/>
  </svg>
);

/* Sports Dentistry */
const IconSportsDentistry = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <path d="M20,42 C20,35 30,32 50,32 C70,32 80,35 80,42 L80,55 C80,68 65,75 50,75 C35,75 20,68 20,55 Z"
      fill="white" stroke="var(--primary-gold)" strokeWidth="2.5"/>
    <line x1="30" y1="53" x2="70" y2="53" stroke="var(--primary-gold)" strokeWidth="1.5"/>
    <path d="M50,36 L55,42 L50,60 L45,42 Z"
      fill="none" stroke="var(--primary-gold)" strokeWidth="1.5"/>
  </svg>
);

/* Teeth Whitening - tooth with radiating shine lines */
const IconWhitening = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    {/* Shine rays */}
    <line x1="72" y1="20" x2="80" y2="12" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="75" y1="28" x2="85" y2="26" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="65" y1="15" x2="67" y2="5"  stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="70" cy="22" r="5" fill="var(--primary-gold)" opacity="0.85"/>
  </svg>
);

/* Porcelain Veneers - layered veneer on a tooth */
const IconVeneers = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    <ToothOutline />
    {/* Veneer overlay layer */}
    <path d="M35,35 C35,28 50,26 65,35 L63,55 C58,62 42,62 37,55 Z"
      fill="var(--primary-gold)" opacity="0.35" stroke="var(--primary-gold)" strokeWidth="1.5"/>
    <path d="M38,37 C42,32 58,32 62,37" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

/* Dental Implants - screw post with crown */
const IconImplants = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    {/* Crown */}
    <path d="M32,42 L68,42 L62,60 L38,60 Z"
      fill="white" stroke="var(--primary-gold)" strokeWidth="2"/>
    {/* Post/screw */}
    <rect x="46" y="60" width="8" height="22" rx="2"
      fill="var(--primary-gold)" opacity="0.8"/>
    {/* Screw lines */}
    <line x1="44" y1="66" x2="56" y2="66" stroke="white" strokeWidth="1.2"/>
    <line x1="44" y1="72" x2="56" y2="72" stroke="white" strokeWidth="1.2"/>
    <line x1="44" y1="78" x2="56" y2="78" stroke="white" strokeWidth="1.2"/>
  </svg>
);

/* Invisible Braces - aligner arch */
const IconInvisibleBraces = () => (
  <svg viewBox="0 0 100 100" className="tooth-svg">
    <Shadow />
    {/* Upper aligner */}
    <path d="M18,40 C18,22 82,22 82,40 L80,52 C80,58 65,64 50,64 C35,64 20,58 18,52 Z"
      fill="white" stroke="var(--primary-gold)" strokeWidth="2"/>
    {/* Teeth bumps on top */}
    <path d="M26,40 L32,32 L40,40" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40,40 L50,30 L60,40" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60,40 L68,32 L74,40" fill="none" stroke="var(--primary-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Transparency hint */}
    <path d="M22,48 C30,56 70,56 78,48" fill="none" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
  </svg>
);

/* ---------------- ANIMATION ---------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 }
  }
};

/* ---------------- DATA ---------------- */

const treatmentsData = [
  { id: 1,  title: 'Maxillofacial Surgery',   desc: 'Jaw, face & oral surgery',         icon: <IconMaxillofacial /> },
  { id: 2,  title: 'Minor Oral Surgeries',    desc: 'Safe & precise oral procedures',   icon: <IconMinorOralSurgery /> },
  { id: 3,  title: 'Kids Dentistry',          desc: 'Gentle care for children',          icon: <IconKids /> },
  { id: 4,  title: 'Smile Makeover',          desc: 'Complete smile transformation',     icon: <IconSmile /> },
  { id: 5,  title: 'Root Canal',              desc: 'Pain relief & tooth saving',        icon: <IconRootCanal /> },
  { id: 6,  title: 'Sports Dentistry',        desc: 'Dental protection for athletes',    icon: <IconSportsDentistry /> },
  { id: 7,  title: 'Teeth Whitening',         desc: 'Brighten your smile',               icon: <IconWhitening /> },
  { id: 8,  title: 'Porcelain Veneers',       desc: 'Perfect ceramic smile shells',      icon: <IconVeneers /> },
  { id: 9,  title: 'Dental Implants',         desc: 'Permanent tooth replacement',       icon: <IconImplants /> },
  { id: 10, title: 'Invisible Braces',        desc: 'Clear & comfortable aligners',      icon: <IconInvisibleBraces /> },
];

/* ---------------- COMPONENT ---------------- */

const Treatments = () => {
  return (
    <section className="treatments-section">
      <div className="container">
        <h2 className="section-title">Treatments at 32 Signature Smilez</h2>

        <motion.div
          className="treatments-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {treatmentsData.map((item) => (
            <motion.div
              key={item.id}
              className="treatment-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="treatment-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="treatment-desc">{item.desc}</p>
              <button className="card-btn">Learn More →</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
