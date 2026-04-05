import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Sedation.css";

const sedationFaqs = [
  {
    question: "Is nitrous oxide safe?",
    answer: "Yes, nitrous oxide (laughing gas) is one of the safest anesthetics available in modern dentistry. It acts rapidly, provides excellent relaxation without putting you 'to sleep', and leaves your system within minutes of removing the mask."
  },
  {
    question: "Will I be completely asleep?",
    answer: "No. With nitrous oxide sedation, you remain conscious and responsive to the dentist's instructions, but you will feel a deep sense of euphoria, heaviness, and relaxation. It significantly suppresses pain response and the gag reflex."
  },
  {
    question: "Can I drive myself home afterward?",
    answer: "Yes! Because nitrous oxide is completely flushed from your system with 5 minutes of pure oxygen at the end of the procedure, there is no lingering 'hangover' effect. You can legally and safely drive yourself home immediately."
  },
  {
    question: "Is sedation covered by insurance?",
    answer: "Coverage varies drastically by provider and the specific nature of your procedure. For deeply restorative or complex work, it is often covered. We will gladly pre-verify your benefits to eliminate any surprises."
  }
];

const Sedation = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Sedation Dentistry | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up animation (text, headings)
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // general animation (cards, images, split sections)
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // observe all animated elements
  const elements = document.querySelectorAll(".fade-up, .animate");
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="sed-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="sed-hero">
        <div className="sed-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container sed-hero-content">
          <h1 className="fade-up">Nitrous Oxide Sedation</h1>
          <p className="sed-hero-subtitle fade-up delay-1">Relax and unwind during your entire visit</p>
          <div className="sed-hero-buttons fade-up delay-2">
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
      <section className="sed-centered-text">
        <div className="container sed-ct-container">
          <h2>Conquer dental anxiety once and for all</h2>
          <p>
            Does the mere thought of visiting the dentist make your heart race? You are not alone. Dental anxiety prevents millions from receiving the vital oral healthcare they desperately need. Ignoring routine care inevitably transforms small cavities into massive, painful infections.
          </p>
          <p>
            At 32 Signature Smilez, we systematically eliminate the fear factor. By utilizing incredibly safe and effective Nitrous Oxide (commonly known as laughing gas), we rapidly convert the most nerve-wracking procedures into a calm, euphoric, and anxiety-free experience. Ready to relax? Call us at <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a> to discuss your sedation options.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE */}
      <section className="sed-dark-split">
        <div className="sed-dark-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="sed-dark-overlay"></div>
        <div className="container sed-dark-container">
          <div className="sed-ds-image animate animate-slide-left">
             
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="sed-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
           <p>
  Nitrous oxide sedation helps you feel calm, relaxed, and at ease throughout your dental visit, making even complex procedures feel comfortable and stress-free. It works quickly, wears off just as fast, and allows you to resume your day without downtime. By combining multiple treatments into fewer appointments under sedation, you can save time, reduce anxiety, and minimize repeated visits. Our team will also help you plan your treatment efficiently and maximize your insurance benefits for a smoother, more affordable experience.
</p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SEDATION (Split Normal) */}
     <section className="sed-split-section bg-cream">
  <div className="container sed-split-container">

    <div className="sed-split-content pr-large fade-up">
      <h2 className="fade-up">The transformative benefits of nitrous</h2>

      <p className="sed-bold-lead fade-up delay-1">
        It's not just for fear—sedation provides a vastly superior clinical environment.
      </p>

      <ul className="sed-bullet-list">
        <li className="fade-up delay-1">Instantly reduces dental anxiety</li>
        <li className="fade-up delay-2">Suppresses gag reflex</li>
        <li className="fade-up delay-3">Makes long treatments feel shorter</li>
        <li className="fade-up delay-4">Improves treatment efficiency</li>
        <li className="fade-up delay-5">Enhances numbing effectiveness</li>
      </ul>

      <p className="sed-cta-text fade-up delay-2">
        Don't let fear dictate your health. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to request your anxiety-free appointment.
      </p>
    </div>

    <div className="sed-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_wjxkozwjxkozwjxk.png"
        alt="Patient relaxing in chair"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* PROCESS */}
<section className="sed-split-section bg-white">
  <div className="container sed-split-container reverse-mobile">

    <div className="sed-split-image animate animate-slide-left">
      <img
        src="/shutterstock_537833395-min.jpg.optimal.jpg"
        alt="Gentle Dental Care"
        className="shaped-image"
      />
    </div>

    <div className="sed-split-content fade-up">
      <h2 className="fade-up">The gentle relaxation process</h2>

      <p className="sed-bold-lead mb-20 fade-up delay-1">
        We keep you entirely in control of your comfort levels:
      </p>

      <ul className="sed-bullet-list">
        <li className="fade-up delay-1"><strong>The Mask:</strong> Comfortable nose mask applied.</li>
        <li className="fade-up delay-2"><strong>The Euphoria:</strong> Calm relaxation begins quickly.</li>
        <li className="fade-up delay-3"><strong>The Procedure:</strong> You remain relaxed and aware.</li>
        <li className="fade-up delay-4"><strong>The Recovery:</strong> Effects fade within minutes.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
      <section className="sed-redefining bg-white">
        <div className="container">
          <h2>Anxiety-Free Ecosystem</h2>
          
          <div className="sed-ook-grid">
            <div className="sed-ook-card">
              <div className="hex-icon-vector">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                 </svg>
              </div>
              <h3>Phobia Free</h3>
            </div>
            <div className="sed-ook-card">
              <div className="hex-icon-vector">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                 </svg>
              </div>
              <h3>Rapid Recovery</h3>
            </div>
            <div className="sed-ook-card">
              <div className="hex-icon-vector">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <rect x="2" y="8" width="20" height="8" rx="2" ry="2"></rect>
                    <path d="M6 16v4"></path>
                    <path d="M18 16v4"></path>
                    <path d="M4 8V4h16v4"></path>
                 </svg>
              </div>
              <h3>Gag Suppression</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ faqsData={sedationFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Sedation;
