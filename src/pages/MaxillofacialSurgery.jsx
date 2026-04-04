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
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const MaxillofacialSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Maxillofacial Surgery | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

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
          <h2>State-of-the-art Maxillofacial Surgery</h2>
          <p>We combine advanced technology with a gentle, patient-first approach to offer you the most reliable and comfortable care possible. Your safety and comfort are our absolute highest priorities.</p>
        </div>
      </section>

      <section className="ms-split-section bg-cream">
  <div className="container ms-split-container">

    <div className="ms-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose us for Maxillofacial Surgery?</h2>

      <ul className="ms-bullet-list">
        <li className="fade-up delay-1">Advanced 3D digital treatment planning</li>
        <li className="fade-up delay-2">Minimally invasive surgical techniques</li>
        <li className="fade-up delay-3">Comprehensive post-operative care</li>
        <li className="fade-up delay-4">Highly experienced surgical team</li>
      </ul>
    </div>

    <div className="ms-split-image animate animate-slide-right">
      <img
        src="/what-is-a-maxillofacial-surgeon.jpg"
        alt="Maxillofacial Surgery"
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
export default MaxillofacialSurgery;
