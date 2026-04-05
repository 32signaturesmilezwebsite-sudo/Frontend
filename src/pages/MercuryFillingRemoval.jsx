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

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up elements
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // general animations
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // observe all animated elements
  const elements = document.querySelectorAll(".fade-up, .animate");
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

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
  Upgrading from mercury fillings to modern, biocompatible materials is a smart investment in your health and confidence. Old amalgam fillings can expand, crack teeth, and affect aesthetics over time. Our safe removal process ensures your comfort while replacing them with natural-looking restorations that blend seamlessly with your smile. Our team will also help you maximize your insurance benefits to keep your treatment affordable.
</p>
    </div>

  </div>
</section>


     <section className="mer-split-section bg-cream">
  <div className="container mer-split-container">

    <div className="mer-split-content pr-large fade-up">
      <h2 className="fade-up">Why remove amalgam?</h2>

      <ul className="mer-bullet-list">

        <li className="fade-up delay-1">
          Eliminates dark metallic fillings and restores a natural, aesthetic smile with tooth-colored materials
        </li>

        <li className="fade-up delay-2">
          Prevents enamel damage caused by expansion and contraction of metal fillings, which can lead to cracks over time
        </li>

        <li className="fade-up delay-3">
          Reduces exposure to mercury vapor, especially from older or deteriorating amalgam restorations
        </li>

        <li className="fade-up delay-4">
          Replaces outdated fillings with modern composite materials that bond securely and reinforce tooth structure
        </li>

        <li className="fade-up delay-5">
          Improves comfort by minimizing sensitivity to temperature changes with advanced insulating materials
        </li>

        <li className="fade-up delay-6">
          Enhances long-term oral health by creating a tighter seal that helps prevent bacterial leakage and decay
        </li>

        <li className="fade-up delay-7">
          Performed using safe removal protocols designed to minimize mercury exposure and ensure patient safety
        </li>

      </ul>
    </div>

    <div className="mer-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_7kxa1d7kxa1d7kxa.png"
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
        src="/shutterstock_658131727.jpg"
        alt="Composite filling"
        className="shaped-image"
      />
    </div>

    <div className="mer-split-content fade-up">
      <h2 className="fade-up">Our safe evacuation process</h2>

      <ul className="mer-bullet-list">

        <li className="fade-up delay-1">
          <strong>Absolute Isolation:</strong> A rubber dam is used to completely isolate the tooth, preventing ingestion or contact with mercury particles during removal
        </li>

        <li className="fade-up delay-2">
          <strong>High-Volume Suction:</strong> Advanced suction systems capture mercury vapor and microscopic particles instantly at the source
        </li>

        <li className="fade-up delay-3">
          <strong>Sectioning Technique:</strong> Fillings are carefully cut into small sections and removed in chunks to minimize heat, friction, and vapor release
        </li>

        <li className="fade-up delay-4">
          <strong>Continuous Water Cooling:</strong> A steady stream of water reduces heat generation and helps limit mercury vapor during the procedure
        </li>

        <li className="fade-up delay-5">
          <strong>Protective Protocols:</strong> Both patient and clinical team use protective measures to ensure a safe and controlled environment
        </li>

        <li className="fade-up delay-6">
          <strong>Seamless Restoration:</strong> The tooth is restored with a biocompatible, tooth-colored composite that blends naturally and strengthens the structure
        </li>

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
