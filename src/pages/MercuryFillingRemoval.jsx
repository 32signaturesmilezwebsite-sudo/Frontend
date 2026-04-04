import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MercuryFillingRemoval.css";

const mercuryFaqs = [
  {
    question: "Is it dangerous to remove an old silver filling?",
    answer: "Removing amalgam (silver) fillings can release mercury vapor. That's why we utilize advanced high-volume evacuation systems and specialized isolation techniques to ensure you do not ingest or inhale any particulates during the removal process."
  },
  {
    question: "Should I replace all my silver fillings?",
    answer: "If the old fillings are structurally sound and not causing sensitivity or cracking the surrounding tooth, replacement is completely elective for aesthetic purposes. However, if they are leaking or failing, they must be removed safely."
  },
  {
    question: "What do you replace the old metal with?",
    answer: "Once the toxic amalgam is safely evacuated, we meticulously clean the cavity and rebuild the tooth using advanced, highly durable, tooth-colored composite resin."
  }
];

const MercuryFillingRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mercury Filling Removal | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="mer-wrapper">
      <Header />

      <section className="mer-hero">
        <div className="mer-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mer-hero-content">
          <h1 className="fade-up">Safe Mercury Filling Removal</h1>
          <p className="mer-hero-subtitle fade-up delay-1">Modernize your smile with absolute security</p>
          <div className="mer-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Request Consult</Link>
          </div>
        </div>
      </section>

      <section className="mer-centered-text">
        <div className="container mer-ct-container">
          <h2>Upgrade to a healthier, brighter alternative</h2>
          <p>
            For decades, dentists used amalgam (commonly known as "silver") fillings to repair cavities. These fillings contain around 50% elemental mercury. Over time, these metal alloys expand and contract with temperature changes, frequently causing microscopic fractures inside your teeth.
          </p>
          <p>
            At 32 Signature Smilez, we utilize strict, advanced isolation protocols to safely extract old amalgam fillings without exposing you to harmful mercury vapor, seamlessly replacing them with strong, beautiful tooth-colored composite.
          </p>
        </div>
      </section>

      <section className="mer-split-section bg-cream">
  <div className="container mer-split-container">

    <div className="mer-split-content pr-large fade-up">
      <h2 className="fade-up">Why remove amalgam?</h2>

      <ul className="mer-bullet-list">
        <li className="fade-up delay-1">Eliminates dark metallic appearance</li>
        <li className="fade-up delay-2">Prevents enamel cracking from expansion</li>
        <li className="fade-up delay-3">Avoids mercury vapor exposure over time</li>
        <li className="fade-up delay-4">Composite bonds securely to the tooth</li>
      </ul>
    </div>

    <div className="mer-split-image animate animate-slide-right">
      <img
        src="/media__1774675276734.png"
        alt="Dentist safely removing filling"
        className="shaped-image"
      />
    </div>

  </div>
</section>


<section className="mer-split-section bg-white">
  <div className="container mer-split-container reverse-mobile">

    <div className="mer-split-image animate animate-slide-left">
      <img
        src="/Teeth Grinding.png"
        alt="Composite filling"
        className="shaped-image"
      />
    </div>

    <div className="mer-split-content fade-up">
      <h2 className="fade-up">Our safe evacuation process</h2>

      <ul className="mer-bullet-list">
        <li className="fade-up delay-1"><strong>Absolute Isolation:</strong> Rubber dam protection.</li>
        <li className="fade-up delay-2"><strong>High-Volume Suction:</strong> Captures particles instantly.</li>
        <li className="fade-up delay-3"><strong>Sectioning:</strong> Removed in chunks safely.</li>
        <li className="fade-up delay-4"><strong>Seamless Restoration:</strong> Natural composite filling.</li>
      </ul>
    </div>

  </div>
</section>

      <FAQ faqsData={mercuryFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default MercuryFillingRemoval;
