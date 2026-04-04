import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./FluorideTreatment.css";

const fluorideFaqs = [
  {
    question: "Is professional fluoride better than my toothpaste?",
    answer: "Absolutely. The fluoride varnish we apply in-office is significantly more concentrated than over-the-counter toothpaste. It adheres to the teeth longer, providing a massive boost to the remineralization process."
  },
  {
    question: "Do adults need fluoride?",
    answer: "Yes! While children benefit tremendously, adults experiencing gum recession, dry mouth (which decreases protective saliva), or a sudden high rate of cavities are excellent candidates for professional fluoride."
  }
];

const FluorideTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fluoride Treatments | 32 Signature Smilez";
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="flu-wrapper">
      <Header />
      <section className="flu-hero">
        <div className="flu-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container flu-hero-content">
          <h1 className="fade-up">Fluoride Treatments</h1>
          <p className="flu-hero-subtitle fade-up delay-1">Fortifying your enamel against daily acid attacks</p>
          <div className="flu-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Protect Your Smile</Link>
          </div>
        </div>
      </section>

      <section className="flu-centered-text">
        <div className="container flu-ct-container">
          <h2>Rebuild your natural defenses</h2>
          <p>
            Every single day, your teeth endure a barrage of acids produced by plaque bacteria and the foods you eat. This acid constantly strips essential minerals away from your enamel, weakening it and eventually causing a cavity.
          </p>
          <p>
            Fluoride acts as a powerful shield. When applied directly to the teeth, it fundamentally rebuilds and hardens the crystalline structure of the enamel, making it vastly more resistant to future decay. We utilize highly concentrated, great-tasting fluoride varnishes that paint on easily during routine cleanings.
          </p>
        </div>
      </section>

      <FAQ faqsData={fluorideFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default FluorideTreatment;
