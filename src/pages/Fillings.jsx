import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Fillings.css";
import { Eye, Smile, Shield } from "lucide-react";


const fillingFaqs = [
  {
    question: "What is a tooth-colored filling made of?",
    answer: "A modern tooth-colored (or composite) filling consists of a durable mixture of plastic resins and silica fillers. This creates a strong, highly aesthetic material that mimics the natural translucency of enamel."
  },
  {
    question: "Do you use metal or amalgam fillings?",
    answer: "We proudly run an amalgam-free practice. We only use advanced, safe composite resin that bonds structurally to your tooth without the use of harsh, temperature-sensitive metals containing mercury."
  },
  {
    question: "Does getting a cavity filled hurt?",
    answer: "Not at all! We use powerful, highly localized anesthetics to completely numb the isolated tooth before we begin. You will simply feel a bit of pressure or vibration as we clean the decay away."
  },
  {
    question: "How long does a filling take?",
    answer: "Most standard fillings are completed rapidly in a single visit, taking anywhere from 20 to 45 minutes depending on the size of the cavity."
  }
];

const Fillings = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Dental Fillings | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up animation
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // general animation (cards, split sections, etc.)
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // 🔥 observe BOTH types
  const elements = document.querySelectorAll(".fade-up, .animate");

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <div className="fil-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="fil-hero">
        <div
          className="fil-hero-bg zoom-bg"
          style={{
            backgroundImage:
              "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container fil-hero-content">
          <h1 className="fade-up">Tooth-Colored Fillings</h1>

          <p className="fil-hero-subtitle fade-up delay-1">
            Seamlessly repair cavities before they spread
          </p>

          <div className="fil-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Request Appointment
            </Link>

            <a href="tel:+919077770586" className="btn-outline-dark">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. CENTERED BLOCK */}
    <section className="fil-centered-text">
  <div className="container fil-ct-container">

    <h2 className="fade-up">
      Stop decay in its tracks painlessly
    </h2>

    <p className="fade-up delay-1">
      No matter how diligently you brush, cavities can still happen. The most critical step is addressing tooth decay early before it penetrates the soft inner pulp of the tooth, which can trigger severe pain and require a root canal.
    </p>

    <p className="fade-up delay-2">
      At 32 Signature Smilez, we utilize advanced, mercury-free composite resins that bond directly to your tooth structure. These fillings functionally restore the cavity while remaining completely invisible when you laugh or smile. Got tooth sensitivity? Don't wait. Call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      today.
    </p>

  </div>
</section>


      {/* 3. SAVE AND SMILE */}
      <section className="fil-dark-split">
  <div
    className="fil-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="fil-dark-overlay"></div>

  <div className="container fil-dark-container">

    {/* IMAGE */}
    <div className="fil-ds-image animate animate-slide-left">
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
    <div className="fil-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Repairing a cavity today is incredibly inexpensive compared to repairing
        a broken or deeply infected tooth tomorrow. If you're concerned about
        costs, our financing team will happily outline how your dental insurance
        benefits cover composite fillings to slash your out-of-pocket expenses!
      </p>
    </div>

  </div>
</section>


     {/* 4. WHY COMPOSITE */}
<section className="fil-split-section bg-cream">
  <div className="container fil-split-container">

    <div className="fil-split-content pr-large animate animate-slide-right">
      <h2 className="animate">The advantages of composite resin</h2>

      <p className="fil-bold-lead animate delay-1">
        Silver fillings are a relic of the past. Our composites offer vastly superior restorative benefits.
      </p>

      <ul className="fil-bullet-list">
        <li className="animate delay-1">They are expertly color-matched to your natural enamel and dentin</li>
        <li className="animate delay-2">Composite chemically bonds to the tooth, strengthening its core</li>
        <li className="animate delay-3">Less healthy tooth structure needs to be removed prior to placement</li>
        <li className="animate delay-4">They do not expand or contract rapidly with hot/cold temperatures</li>
        <li className="animate delay-5">100% free of mercury and harsh metals</li>
      </ul>

      <p className="fil-cta-text animate delay-3">
        Say goodbye to visible metal. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to schedule your cavity repair quickly.
      </p>

      <Link
        to="/new-patients"
        className="btn-solid-orange fil-split-btn animate delay-4"
      >
        Learn More
      </Link>
    </div>

    <div className="fil-split-image animate animate-slide-left">
      <img
        src="/Gemini_Generated_Image_3zlodd3zlodd3zlo.png"
        alt="Happy Dental Patient"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>

{/* 5. PROCESS */}
<section className="fil-split-section bg-white">
  <div className="container fil-split-container reverse-mobile">

    <div className="fil-split-image pr-large animate animate-slide-left">
      <img
        src="/What-are-Dental-Fillings-A-Quick-Guide.png"
        alt="Dentist Filling Cavity"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="fil-split-content animate animate-slide-right">
      <h2 className="animate">Our rapid restorative process</h2>

      <p className="fil-bold-lead mb-20 animate delay-1">
        We prioritize absolute comfort and speed during your filling procedure:
      </p>

      <ul className="fil-bullet-list">
        <li className="animate delay-1"><strong>Total Numbing:</strong> You feel zero discomfort.</li>
        <li className="animate delay-2"><strong>Detailed Cleaning:</strong> Decay is fully removed.</li>
        <li className="animate delay-3"><strong>Layering Resin:</strong> Composite rebuilds the tooth.</li>
        <li className="animate delay-4"><strong>Light Curing:</strong> Instant hardening & polishing.</li>
      </ul>
    </div>

  </div>
</section>


      {/* 6. HEXAGONS SECTION */}
      <section className="fil-redefining bg-white">
  <div className="container">

    <h2 className="animate">Restorative Integrity</h2>
    
    <div className="fil-ook-grid">

      {/* CARD 1 */}
      <div className="fil-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Eye size={48} strokeWidth={1.5} />
        </div>
        <h3>Invisible Blending</h3>
      </div>

      {/* CARD 2 */}
      <div className="fil-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Smile size={48} strokeWidth={1.5} />
        </div>
        <h3>Zero Discomfort</h3>
      </div>

      {/* CARD 3 */}
      <div className="fil-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <Shield size={48} strokeWidth={1.5} />
        </div>
        <h3>Enamel Preservation</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={fillingFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Fillings;
