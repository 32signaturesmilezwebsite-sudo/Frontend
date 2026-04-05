import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./SameDayCrowns.css";
import { Cpu, Clock, ShieldCheck } from "lucide-react";

const sameDayFaqs = [
  {
    question: "What is a same-day crown?",
    answer: "A same-day crown is a permanent, custom-crafted ceramic crown milled directly in our office using advanced 3D CAD/CAM technology, allowing us to restore your tooth in just one visit instead of two."
  },
  {
    question: "Are same-day crowns as durable as traditional ones?",
    answer: "Absolutely! The blocks of ceramic used to mill your crown are incredibly dense and durable. They offer the exact same longevity and functional strength as traditional lab-made crowns."
  },
  {
    question: "Do I have to wear a temporary crown?",
    answer: "No! This is one of the biggest benefits. Because your final permanent crown is milled while you wait in the chair, you skip the unreliable, uncomfortable temporary crown phase entirely."
  },
  {
    question: "Does the process require messy impressions?",
    answer: "Not anymore. We use an ultra-precise digital intraoral scanner to map your teeth in seconds, completely eliminating the need for gooey, uncomfortable impression trays."
  }
];

const SameDayCrowns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Same-Day Crowns | 32 Signature Smilez";

    // Scroll Reveal
    const elements = document.querySelectorAll('.fade-up, .animate');

    const reveal = () => {
      const trigger = window.innerHeight * 0.85;

      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add('active');
          el.classList.add('animate-show');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);


  return (
    <div className="sd-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
     <section className="sd-hero">
        <div
          className="sd-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container sd-hero-content">
          <h1 className="fade-up">Same-Day Dental Crowns</h1>

          <p className="sd-hero-subtitle fade-up delay-1">
            Instant restoration utilizing advanced 3D milling technology
          </p>

          <div className="sd-hero-buttons fade-up delay-2">
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
      <section className="sd-centered-text">
        <div className="container sd-ct-container">
          <h2>Restore your tooth in a single visit</h2>
          <p>
            Why wait weeks with an uncomfortable temporary cap when you can have a perfect, permanent crown today? At 32 Signature Smilez, we utilize cutting-edge CAD/CAM digital technology to design, fabricate, and place your custom ceramic crown all in one convenient appointment.
          </p>
          <p>
            This state-of-the-art procedure saves you valuable time, eliminates messy physical impressions, and rapidly delivers a beautiful, color-matched restoration that instantly fortifies your damaged tooth. Secure your single-visit smile today—dial <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a> to consult our specialists.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="br-dark-split">
  <div
    className="br-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="br-dark-overlay"></div>

  <div className="container br-dark-container">

    {/* IMAGE */}
    <div className="br-ds-image animate animate-slide-left">
      <div className="frame-outer">
        <div className="frame-inner">
          <img
            src="/Deep Datta.PNG"   // ✅ fixed name (no space + lowercase)
            alt="Dr.Deep Datta"
            className="dr-portrait-fixed"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="br-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Don't let financial anxiety prevent you from restoring missing teeth.
        Leaving a gap untreated can lead to bone loss and teeth shifting.
        At 32 Signature Smilez, we proudly accept numerous insurance layouts
        and offer flexible, interest-free payment models to protect your health.
      </p>
    </div>

  </div>
</section>

     {/* 4. WHY CHOOSE */}
<section className="sd-split-section bg-cream">
  <div className="container sd-split-container">

    <div className="sd-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose a same-day crown?</h2>

      <p className="sd-bold-lead fade-up delay-1">
        Efficiency meets absolute precision for an unparalleled patient experience.
      </p>

      <ul className="sd-bullet-list">
        <li className="fade-up delay-1">Completed entirely in a single convenient dental visit</li>
        <li className="fade-up delay-2">Eliminates fragile, annoying temporary crowns</li>
        <li className="fade-up delay-3">Utilizes highly accurate, mess-free 3D digital oral scanning</li>
        <li className="fade-up delay-4">Milled from highly durable, stain-resistant ceramic blocks</li>
        <li className="fade-up delay-5">Expertly color-matched to blend seamlessly with your smile</li>
      </ul>

      <p className="sd-cta-text fade-up delay-2">
        Don't wait weeks for a healthy smile. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to schedule your rapid restoration right now.
      </p>

      <Link to="/new-patients" className="btn-solid-orange sd-split-btn fade-up delay-3">
        Learn More
      </Link>
    </div>

    <div className="sd-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_dyze4vdyze4vdyze (1).png"
        alt="Dentist Reviewing Digital Scan"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="sd-split-section bg-white">
  <div className="container sd-split-container reverse-mobile">

    <div className="sd-split-image animate animate-slide-left">
      <img
        src="/same.png"
        alt="Digital Dental Milling"
        className="shaped-image"
      />
    </div>

    <div className="sd-split-content fade-up">
      <h2 className="fade-up">The streamlined digital workflow</h2>

      <p className="sd-bold-lead mb-20 fade-up delay-1">
        We employ sophisticated robotics while you relax in the chair:
      </p>

      <ul className="sd-bullet-list">
        <li className="fade-up delay-1"><strong>Digital Impressions:</strong> Instant 3D scan of your tooth.</li>
        <li className="fade-up delay-2"><strong>Virtual Design:</strong> Crown designed digitally on-screen.</li>
        <li className="fade-up delay-3"><strong>In-House Milling:</strong> Ceramic crown created in minutes.</li>
        <li className="fade-up delay-4"><strong>Immediate Placement:</strong> Crown bonded instantly.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. FEATURES (Hexagons) */}
      <section className="sd-redefining bg-white">
  <div className="container">
    
    <h2 className="fade-up">State-of-the-Art Restorative Care</h2>
    
    <div className="sd-ook-grid">
      
      {/* CARD 1 */}
      <div className="sd-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Cpu size={42} strokeWidth={1.5} />
        </div>
        <h3>Digital Accuracy</h3>
      </div>

      {/* CARD 2 */}
      <div className="sd-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Clock size={42} strokeWidth={1.5} />
        </div>
        <h3>Single Visit</h3>
      </div>

      {/* CARD 3 */}
      <div className="sd-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <ShieldCheck size={42} strokeWidth={1.5} />
        </div>
        <h3>Superior Strength</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={sameDayFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default SameDayCrowns;
