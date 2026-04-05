import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MinorOralSurgery.css";

const faqs = [
  { 
    question: "Is the procedure painful?", 
    answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure during the procedure, but never sharp pain." 
  },
  { 
    question: "How long is the recovery?", 
    answer: "Recovery depends entirely on the specific procedure, but for minor surgeries like uncomplicated extractions or biopsies, it typically ranges from a few days to a couple of weeks for full mucosal healing." 
  }
];

const MinorOralSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minor Oral Surgery | 32 Signature Smilez";

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
            if (entry.target.classList.contains("mo-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .mo-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mo-wrapper">
      <Header />

      <section className="mo-hero">
        <div className="mo-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mo-hero-content">
          <h1 className="fade-up">Minor Oral Surgery</h1>
          <p className="mo-hero-subtitle fade-up delay-1">Safe and painless clinical interventions</p>
          <div className="mo-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      <section className="mo-centered-text">
        <div className="container mo-ct-container">
          <h2>Precision and gentleness combined</h2>
          <p>
            When you need a minor surgical intervention—such as an impacted tooth extraction, a soft tissue biopsy, or pre-prosthetic jaw reshaping—you want a team built on precision and gentle care. At 32 Signature Smilez, we conduct minor oral surgeries entirely in-house. 
          </p>
          <p>
            We combine advanced imaging technology with a compassionate, patient-first approach to ensure that your treatment is fast, highly accurate, and completely free of anxiety. Your safety and comfort are our absolute highest priorities.
          </p>
        </div>
      </section>

      <section className="mo-dark-split">
        <div className="mo-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="mo-dark-overlay"></div>
        <div className="container mo-dark-container">
          <div className="mo-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="mo-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              We firmly believe that essential minor oral surgery should never compromise your financial stability. Because we conduct these procedures efficiently in our own clinic rather than referring you to an expensive hospital, we are able to significantly reduce your out-of-pocket overhead. We coordinate aggressively with dental and medical insurance networks to maximize your procedural coverage, and we offer bespoke, interest-free payment plans so that restoring your oral health always remains an accessible priority.
            </p>
          </div>
        </div>
      </section>

      <section className="mo-split-section bg-cream">
        <div className="container mo-split-container">
          <div className="mo-split-content pr-large fade-up">
            <h2 className="fade-up">Why choose us for minor surgery?</h2>
            <p className="mo-intro fade-up delay-1">
              By keeping minor procedures in-house, we save you the hassle of endless referrals while providing the highest tier of surgical accuracy in an environment you already trust.
            </p>
            <ul className="mo-bullet-list">
              <li className="fade-up delay-2">
                <strong>Advanced 3D Planning:</strong> We use precise digital scans to map exactly where nerves and bone structures lie, enabling us to perform surgeries with virtually zero guesswork.
              </li>
              <li className="fade-up delay-3">
                <strong>Complete Numbing:</strong> Extensive local anesthesia and optional nitrous oxide sedation guarantee a completely painless procedure from start to finish.
              </li>
              <li className="fade-up delay-4">
                <strong>Minimally Invasive:</strong> We employ specialized micro-instruments designed to extract, biopsy, or alter tissue with the smallest possible footprint to speed up your recovery timeframe.
              </li>
              <li className="fade-up delay-5">
                <strong>Rapid Interventions:</strong> Minor surgeries are usually completed quickly in a single appointment, allowing you to return to the comfort of your own home the very same day.
              </li>
              <li className="fade-up delay-6">
                <strong>Thorough Aftercare:</strong> Our staff will provide you with a meticulously detailed post-op recovery plan to manage any swelling and prevent complications like infection.
              </li>
            </ul>
          </div>
          <div className="mo-split-image animate animate-slide-right">
            <img src="/Minor-Surgery.png" alt="Minor Oral Surgery" className="shaped-image" />
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

export default MinorOralSurgery;
