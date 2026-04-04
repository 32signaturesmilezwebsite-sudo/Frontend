import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./TeethWhitening.css";
import { Heart, Sparkles, Armchair } from "lucide-react";


const teethWhiteningFaqs = [
  {
    question: "What causes teeth discoloration?",
    answer: "Teeth can become discolored due to aging, certain foods and drinks (like coffee, tea, and red wine), tobacco use, and certain medications. Surface stains affect the enamel, while deeper stains can result from trauma or genetics."
  },
  {
    question: "Is professional teeth whitening safe?",
    answer: "Yes, professional teeth whitening is completely safe when supervised by a dentist. We use specialized products that protect your enamel and gums while delivering significantly better results than over-the-counter options."
  },
  {
    question: "How long does the whitening effect last?",
    answer: "The effects of professional whitening typically last from one to three years. However, this depends heavily on your lifestyle habits, such as smoking or consuming staining beverages. Good oral hygiene and touch-up treatments can prolong your bright smile."
  },
  {
    question: "Will teeth whitening work on all teeth?",
    answer: "Whitening works best on natural teeth. It will not change the color of existing restorative work like crowns, veneers, or fillings. During your consultation, we evaluate your smile to ensure whitening is the best option for you."
  }
];

const TeethWhitening = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Teeth Whitening | 32 Signature Smilez";

  const elements = document.querySelectorAll(".fade-up, .animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show", "show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="tw-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="tw-hero">
  <div
    className="tw-hero-bg"
    style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
  ></div>

  <div className="container tw-hero-content">

    <h1 className="fade-up delay-1">
      Teeth Whitening Dentist
    </h1>

    <p className="tw-hero-subtitle fade-up delay-2">
      Brighten your smile with expert care
    </p>

    <div className="tw-hero-buttons fade-up delay-3">
      <Link to="/contact" className="btn-solid-orange">
        Request Appointment
      </Link>

      <a href="tel:+919077770586" className="btn-outline-dark">
        Call: +91 90777 70586
      </a>
    </div>

  </div>
</section>

      {/* 2. CENTERED TYPOGRAPHY BLOCK */}
      <section className="tw-centered-text">
  <div className="container tw-ct-container">

    <h2 className="fade-up delay-1">
      Show off a spotless smile
    </h2>

    <p className="fade-up delay-2">
      Are you struggling with stained or discolored teeth? We understand
      how this can impact your confidence. Our teeth whitening treatments
      are designed to give you a brighter, more radiant smile.
    </p>

    <p className="fade-up delay-3">
      With professional whitening, you can look and feel your best. Ready to boost your smile's health and appearance? Let's get started.
    </p>

  </div>
</section>


      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="tw-dark-split">
  <div
    className="tw-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="tw-dark-overlay"></div>

  <div className="container tw-dark-container">

    {/* IMAGE */}
    <div className="tw-ds-image animate animate-slide-left">
      <div className="frame-outer">
        <div className="frame-inner">
          <img
            src="/Deep Datta.PNG"
            alt="Dr. Deep Datta"
            className="dr-portrait-fixed"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="tw-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        We provide affordable dental services with flexible payment plans
        and insurance support so you can achieve your dream smile without
        stress. Ask our team about our payment options!
      </p>

    </div>

  </div>
</section>

      {/* 4. BENEFITS */}
<section className="tw-split-section bg-cream">
  <div className="container tw-split-container">

    {/* TEXT — animate only the container, children inherit visibility */}
    <div className="tw-split-content pr-large fade-up delay-1">
      <h2>How teeth whitening can transform your smile</h2>

      <p>
        Professional whitening treatments offer expert solutions to combat stains and vastly improve your oral aesthetics.
      </p>

      <ul className="tw-bullet-list">
        <li>Remove stubborn stains caused by food and drink</li>
        <li>Significantly improve natural tooth color</li>
        <li>Boost your self-esteem and confidence</li>
        <li>Experience quick &amp; highly effective treatments</li>
        <li>Enjoy a safe procedure supervised by dental experts</li>
      </ul>

      <p className="tw-cta-text">
        Ready to start? Call <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a>
      </p>

      <Link to="/new-patients" className="btn-solid-orange tw-split-btn">
        Learn More
      </Link>
    </div>

    {/* IMAGE — animate slides in from left */}
    <div className="tw-split-image animate animate-slide-left">
      <img
        src="/271997434_1762637817260466_4433929669717644270_n.jpg"
        alt="Teeth Whitening"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="tw-split-section bg-white">
  <div className="container tw-split-container reverse-mobile">

    {/* IMAGE — animate slides in */}
    <div className="tw-split-image pr-large animate animate-slide-right">
      <img
        src="/Kids-Dentistry.png"
        alt="Dentist Consulting"
        className="shaped-image"
      />
    </div>

    {/* TEXT — fade-up so children are always visible together */}
    <div className="tw-split-content fade-up delay-1">
      <h2>Our teeth whitening process</h2>

      <p>
        When you visit us, we'll take the time to evaluate your smile and tailor a treatment perfectly suited for you.
      </p>

      <h3 className="tw-sub-heading">Step-by-step to a brighter smile</h3>

      <ol className="tw-number-list">
        <li><strong>Evaluation:</strong> Initial consultation to assess your teeth's health and staining.</li>
        <li><strong>Planning:</strong> Drafting a customized whitening treatment plan perfectly for you.</li>
        <li><strong>Procedure:</strong> The professional whitening application ensuring an even, dazzling result.</li>
        <li><strong>Aftercare:</strong> Post-treatment care instructions to maintain the new brightness.</li>
      </ol>
    </div>

  </div>
</section>

      {/* 6. FEATURES (matching ProblemsWeTreat hex card style) */}
      <section className="tw-redefining">
  <div className="container">

    <h2 className="fade-up delay-1">
      Comfortable, refreshing dental care
    </h2>

    <div className="tw-ook-grid">

      {/* CARD 1 */}
      <div className="tw-ook-card animate delay-1">
        <div className="hex-icon">
          <Armchair size={42} strokeWidth={1.5} />
        </div>
        <h3>Complete Comfort</h3>
        <p>
          Kick back and relax — our cutting-edge pain management techniques ensure your whitening visit is nothing short of comfortable.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="tw-ook-card animate delay-2">
        <div className="hex-icon">
          <Heart size={42} strokeWidth={1.5} />
        </div>
        <h3>Tailored Care for Every Smile</h3>
        <p>
          From your first consultation, we craft a personalised whitening plan designed specifically for your teeth and lifestyle.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="tw-ook-card animate delay-3">
        <div className="hex-icon">
          <Sparkles size={42} strokeWidth={1.5} />
        </div>
        <h3>Cutting-Edge Whitening Technology</h3>
        <p>
          We use the latest professional-grade whitening systems that deliver noticeably brighter, longer-lasting results.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={teethWhiteningFaqs} customTitle="Questions? We’ve Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default TeethWhitening;