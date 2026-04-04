import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./GumTreatment.css";

const gumFaqs = [
  {
    question: "What is Scaling and Root Planing?",
    answer: "Scaling involves carefully physically scraping the hardened calculus from beneath your gums. Root planing involves smoothing out the roots of your teeth to prevent bacteria from easily re-attaching, helping your gums heal rapidly."
  },
  {
    question: "Can periodontitis be cured completely?",
    answer: "No, severe periodontal disease cannot be completely 'cured' once massive bone loss occurs. However, with deep cleaning treatments and significantly improved home care, we absolutely can halt its progression and stabilize your teeth."
  }
];

const GumTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Periodontal Gum Treatment | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="gum-wrapper">
      <Header />

      <section className="gum-hero">
        <div className="gum-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container gum-hero-content">
          <h1 className="fade-up">Periodontal Treatment</h1>
          <p className="gum-hero-subtitle fade-up delay-1">Reversing disease and securing your foundation</p>
          <div className="gum-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Get Checked</Link>
          </div>
        </div>
      </section>

      <section className="gum-centered-text">
        <div className="container gum-ct-container">
          <h2>Healthy teeth require healthy gums</h2>
          <p>
            Periodontal (gum) disease is a silent, painless infection that slowly destroys the bone structure holding your teeth in place. It is actually the leading cause of tooth loss in adults today. 
          </p>
          <p>
            If you notice chronic bad breath, actively bleeding gums when you floss, or a sense of teeth suddenly feeling 'loose', you critically require deep-cleaning intervention immediately. Our expert hygiene team utilizes advanced ultrasonic scaling tech to sweep away deeply rooted bacterial infections and allow your gums to reattach strongly.
          </p>
        </div>
      </section>

      <section className="gum-split-section bg-cream">
  <div className="container gum-split-container">

    <div className="gum-split-content pr-large fade-up">
      <h2 className="fade-up">Halt disease progression quickly</h2>

      <ul className="gum-bullet-list">
        <li className="fade-up delay-1">Prevents tooth loss caused by bone erosion</li>
        <li className="fade-up delay-2">Eliminates bacteria responsible for bad breath</li>
        <li className="fade-up delay-3">Reduces overall body inflammation</li>
        <li className="fade-up delay-4">Ensures a completely pain-free deep cleaning</li>
      </ul>
    </div>

    <div className="gum-split-image animate animate-slide-right">
      <img
        src="/media__1774675904915.png"
        alt="Clinical deep cleaning"
        className="shaped-image"
      />
    </div>

  </div>
</section>
      <FAQ faqsData={gumFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default GumTreatment;
