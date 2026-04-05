import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./ToothExtractions.css";

const extractionFaqs = [
  {
    question: "Do you extract wisdom teeth?",
    answer: "Yes, we handle straightforward wisdom teeth extractions directly in our office. If the tooth is severely impacted against the jawbone, we will seamlessly refer you to our trusted oral surgery partners."
  },
  {
    question: "Will the extraction hurt?",
    answer: "No. We utilize extremely potent local anesthetics to completely numb the bone, tissue, and tooth before we do anything. You will feel pressure, but absolutely no sharp pain during the removal."
  }
];

const ToothExtractions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tooth Extractions | 32 Signature Smilez";

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
            if (entry.target.classList.contains("te-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .te-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="te-wrapper">
      <Header />

      <section className="te-hero">
        <div className="te-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container te-hero-content">
          <h1 className="fade-up">Gentle Extractions</h1>
          <p className="te-hero-subtitle fade-up delay-1">Compassionate care when removal is the only option</p>
          <div className="te-hero-buttons fade-up delay-2">
            <a href="tel:+919077770586" className="btn-solid-orange">Call: +91 90777 70586</a>
          </div>
        </div>
      </section>

      <section className="te-centered-text">
        <div className="container te-ct-container">
          <h2>Your comfort is our ultimate priority</h2>
          <p>
            At 32 Signature Smilez, our steadfast goal is always to save your natural tooth. However, when a tooth is shattered beyond repair, causing severe crowding, or hopelessly infected, extraction becomes a critical medical necessity. 
          </p>
          <p>
            We pride ourselves on providing incredibly gentle, stress-free extractions. We offer nitrous oxide sedation to calm your nerves, and we work methodically to ensure the tooth is removed with minimal trauma to your surrounding tissues, ensuring a rapid, painless recovery.
          </p>
        </div>
      </section>

      <section className="te-dark-split">
        <div className="te-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="te-dark-overlay"></div>
        <div className="container te-dark-container">
          <div className="te-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="te-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              We understand that the thought of a tooth extraction can be intimidating both physically and financially. At 32 Signature Smilez, we ensure that necessary extractions are affordable and straightforward. If an extraction is needed to eliminate infection or prepare for restorative implants or bridges, our team will work closely with your insurance provider to maximize your benefits. For patients without coverage, we offer highly flexible payment plans, allowing you to prioritize your health, permanently eliminate dental pain, and focus purely on your recovery—not the bill.
            </p>
          </div>
        </div>
      </section>

      <section className="te-split-section bg-cream">
        <div className="container te-split-container">
          <div className="te-split-content pr-large fade-up">
            <h2 className="fade-up">Our approach to painless extractions</h2>
            <p className="te-intro fade-up delay-1">
              Removing a tooth doesn't have to be a traumatic experience. Our structured, patient-first approach guarantees complete numbing and careful tissue handling.
            </p>
            <ul className="te-bullet-list">
              <li className="fade-up delay-2">
                <strong>Advanced Anesthetics:</strong> We use high-grade local anesthetics to ensure the entire treatment area is profoundly numb before the procedure even begins.
              </li>
              <li className="fade-up delay-3">
                <strong>Sedation Options:</strong> For patients with severe dental anxiety, we offer calming nitrous oxide to keep you completely relaxed during the extraction.
              </li>
              <li className="fade-up delay-4">
                <strong>Atraumatic Methods:</strong> We utilize specialized tools to gently elevate the tooth, preserving as much surrounding jawbone and soft tissue as possible.
              </li>
              <li className="fade-up delay-5">
                <strong>Bone Grafting Prep:</strong> If you plan to replace the extracted tooth with an implant, we immediately process a minor bone graft to protect jaw density.
              </li>
              <li className="fade-up delay-6">
                <strong>Detailed Aftercare:</strong> You'll receive explicit, comprehensive post-operative instructions to prevent dry sockets and ensure swift, comfortable healing.
              </li>
            </ul>
          </div>
          <div className="te-split-image animate animate-slide-right">
            <img src="/dental-sealants.jpg" alt="Gentle Tooth Extraction Process" className="shaped-image" />
          </div>
        </div>
      </section>

      <FAQ faqsData={extractionFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ToothExtractions;
