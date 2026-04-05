import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesGrid.css';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Maxillofacial Surgery',
    desc: 'Expert care for complex facial and jaw conditions. Trust our specialized surgical expertise for optimal outcomes.',
    image: '/what-is-a-maxillofacial-surgeon.jpg',
    linkText: 'See Surgery',
    linkUrl: '/treatment/maxillofacial-surgery'
  },
  {
    id: 2,
    title: 'Minor Oral Surgery',
    desc: 'Safe and painless procedures for extractions and minor corrections, ensuring your absolute comfort.',
    image: '/Minor-Surgery.png',
    linkText: 'See Oral Surgery',
    linkUrl: '/treatment/minor-oral-surgery'
  },
  {
    id: 3,
    title: 'Dental Implants',
    desc: 'Permanent and natural-looking replacements for missing teeth tailored to restore your unwavering confidence.',
    image: '/DRN_0707.jpg',
    linkText: 'See Implants',
    linkUrl: '/treatment/dental-implants'
  },
  {
    id: 4,
    title: 'Kids Dentistry',
    desc: 'Gentle, fun, and educational dental care designed specifically to give your little ones a reason to smile.',
    image: '/Kids-Dentistry.png',
    linkText: 'See Pediatric Care',
    linkUrl: '/treatment/pediatric-dentistry'
  },
  {
    id: 5,
    title: 'Teeth Whitening',
    desc: 'Brighten your smile instantly with our professional, safe, and highly effective whitening treatments.',
    image: '/Teeth-Whitening.png',
    linkText: 'See Whitening',
    linkUrl: '/teeth-whitening'
  },
  {
    id: 6,
    title: 'Smile Makeover',
    desc: 'Complete cosmetic transformations meticulously tailored to give you the perfect, radiant smile you deserve.',
    image: '/IMG_4514 (1).jpg',
    linkText: 'See Makeovers',
    linkUrl: '/treatment/smile-makeover'
  }
];

/* ANIMATION */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const ServicesGrid = () => {
  return (
    <section className="services-grid-section">
      <motion.div
        className="container services-grid-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        {/* GRID */}
        <motion.div className="services-grid">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="service-panel"
              variants={fadeUp}
            >
              <div className="service-panel-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-panel-content">
                <h3 className="service-panel-title">{service.title}</h3>
                <p className="service-panel-desc">{service.desc}</p>

                <Link to={service.linkUrl} className="service-panel-link">
                  {service.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.div
          className="services-grid-action"
          variants={fadeUp}
        >
          <Link to="/services" className="btn btn-primary">
            More Services
          </Link>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default ServicesGrid;