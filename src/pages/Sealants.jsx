import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Sealants.css";

const sealantsFaqs = [
  {
    question: "Do sealants hurt to apply?",
    answer: "Not at all! The process is completely painless and requires no drilling or numbing. We simply clean the tooth, apply a liquid coating, and harden it instantly with a special curing light."
  },
  {
    question: "Are sealants only for children?",
    answer: "Sealants are most commonly recommended for children when their permanent molars erupt (around ages 6 and 12), but adults with deep grooves or a high risk of cavities can also benefit greatly."
  },
  {
    question: "How long do dental sealants last?",
    answer: "Sealants can last several years with proper care. During regular dental check-ups, we monitor them and can reapply if needed to ensure continued protection."
  },
  {
    question: "Which teeth need sealants?",
    answer: "Sealants are typically applied to the back teeth (molars and premolars) because these teeth have deep grooves that are more prone to trapping food and bacteria."
  },
  {
    question: "Can sealants prevent cavities completely?",
    answer: "Sealants significantly reduce the risk of cavities by protecting vulnerable areas, but good oral hygiene and regular dental visits are still essential for complete protection."
  },
  {
    question: "Are dental sealants safe?",
    answer: "Yes, dental sealants are safe and widely used. They are made from biocompatible materials and have been proven effective in preventing tooth decay."
  },
  {
    question: "Can sealants be applied over existing cavities?",
    answer: "Sealants are most effective on healthy teeth. In some early cases, they may be applied over very minor decay to prevent further progression, but this depends on clinical evaluation."
  },
  {
    question: "How soon can I eat after getting sealants?",
    answer: "You can eat immediately after the procedure since the sealant hardens instantly under a curing light. However, it's best to avoid very sticky or hard foods initially."
  },
  {
    question: "Will sealants affect how my teeth feel or bite?",
    answer: "Sealants are thin and designed to feel natural. Most patients don’t notice them at all, and any slight adjustment feeling typically disappears quickly."
  },
  {
    question: "Are sealants covered by insurance?",
    answer: "Many dental insurance plans cover sealants for children and sometimes for adults at risk of decay. Our team will help you understand and maximize your coverage."
  }
];

const Sealants = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Dental Sealants | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // TEXT ANIMATION
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // IMAGE / CARD / SECTION ANIMATION
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          // OPTIONAL: container activation (for grouped animations)
          if (entry.target.classList.contains("ds-content")) {
            entry.target.classList.add("active");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // SELECT ALL ELEMENTS
  const elements = document.querySelectorAll(
    ".fade-up, .animate, .ds-content"
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="sea-wrapper">
      <Header />

      <section className="sea-hero">
        <div className="sea-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container sea-hero-content">
          <h1 className="fade-up">Dental Sealants</h1>
          <p className="sea-hero-subtitle fade-up delay-1">Invisible plastic armor for your back teeth</p>
          <div className="sea-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Protect Your Smile</Link>
          </div>
        </div>
      </section>

      <section className="sea-centered-text">
        <div className="container sea-ct-container">
          <h2>Block cavities before they start</h2>
          <p>
            The deep pits and grooves on the chewing surfaces of your back molars are prime breeding grounds for cavity-causing bacteria. Even the most rigorous daily brushing cannot force toothbrush bristles deep enough to clean these microscopic crevices.
          </p>
          <p>
            We apply a highly durable, clear protective coating over these grooves to literally "seal" out food particles and acid, effectively establishing a physical barrier against deeply rooted tooth decay.
          </p>
        </div>
      </section>

        <section className="fil-dark-split">
  <div
    className="fil-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="fil-dark-overlay"></div>

  <div className="container fil-dark-container">

    {/* IMAGE */}
    <div className="fil-ds-image animate animate-slide-left">
      <div className="frame-outer">
        <div className="frame-inner">
          <img
            src="/Deep Datta.PNG"
            alt="Dr. Deep Datta"
            className="dr-portrait-fixed"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="fil-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
  Protecting your teeth from decay is essential for maintaining long-term oral health. Dental sealants are a simple, preventive solution designed to shield the deep grooves of your back teeth where cavities most often develop. This quick and painless treatment creates a protective barrier against bacteria and food particles, significantly reducing the risk of tooth decay. Ideal for children, teenagers, and even adults prone to cavities, sealants help preserve natural tooth structure and minimize the need for future treatments. Our team ensures a comfortable application process while helping you explore insurance coverage and affordable preventive care options.
</p>
    </div>

  </div>
</section>

     <section className="sea-split-section bg-cream">
  <div className="container sea-split-container">

    <div className="sea-split-content pr-large fade-up">
      <h2 className="fade-up">The massive benefits of sealing</h2>

      <p className="sea-intro fade-up delay-1">
        Dental sealants are one of the most effective preventive treatments
        available today. They act as a protective shield over the grooves of
        your molars, where cavities most commonly develop, helping you maintain
        strong and healthy teeth for years to come.
      </p>

      <ul className="sea-bullet-list">
        <li className="fade-up delay-2">
          <strong>No drilling or numbing:</strong> A completely painless and
          non-invasive procedure, perfect for both children and adults.
        </li>

        <li className="fade-up delay-3">
          <strong>Long-lasting protection:</strong> Provides durable protection
          against decay for several years with proper care.
        </li>

        <li className="fade-up delay-4">
          <strong>Virtually invisible:</strong> Clear or tooth-colored material
          blends seamlessly with your natural teeth.
        </li>

        <li className="fade-up delay-5">
          <strong>Prevents costly treatments:</strong> Stops cavities before
          they start, reducing the need for fillings, root canals, or crowns.
        </li>

        <li className="fade-up delay-6">
          <strong>Ideal for all ages:</strong> Especially beneficial for children
          and teenagers, but also effective for adults prone to cavities.
        </li>

        <li className="fade-up delay-7">
          <strong>Quick application:</strong> The entire process takes just a few
          minutes per tooth with immediate protection.
        </li>
      </ul>
    </div>

    <div className="sea-split-image animate animate-slide-right">
      <img
        src="/dental-sealants.jpg"
        alt="Dental sealing procedure"
        className="shaped-image"
      />
    </div>

  </div>
</section>


      <FAQ faqsData={sealantsFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Sealants;
