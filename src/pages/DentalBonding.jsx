import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./DentalBonding.css";
import { Heart, Bed, Sparkles } from "lucide-react";

const bondingFaqs = [
  {
    question: "What is tooth bonding?",
    answer: "Tooth bonding is a cosmetic dental procedure where a tooth-colored composite resin is applied to a tooth, shaped, and polished to repair damage or improve appearance seamlessly."
  },
  {
    question: "Is bonding right for me?",
    answer: "Bonding is ideal for repairing minor imperfections like small chips, cracks, slight discoloration, or small gaps between teeth. During your consultation, we carefully evaluate your smile to determine if it's the perfect fit."
  },
  {
    question: "How long does bonding last?",
    answer: "With proper care, dental bonding can last between 3 to 10 years before requiring touch-ups. Its longevity depends on oral habits, such as avoiding biting on hard objects or ice."
  },
  {
    question: "How do I take care of my bonded teeth?",
    answer: "Treat your bonded teeth just like your natural teeth! Brush twice daily, floss, and maintain regular dental check-ups. Avoid staining substances directly after the procedure."
  }
];



const DentalBonding = () => {
  useEffect(() => {
    // Scroll to top + title
    window.scrollTo(0, 0);
    document.title = "Tooth Bonding | 32 Signature Smilez";

    // Select all animated elements
    const elements = document.querySelectorAll(".animate, .fade-up");

    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");

            // Stop observing after animation (better performance)
            observerRef.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px", // triggers slightly earlier
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="db-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
   <section className="db-hero">
        <div
          className="db-hero-bg zoom-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container db-hero-content">
          <h1 className="fade-up">
            32 Signature Smilez Tooth Bonding
          </h1>

          <p className="db-hero-subtitle fade-up delay-1">
            Expert solutions for flawless smiles!
          </p>

          <div className="db-hero-buttons fade-up delay-2">
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
     <section className="db-centered-text">
  <div className="container db-ct-container">
    
    <h2 className="fade-up">
      Discover the magic of tooth bonding
    </h2>

    <p className="fade-up delay-1">
      Got a little chip or gap you don't love? Tooth bonding is a quick and easy fix that works wonders in just one visit. At 32 Signature Smilez, our tooth bonding service uses top-notch materials to fix chips, gaps, and stains on your teeth. It's quick and painless, and you'll walk out loving your smile even more.
    </p>

    <p className="fade-up delay-2">
      We are here to give you a smile you're proud to show off! Call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      to schedule an appointment.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="db-dark-split">
  <div
    className="db-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="db-dark-overlay"></div>

  <div className="container db-dark-container">

    {/* IMAGE SIDE */}
    <div className="db-ds-image animate animate-slide-left">
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

    {/* TEXT SIDE */}
    <div className="db-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Improving your smile with tooth bonding doesn't have to break the bank.
        It's one of the most budget-friendly ways to make your smile shine. We
        accept various insurance plans and offer plenty of payment options to
        make sure you can get the care you need without any stress.
      </p>
    </div>

  </div>
</section>

  {/* 4. WHY CHOOSE BONDING */}
<section className="db-split-section bg-cream">
  <div className="container db-split-container">

    <div className="db-split-content pr-large">

      <h2 className="animate fade-up delay-1">Why choose bonding?</h2>

      <p className="db-bold-lead animate fade-up delay-2">
        Our 32 Signature Smilez tooth bonding offers a fast fix for a beautiful smile.
      </p>

      <ul className="db-bullet-list">
        <li className="animate fade-up delay-3">Closes small gaps with ease</li>
        <li className="animate fade-up delay-4">Smooths out chips and rough spots</li>
        <li className="animate fade-up delay-5">Brightens up stains or discoloration</li>
        <li className="animate fade-up delay-3">A gentle alternative to more intensive treatments</li>
        <li className="animate fade-up delay-4">Usually done in one quick visit</li>
      </ul>

      <p className="db-cta-text animate fade-up delay-5">
        Ready to start? Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to chat about this and other cosmetic options.
      </p>

      <Link to="/new-patients" className="btn-solid-orange db-split-btn animate fade-up delay-5">
        Learn More
      </Link>
    </div>

    <div className="db-split-image animate animate-slide-right delay-2">
      <img
        src="/Gemini_Generated_Image_o978ydo978ydo978.png"
        alt="Dentist checking patient"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="db-split-section bg-white">
  <div className="container db-split-container reverse-mobile">

    <div className="db-split-image pr-large animate animate-slide-left delay-2">
      <img
        src="/10922-dental-bonding.jpg"
        alt="Dentist Consultation"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="db-split-content">

      <h2 className="animate fade-up delay-1">
        Step-by-step to a stunning smile
      </h2>

      <p className="db-bold-lead mb-20 animate fade-up delay-2">
        During your bonding appointment, we will:
      </p>

      <ul className="db-bullet-list">
        <li className="animate fade-up delay-3">Consultation & smile assessment</li>
        <li className="animate fade-up delay-4">Shade matching for natural look</li>
        <li className="animate fade-up delay-5">Resin application & shaping</li>
        <li className="animate fade-up delay-3">Polishing for perfect finish</li>
        <li className="animate fade-up delay-4">Aftercare guidance</li>
      </ul>

    </div>

  </div>
</section>

      {/* 6. FEATURES (Hexagons) */}
      <section className="db-redefining bg-white">
  <div className="container">

    <h2 className="animate">Personalized Cosmetic Solutions</h2>
    
    <div className="db-ook-grid">

      {/* CARD 1 */}
      <div className="db-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Heart size={48} strokeWidth={1.5} />
        </div>
        <h3>Tailored to You</h3>
      </div>

      {/* CARD 2 */}
      <div className="db-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Bed size={48} strokeWidth={1.5} />
        </div>
        <h3>Relaxing Visits</h3>
      </div>

      {/* CARD 3 */}
      <div className="db-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <Sparkles size={48} strokeWidth={1.5} />
        </div>
        <h3>Lasting Results</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={bondingFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default DentalBonding;
