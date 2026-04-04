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
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const MinorOralSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minor Oral Surgery | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="mo-wrapper">
      <Header />
      <section className="mo-hero">
        <div className="mo-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mo-hero-content">
          <h1 className="fade-up">Minor Oral Surgery</h1>
          <p className="mo-hero-subtitle fade-up delay-1">Safe and painless extractions</p>
          <div className="mo-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      <section className="mo-centered-text">
        <div className="container mo-ct-container">
          <h2>State-of-the-art Minor Oral Surgery</h2>
          <p>We combine advanced technology with a gentle, patient-first approach to offer you the most reliable and comfortable care possible. Your safety and comfort are our absolute highest priorities.</p>
        </div>
      </section>

      <section className="mo-split-section bg-cream">
  <div className="container mo-split-container">

    <div className="mo-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose us for Minor Oral Surgery?</h2>

      <ul className="mo-bullet-list">
        <li className="fade-up delay-1">Advanced 3D digital planning</li>
        <li className="fade-up delay-2">Minimally invasive techniques</li>
        <li className="fade-up delay-3">Complete post-operative care</li>
        <li className="fade-up delay-4">Highly experienced surgical team</li>
      </ul>
    </div>

    <div className="mo-split-image animate animate-slide-right">
      <img
        src="/Minor-Surgery.png"
        alt="Minor Oral Surgery"
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
export default MinorOralSurgery;
