import React, { useState } from 'react';
import './FAQ.css';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = ({ faqsData, customTitle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  /* UPDATED FAQ DATA */
  const defaultFaqs = [
    {
      question: "I'm nervous about dental visits. How can you help?",
      answer: "You are not alone, and your comfort is our top priority. Our team provides a gentle, judgment-free experience. We explain every step, move at your pace, and offer calming options like nitrous oxide to make your visit relaxed and stress-free."
    },
    {
      question: "Are you accepting new patients, including children?",
      answer: "Yes! We welcome patients of all ages. From kids to adults, we provide personalized care for the entire family in a friendly and comfortable environment."
    },
    {
      question: "Do you provide painless treatments?",
      answer: "Absolutely. We use modern techniques, advanced equipment, and gentle anesthesia methods to ensure treatments are as comfortable and pain-free as possible."
    },
    {
      question: "Do you handle dental emergencies?",
      answer: "Yes. If you're experiencing severe pain, swelling, or a broken tooth, contact us immediately. We prioritize emergency cases and aim to provide same-day care whenever possible."
    },
    {
      question: "What cosmetic treatments do you offer?",
      answer: "We offer teeth whitening, veneers, smile makeovers, and more to enhance your smile. Every treatment is customized to match your facial features and preferences."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for regular checkups and cleanings. However, depending on your dental condition, we may suggest a personalized schedule."
    }
  ];

  const activeFaqs = faqsData || defaultFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ANIMATION */
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="faq-section" id="faq">
      
      <motion.div
        className="container faq-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <motion.h2 className="faq-main-title" variants={fadeUp}>
          {customTitle || "Questions? We've Got Answers!"}
        </motion.h2>

        {/* FAQ LIST */}
        <div className="faq-list">
          {activeFaqs.map((faq, index) => (
            
            <motion.div
              key={index}
              className={`faq-item-new ${openIndex === index ? 'open' : ''}`}
              variants={fadeUp}
            >
              
              {/* QUESTION */}
              <div
                className="faq-question-new"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>

                <span className="faq-toggle-icon">
                  {openIndex === index ? (
                    <Minus size={30} strokeWidth={1.5} />
                  ) : (
                    <Plus size={30} strokeWidth={1.5} />
                  )}
                </span>
              </div>

              {/* ANSWER (always rendered for smooth animation) */}
              <div className="faq-answer-new">
                <p>{faq.answer}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default FAQ;