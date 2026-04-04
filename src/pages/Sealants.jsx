import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Sealants.css";

const sealantsFaqs = [
  {
    question: "Do sealants hurt to apply?",
    answer: "Not at all! The process is completely painless and requires strictly zero drilling or numbing. We simply clean the tooth, paint on a liquid coating, and harden it instantly with a special light."
  },
  {
    question: "Are sealants only for children?",
    answer: "While we highly recommend them for children as soon as their permanent molars erupt (around age 6 and 12), adults with deep molar grooves who are highly prone to decay can also benefit immensely from sealants."
  }
];

const Sealants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Sealants | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="sea-wrapper">
      <Header />

      <section className="sea-hero">
        <div className="sea-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container sea-hero-content">
          <h1 className="fade-up">Dental Sealants</h1>
          <p className="sea-hero-subtitle fade-up delay-1">Invisible plastic armor for your back teeth</p>
          <div className="sea-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Protect Your Smile</Link>
          </div>
        </div>
      </section>

      <section className="sea-centered-text">
        <div className="container sea-ct-container">
          <h2>Block cavities before they start</h2>
          <p>
            The deep pits and grooves on the chewing surfaces of your back molars are prime breeding grounds for cavity-causing bacteria. Even the most rigorous daily brushing cannot force toothbrush bristles deep enough to clean these microscopic crevices.
          </p>
          <p>
            We apply a highly durable, clear protective coating over these grooves to literally "seal" out food particles and acid, effectively establishing a physical barrier against deeply rooted tooth decay.
          </p>
        </div>
      </section>

      <section className="sea-split-section bg-cream">
  <div className="container sea-split-container">

    <div className="sea-split-content pr-large fade-up">
      <h2 className="fade-up">The massive benefits of sealing</h2>

      <ul className="sea-bullet-list">
        <li className="fade-up delay-1">No drilling or numbing required</li>
        <li className="fade-up delay-2">Long-lasting protection for years</li>
        <li className="fade-up delay-3">Virtually invisible application</li>
        <li className="fade-up delay-4">Prevents costly future treatments</li>
      </ul>
    </div>

    <div className="sea-split-image animate animate-slide-right">
      <img
        src="/media__1774675276734.png"
        alt="Dental sealing procedure"
        className="shaped-image"
      />
    </div>

  </div>
</section>


      <FAQ faqsData={sealantsFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Sealants;
