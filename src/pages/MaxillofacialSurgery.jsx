import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MaxillofacialSurgery.css";

const faqs = [
  { 
    question: "Is the procedure painful?", 
    answer: "No, we use advanced anesthetics and sedation options to ensure you are completely numb and relaxed. Most patients report feeling only minor pressure during surgery." 
  },
  { 
    question: "How long is the recovery?", 
    answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days for minor surgeries to a couple of weeks for full healing and swelling reduction in complex procedures." 
  }
];

const MaxillofacialSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Maxillofacial Surgery | 32 Signature Smilez";

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
            if (entry.target.classList.contains("ms-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .ms-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ms-wrapper">
      <Header />

      <section className="ms-hero">
        <div className="ms-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container ms-hero-content">
          <h1 className="fade-up">Maxillofacial Surgery</h1>
          <p className="ms-hero-subtitle fade-up delay-1">Expert care for complex conditions</p>
          <div className="ms-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      <section className="ms-centered-text">
        <div className="container ms-ct-container">
          <h2>State-of-the-art surgical care</h2>
          <p>
            When standard dental interventions are not enough to treat complex conditions of the face, jaw, and mouth, our highly specialized maxillofacial team is ready to intervene. We combine advanced imaging technology with a gentle, patient-first approach to provide transformative results.
          </p>
          <p>
            We manage a wide spectrum of surgical issues—from reconstructive jaw surgery and severe facial trauma to complex impacted teeth and pathological cyst removals. Your safety, comfort, and ultimate recovery are our absolute highest priorities.
          </p>
        </div>
      </section>

      <section className="ms-dark-split">
        <div className="ms-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="ms-dark-overlay"></div>
        <div className="container ms-dark-container">
          <div className="ms-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="ms-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              Maxillofacial surgery is a major medical and financial undertaking, but at 32 Signature Smilez, we refuse to let cost bar you from essential, life-changing procedures. We expertly navigate the complex overlap between medical and dental insurance to ensure you receive the absolute maximum coverage possible for your specific surgery. Furthermore, we provide extended, zero-interest payment schedules to break down any remaining out-of-pocket costs into manageable monthly installments, taking the financial stress completely out of your recovery phase.
            </p>
          </div>
        </div>
      </section>

      <section className="ms-split-section bg-cream">
        <div className="container ms-split-container">
          <div className="ms-split-content pr-large fade-up">
            <h2 className="fade-up">Why choose us for surgery?</h2>
            <p className="ms-intro fade-up delay-1">
              Precision, safety, and comfort lay the foundation of our surgical department. Our team handles your procedure with the utmost care, ensuring predictable and successful outcomes. 
            </p>
            <ul className="ms-bullet-list">
              <li className="fade-up delay-2">
                <strong>Advanced 3D Planning:</strong> We rely on state-of-the-art CBCT scanners to create highly accurate 3D models of your skull and jaw to plot the procedure with sub-millimeter precision.
              </li>
              <li className="fade-up delay-3">
                <strong>Minimally Invasive:</strong> We constantly adapt our techniques to utilize the smallest possible incisions, preserving maximum bone structure and reducing postoperative swelling.
              </li>
              <li className="fade-up delay-4">
                <strong>Advanced Sedation Protocols:</strong> IV sedation and deep anesthesia options are available to put you completely to sleep, ensuring zero anxiety or pain during complex surgeries.
              </li>
              <li className="fade-up delay-5">
                <strong>Expansive Expertise:</strong> Our surgical team holds years of dedicated hospital-based residency training in both medicine and dentistry, properly equipping them to handle any complication.
              </li>
              <li className="fade-up delay-6">
                <strong>Comprehensive Aftercare:</strong> You'll receive direct emergency contact lines to our surgical team, alongside rigorous follow-up appointments to track your flawless healing.
              </li>
            </ul>
          </div>
          <div className="ms-split-image animate animate-slide-right">
            <img src="/what-is-a-maxillofacial-surgeon.jpg" alt="Maxillofacial Surgery Process" className="shaped-image" />
          </div>
        </div>
      </section>

      <FAQ faqsData={faqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default MaxillofacialSurgery;
