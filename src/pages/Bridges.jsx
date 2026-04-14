import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Bridges.css";
import { Heart, LayoutGrid, ShieldCheck } from "lucide-react";

const bridgesFaqs = [
  {
    question: "What exactly is a dental bridge?",
    answer: "A dental bridge is a custom-made, fixed prosthetic designed to \"bridge\" the gap created by one or more missing teeth. It typically consists of an artificial tooth anchored safely between two dental crowns."
  },
  {
    question: "Does getting a bridge hurt?",
    answer: "No. The procedure is performed under local anesthesia so you won't feel any pain during the preparation or placement. You may experience minor sensitivity for a few days following the procedure."
  },
  {
    question: "How long do dental bridges last?",
    answer: "With excellent oral hygiene and regular dental checkups, a high-quality bridge can last anywhere from 5 to 15 years, or even longer in some cases."
  },
  {
    question: "Are there alternatives to a bridge?",
    answer: "Yes! If you prefer a solution that does not require altering adjacent healthy teeth, a Dental Implant is often the premier alternative for replacing a single missing tooth."
  }
];

const Bridges = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Dental Bridges | 32 Signature Smilez";

  const fadeElements = document.querySelectorAll('.fade-up');
  const animateElements = document.querySelectorAll('.animate');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    // Fade-up animation
    fadeElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add('active');
      }
    });

    // Animate (your image + content)
    animateElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add('animate-show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  return () => window.removeEventListener('scroll', revealOnScroll);
}, []);


  return (
    <div className="br-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="br-hero">
        <div
          className="br-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container br-hero-content">
          <h1 className="fade-up">Custom Dental Bridges</h1>

          <p className="br-hero-subtitle fade-up delay-1">
            Bridging the gap for a fully functional, complete smile
          </p>

          <div className="br-hero-buttons fade-up delay-2">
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
      <section className="br-centered-text">
  <div className="container br-ct-container">

    <h2 className="fade-up">Restore your confidence seamlessly</h2>

    <p className="fade-up delay-1">
      Missing teeth can make eating difficult, affect your speech, and alter the shape of your face. 32 Signature Smilez offers premium dental bridges as a fast, reliable solution to permanently fill the empty gaps in your smile. 
    </p>

    <p className="fade-up delay-2">
      By anchoring a lifelike prosthetic tooth firmly between your existing natural teeth, our expertly crafted bridges restore both the aesthetic beauty and the crucial chewing force you need for everyday life. Reach out today at 
      <a href="tel:+919077770586" className="txt-orange"> +91 90777 70586</a> to consult our restorative specialists.
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
            src="/Deep Datta.PNG"
            alt="Dr. Deep Datta"
            className="dr-portrait-fixed"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="br-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
  Don't let financial anxiety prevent you from restoring missing teeth. Leaving a gap untreated can lead to bone loss and teeth shifting. At 32 Signature Smilez, we offer flexible, interest-free payment options along with support for all major online and card transactions. We are empanelled with ONGC, making quality dental care accessible for patients across Tripura. Our team is always here to guide you with the best treatment plan suited to your needs and budget.
</p>

      
    </div>

  </div>
</section>

      {/* 4. WHY CHOOSE A BRIDGE (Split Normal) */}
     {/* 4. WHY CHOOSE A BRIDGE */}
<section className="br-split-section bg-cream">
  <div className="container br-split-container">

    <div className="br-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose a dental bridge?</h2>

      <p className="br-bold-lead fade-up delay-1">
        A bridge is a permanently fixed solution that vastly improves your quality of life.
      </p>

      <ul className="br-bullet-list">
        <li className="fade-up delay-1">Restores your ability to chew and speak properly</li>
        <li className="fade-up delay-2">Maintains the natural, appealing shape of your face</li>
        <li className="fade-up delay-3">Equally distributes bite forces to prevent jaw strain</li>
        <li className="fade-up delay-4">Prevents your remaining teeth from shifting out of position</li>
        <li className="fade-up delay-5">Aesthetically replaces missing teeth with natural-looking porcelain</li>
      </ul>

      <p className="br-cta-text fade-up delay-2">
        Ready to complete your smile? Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to book your bridge consultation currently.
      </p>

      <Link to="/new-patients" className="btn-solid-orange br-split-btn fade-up delay-3">
        Learn More
      </Link>
    </div>

    <div className="br-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_b1jlfbb1jlfbb1jl.png"
        alt="Dentist checking patient"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="br-split-section bg-white">
  <div className="container br-split-container reverse-mobile">

    <div className="br-split-image animate animate-slide-left">
      <img
        src="/10921-dental-bridge.jpg"
        alt="Dental Model Bridge Check"
        className="shaped-image"
      />
    </div>

    <div className="br-split-content fade-up">
      <h2 className="fade-up">The bridge installation process</h2>

      <p className="br-bold-lead mb-20 fade-up delay-1">
        We prioritize absolute precision over two comfortable visits:
      </p>

      <ul className="br-bullet-list">
        <li className="fade-up delay-1"><strong>Initial Preparation:</strong> The adjacent abutment teeth are gently reshaped.</li>
        <li className="fade-up delay-2"><strong>Detailed Impressions:</strong> Precise molds are made for your custom bridge.</li>
        <li className="fade-up delay-3"><strong>Temporary Coverage:</strong> A temporary bridge protects your teeth.</li>
        <li className="fade-up delay-4"><strong>Final Bonding:</strong> The permanent bridge is cemented firmly.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. FEATURES (Hexagons) */}
      <section className="br-redefining bg-white">
  <div className="container">
    <h2 className="fade-up">Advanced Restorative Dentistry</h2>
    
    <div className="br-ook-grid">
      
      {/* CARD 1 */}
      <div className="br-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Heart size={40} strokeWidth={1.5} />
        </div>
        <h3>Tailored to You</h3>
      </div>

      {/* CARD 2 */}
      <div className="br-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <LayoutGrid size={40} strokeWidth={1.5} />
        </div>
        <h3>Seamless Fit</h3>
      </div>

      {/* CARD 3 */}
      <div className="br-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <ShieldCheck size={40} strokeWidth={1.5} />
        </div>
        <h3>Lasting Durability</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={bridgesFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Bridges;
