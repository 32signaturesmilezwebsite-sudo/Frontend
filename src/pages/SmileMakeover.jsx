import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./SmileMakeover.css";

const faqs = [
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const SmileMakeover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smile Makeover | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="sm-wrapper">
      <Header />
      <section className="sm-hero">
        <div className="sm-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container sm-hero-content">
          <h1 className="fade-up">Smile Makeover</h1>
          <p className="sm-hero-subtitle fade-up delay-1">Complete cosmetic transformations</p>
          <div className="sm-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      <section className="sm-centered-text">
        <div className="container sm-ct-container">
          <h2>State-of-the-art Smile Makeover</h2>
          <p>We combine advanced technology with a gentle, patient-first approach to offer you the most reliable and comfortable care possible. Your safety and comfort are our absolute highest priorities.</p>
        </div>
      </section>

      <section className="sm-split-section bg-cream">
  <div className="container sm-split-container">

    <div className="sm-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose us for Smile Makeover?</h2>

      <ul className="sm-bullet-list">
        <li className="fade-up delay-1">Advanced 3D digital smile planning</li>
        <li className="fade-up delay-2">Minimally invasive cosmetic techniques</li>
        <li className="fade-up delay-3">Comprehensive care throughout treatment</li>
        <li className="fade-up delay-4">Highly experienced aesthetic team</li>
      </ul>
    </div>

    <div className="sm-split-image animate animate-slide-right">
      <img
        src="/IMG_4514 (1).jpg"
        alt="Smile Makeover"
        className="shaped-image"
      />
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
export default SmileMakeover;
