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
    // Shared scroll-reveal
    return  }, []);

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

      <FAQ faqsData={extractionFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ToothExtractions;
