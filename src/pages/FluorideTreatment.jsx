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
    answer: "Absolutely. The fluoride varnish we apply in-office is much more concentrated than over-the-counter toothpaste and remains on the teeth longer, providing enhanced protection and remineralization."
  },
  {
    question: "Do adults need fluoride?",
    answer: "Yes. Adults with gum recession, dry mouth, frequent cavities, or weakened enamel can benefit greatly from professional fluoride treatments."
  },
  {
    question: "How does fluoride protect my teeth?",
    answer: "Fluoride strengthens tooth enamel and helps repair early stages of decay by promoting remineralization, making teeth more resistant to acid attacks from bacteria and food."
  },
  {
    question: "Is fluoride treatment safe?",
    answer: "Yes, professional fluoride treatments are safe when applied by dental professionals. The amount used is carefully controlled and widely recommended for both children and adults."
  },
  {
    question: "How often should I get fluoride treatment?",
    answer: "Most patients benefit from fluoride treatments every 3 to 6 months, depending on their risk of tooth decay and overall oral health."
  },
  {
    question: "How long does a fluoride treatment take?",
    answer: "The procedure is quick and typically takes only a few minutes. The fluoride is applied directly to the teeth and begins working immediately."
  },
  {
    question: "Can I eat or drink after fluoride treatment?",
    answer: "It is usually recommended to avoid eating or drinking for at least 30 minutes after treatment to allow the fluoride to fully absorb and provide maximum benefit."
  },
  {
    question: "Does fluoride help with tooth sensitivity?",
    answer: "Yes, fluoride can reduce tooth sensitivity by strengthening enamel and protecting exposed areas of the teeth."
  },
  {
    question: "Is fluoride treatment suitable for children?",
    answer: "Yes, fluoride is especially beneficial for children as it helps strengthen developing teeth and prevents cavities during their early years."
  },
  {
    question: "Is fluoride covered by insurance?",
    answer: "Many dental insurance plans cover fluoride treatments, especially for children. Our team can help you understand your coverage and available options."
  }
];

const FluorideTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fluoride Treatments | 32 Signature Smilez";

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
            if (entry.target.classList.contains("flu-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .flu-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

      <section className="flu-dark-split">
        <div className="flu-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="flu-dark-overlay"></div>
        <div className="container flu-dark-container">
          <div className="flu-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="flu-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              Preventive care like professional fluoride treatments is one of the easiest and most cost-effective ways to protect your oral health. Instead of paying for costly fillings, crowns, and invasive procedures later down the line, a quick fluoride application fortifies your teeth against decay before it even begins. Best of all, most major dental insurance plans fully cover preventive fluoride treatments, making it an incredibly accessible way to ensure your smile remains strong and healthy for years to come.
            </p>
          </div>
        </div>
      </section>

      <section className="flu-split-section bg-cream">
        <div className="container flu-split-container">
          <div className="flu-split-content pr-large fade-up">
            <h2 className="fade-up">The massive benefits of fluoride</h2>
            <p className="flu-intro fade-up delay-1">
              Fluoride is nature’s cavity fighter. Our professional-grade fluoride treatments take only minutes to apply but provide long-lasting benefits that dramatically improve your dental resilience.
            </p>
            <ul className="flu-bullet-list">
              <li className="fade-up delay-2">
                <strong>Enamel Remineralization:</strong> Actively restores calcium and phosphate ions back into the tooth surface, reversing early microscopic decay.
              </li>
              <li className="fade-up delay-3">
                <strong>Acid Resistance:</strong> Forms a stronger compound (fluorapatite) on your teeth that is far more resistant to dietary acids than natural enamel.
              </li>
              <li className="fade-up delay-4">
                <strong>Prevents Cavities:</strong> Severely disrupts the ability of plaque bacteria to produce decay-causing acids in your mouth.
              </li>
              <li className="fade-up delay-5">
                <strong>Sensitivity Relief:</strong> Reduces tooth sensitivity by sealing microscopic tubules that lead to the tooth's sensitive nerve center.
              </li>
              <li className="fade-up delay-6">
                <strong>Painless Application:</strong> The varnish is painted on simply and quickly right after your cleaning, with no drilling or injections required.
              </li>
            </ul>
          </div>
          <div className="flu-split-image animate animate-slide-right">
            <img src="/how fluoride works.jpg" alt="Fluoride Treatment application" className="shaped-image" />
          </div>
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
