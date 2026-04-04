import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Mouthguards.css";

const guardFaqs = [
  {
    question: "Why can't I just buy a 'boil-and-bite' guard from the store?",
    answer: "Store-bought guards are bulky, uncomfortable, and severely hinder breathing and speaking during sports. Furthermore, poorly fitting nighttime grinding guards can actually permanently shift your bite out of alignment."
  },
  {
    question: "How long does a custom guard last?",
    answer: "With proper cleaning and storage, a custom night guard made from our highly durable acrylic can last anywhere from 3 to 5 years even under heavy grinding pressure."
  }
];

const Mouthguards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Custom Mouthguards | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="mg-wrapper">
      <Header />

      <section className="mg-hero">
        <div className="mg-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mg-hero-content">
          <h1 className="fade-up">Custom Mouthguards</h1>
          <p className="mg-hero-subtitle fade-up delay-1">Protecting your smile while you sleep and play</p>
          <div className="mg-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Get Protected</Link>
          </div>
        </div>
      </section>

      <section className="mg-centered-text">
        <div className="container mg-ct-container">
          <h2>Prevention is better than a fracture</h2>
          <p>
            Whether you're engaging in high-impact contact sports, or you physically grind your teeth together at night due to stress (Bruxism), the immense forces exerted on your natural enamel will inevitably cause catastrophic fractures or premature tooth wear.
          </p>
          <p>
            We fabricate ultra-precise, comfortable custom mouthguards utilizing highly accurate digital scans. Our appliances absorb impact shock flawlessly and protect your vital restorations over the long haul.
          </p>
        </div>
      </section>

      <section className="mg-split-section bg-cream">
  <div className="container mg-split-container">

    <div className="mg-split-content pr-large fade-up">
      <h2 className="fade-up">The dual benefits of our guards</h2>

      <ul className="mg-bullet-list">
        <li className="fade-up delay-1">
          <strong>Sports Guards:</strong> Protect teeth from impact and injuries during sports.
        </li>

        <li className="fade-up delay-2">
          <strong>Night Guards:</strong> Prevent teeth grinding and relieve jaw pain.
        </li>

        <li className="fade-up delay-3">
          <strong>Custom Fit:</strong> Designed precisely for comfort and secure placement.
        </li>
      </ul>
    </div>

    <div className="mg-split-image animate animate-slide-right">
      <img
        src="/media__1774670112226.png"
        alt="Custom Mouthguard fitting"
        className="shaped-image"
      />
    </div>

  </div>
</section>

      <FAQ faqsData={guardFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Mouthguards;
