import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./EmergencyDentistry.css";
import { Clock, Activity, ShieldCheck } from "lucide-react";

const emergencyFaqs = [
  {
    question: "What actually constitutes a dental emergency?",
    answer: "Any situation involving severe, unmanageable dental pain, a knocked-out tooth, excessive bleeding, or a severe infection/abscess swelling in your gums or face requires immediate emergency care."
  },
  {
    question: "What should I do if my tooth gets knocked out?",
    answer: "Time is critical! Pick the tooth up by the crown (never the root), rinse it gently if dirty, and try to place it back in the socket. If you can't, place it in a small cup of milk and get to our office immediately."
  },
  {
    question: "Do you offer same-day emergency appointments?",
    answer: "Yes. If you are experiencing a severe emergency, please call us right away at +91 90777 70586. We prioritize emergency patients and will work to see you within hours to relieve your pain."
  },
  {
    question: "Will you pull my tooth?",
    answer: "Extraction is always our absolute last resort. We will do everything diagnostically and medically possible to stabilize your emergency and save your natural tooth."
  }
];

const EmergencyDentistry = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Emergency Dentistry | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up (text, headings)
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // animate (cards, images, sections)
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
    <div className="em-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
     <section className="em-hero">
        <div
          className="em-hero-bg zoom-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container em-hero-content">
          <h1 className="fade-up">Emergency Dentistry</h1>

          <p className="em-hero-subtitle fade-up delay-1">
            Urgent, compassionate care when you need it the most
          </p>

          <div className="em-hero-buttons fade-up delay-2">
            <a href="tel:+919077770586" className="btn-solid-orange">
              Call Now: +91 90777 70586
            </a>
          </div>
        </div>
      </section>


      {/* 2. CENTERED BLOCK */}
      <section className="em-centered-text">
  <div className="container em-ct-container">
    
    <h2 className="fade-up">Stop the pain and save your smile</h2>

    <p className="fade-up delay-1">
      Dental emergencies simply can't wait. Whether you've suffered sudden oral trauma, a knocked-out tooth from a sports injury, or you're experiencing completely unbearable toothache indicating a severe infection—waiting days for an appointment is not an option.
    </p>

    <p className="fade-up delay-2">
      At 32 Signature Smilez, our emergency protocol is designed to rapidly get you out of pain, diagnose the critical issue, and stabilize the affected area. Do not ignore severe dental pain. If you're experiencing an emergency, call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      immediately.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE */}
      <section className="em-dark-split">
  <div
    className="em-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="em-dark-overlay"></div>

  <div className="container em-dark-container">

    {/* IMAGE SIDE */}
    <div className="em-ds-image animate animate-slide-left">
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
    <div className="em-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
  In a dental emergency, the last thing you should worry about is cost. 
  Delaying urgent treatment due to financial concerns can lead to more 
  serious complications, increased pain, and significantly higher expenses later on. 

  At our clinic, we prioritize your comfort and immediate care. Our team 
  actively assists emergency patients in understanding their insurance 
  coverage, handling claims quickly, and exploring flexible, fast-track 
  financing options. 

  Whether it’s sudden tooth pain, a broken tooth, infection, or injury, 
  we ensure you receive prompt, high-quality treatment without unnecessary 
  delays—so you can focus on relief and recovery, not stress.
</p>

      
    </div>

  </div>
</section>

   {/* 4. WHY ACT IMMEDIATELY */}
<section className="em-split-section bg-cream">
  <div className="container em-split-container">

    <div className="em-split-content pr-large animate animate-slide-right">
      <h2 className="animate">Why act immediately?</h2>

      <p className="em-bold-lead animate delay-1">
        When it comes to dental trauma, hours—and sometimes minutes—matter immensely.
      </p>

      <ul className="em-bullet-list">
        <li className="animate delay-1">Immediate action is the only way to successfully re-implant a knocked-out tooth</li>
        <li className="animate delay-2">Rapid response stops dangerous abscess infections from spreading</li>
        <li className="animate delay-3">Instant pain relief utilizing powerful local anesthetics</li>
        <li className="animate delay-4">Prevents minor fractures from splitting the tooth entirely</li>
        <li className="animate delay-5">Stops extensive bleeding from soft tissue injuries</li>
      </ul>

      <p className="em-cta-text animate delay-3">
        We're ready to swoop in and help. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        for rapid triage right now.
      </p>
    </div>

    <div className="em-split-image animate animate-slide-left">
      <img
        src="/Gemini_Generated_Image_n31xawn31xawn31x.png"
        alt="Dentist rapidly assisting patient"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>

{/* 5. PROCESS */}
<section className="em-split-section bg-white">
  <div className="container em-split-container reverse-mobile">

    <div className="em-split-image pr-large animate animate-slide-left">
      <img
        src="/Emergency-Dental.jpg"
        alt="Dental Emergency Examination"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="em-split-content animate animate-slide-right">
      <h2 className="animate">Our emergency protocol</h2>

      <p className="em-bold-lead mb-20 animate delay-1">
        We prioritize getting you comfortable and stable instantly:
      </p>

      <ul className="em-bullet-list">
        <li className="animate delay-1"><strong>Triage & Comfort:</strong> Immediate pain control.</li>
        <li className="animate delay-2"><strong>Rapid Diagnostics:</strong> Focused digital X-rays.</li>
        <li className="animate delay-3"><strong>Treatment Execution:</strong> Immediate intervention.</li>
        <li className="animate delay-4"><strong>Aftercare Plan:</strong> Clear recovery roadmap.</li>
      </ul>

    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
      <section className="em-redefining bg-white">
  <div className="container">

    <h2 className="animate">Critical Response Team</h2>
    
    <div className="em-ook-grid">

      {/* CARD 1 */}
      <div className="em-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Clock size={48} strokeWidth={1.5} />
        </div>
        <h3>Same-Day Action</h3>
      </div>

      {/* CARD 2 */}
      <div className="em-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Activity size={48} strokeWidth={1.5} />
        </div>
        <h3>Instant Pain Relief</h3>
      </div>

      {/* CARD 3 */}
      <div className="em-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <ShieldCheck size={48} strokeWidth={1.5} />
        </div>
        <h3>Infection Control</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={emergencyFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default EmergencyDentistry;
