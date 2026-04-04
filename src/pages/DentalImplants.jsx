import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./DentalImplants.css";

const faqs = [
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const DentalImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Implants | 32 Signature Smilez";

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="di-wrapper">
      <Header />
      <section className="di-hero">
        <div
          className="di-hero-bg zoom-bg"
          style={{
            backgroundImage:
              "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container di-hero-content">
          <h1 className="fade-up">Dental Implants</h1>

          <p className="di-hero-subtitle fade-up delay-1">
            Permanent tooth replacement
          </p>

          <div className="di-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

     <section className="di-centered-text">
  <div className="container di-ct-container">

    <h2 className="fade-up">
      State-of-the-art Dental Implants
    </h2>

    <p className="fade-up delay-1">
      We combine advanced technology with a gentle, patient-first approach to offer you the most reliable and comfortable care possible. Your safety and comfort are our absolute highest priorities.
    </p>

  </div>
</section>


     <section className="di-split-section bg-cream">
  <div className="container di-split-container">

    <div className="di-split-content pr-large animate animate-slide-right">
      <h2 className="animate">
        Why choose us for Dental Implants?
      </h2>

      <ul className="di-bullet-list">
        <li className="animate delay-1">Detailed, 3D digital treatment planning</li>
        <li className="animate delay-2">Minimal-discomfort surgical techniques</li>
        <li className="animate delay-3">Comprehensive post-operative care and support</li>
        <li className="animate delay-4">Expert team with thousands of successful cases</li>
      </ul>
    </div>

    <div className="di-split-image animate animate-slide-left">
      <img
        src="/drn-0707.jpg"
        alt="Dental Implants"
        className="shaped-image img-zoom"
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
export default DentalImplants;
