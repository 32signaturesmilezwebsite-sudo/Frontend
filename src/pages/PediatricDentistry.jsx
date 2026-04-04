import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./PediatricDentistry.css";

const pediatricFaqs = [
  {
    question: "When should I schedule my child's first visit?",
    answer: "The American Academy of Pediatric Dentistry recommends bringing your child in within six months of their first tooth erupting, or no later than their first birthday."
  },
  {
    question: "Are baby teeth really that important?",
    answer: "Yes! Primary teeth not only help children chew and speak properly, but they also act as critical space-savers, guiding the permanent adult teeth into their correct alignment beneath the gums."
  },
  {
    question: "Can parents stay in the room during the appointment?",
    answer: "Absolutely. We encourage parents to remain in the room for all regular checkups to provide comfort and help reinforce positive dental habits at home."
  }
];

const PediatricDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pediatric Dentistry | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="ped-wrapper">
      <Header />

      <section className="ped-hero">
        <div className="ped-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container ped-hero-content">
          <h1 className="fade-up">Pediatric Dentistry</h1>
          <p className="ped-hero-subtitle fade-up delay-1">Building positive habits from day one</p>
          <div className="ped-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Appointment</Link>
          </div>
        </div>
      </section>

      <section className="ped-centered-text">
        <div className="container ped-ct-container">
          <h2>Gentle care for your little ones</h2>
          <p>
            A child's early experiences at the dental office dictate their attitude toward oral health for the rest of their lives. We go above and beyond to ensure our pediatric visits are entirely fun, educational, and free of fear.
          </p>
          <p>
            We take a highly preventative approach, focusing fiercely on stopping early childhood cavities through education, sealants, and gentle fluoride varnishes.
          </p>
        </div>
      </section>

      <section className="ped-split-section bg-cream">
  <div className="container ped-split-container">

    <div className="ped-split-content pr-large fade-up">
      <h2 className="fade-up">The importance of early visits</h2>

      <ul className="ped-bullet-list">
        <li className="fade-up delay-1">Helps children feel comfortable at the dentist</li>
        <li className="fade-up delay-2">Detects habits like thumb-sucking early</li>
        <li className="fade-up delay-3">Provides diet guidance for parents</li>
        <li className="fade-up delay-4">Protects teeth with dental sealants</li>
      </ul>
    </div>

    <div className="ped-split-image animate animate-slide-right">
      <img
        src="/Kids-Dentistry.png"
        alt="Happy child at dentist"
        className="shaped-image"
      />
    </div>

  </div>
</section>

      <FAQ faqsData={pediatricFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default PediatricDentistry;
