import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./InlaysOnlays.css";
import { Leaf, Smile, Sparkles } from "lucide-react";

const inlaysFaqs = [
  {
    question: "What is the difference between an inlay and an onlay?",
    answer: "An inlay is designed to fit precisely inside the center grooves of your tooth (like a filling), while an onlay is more extensive and covers one or more of the outer cusps (biting edges) of the tooth."
  },
  {
    question: "Why choose an inlay/onlay over a traditional filling?",
    answer: "When a cavity or fractured area is simply too large to support a traditional composite filling, an inlay or onlay provides significantly more strength and structural integrity, preventing the need for a full dental crown."
  },
  {
    question: "How long does it take to get them?",
    answer: "Historically it took two visits, but with our advanced digital imaging and in-house milling technology, we often craft and permanently bond your custom ceramic inlays/onlays during a single appointment!"
  },
  {
    question: "Will they look like my natural teeth?",
    answer: "Absolutely. We utilize highly durable, tooth-colored porcelain or composite resins that are expertly color-matched to blend seamlessly with the translucent qualities of your natural enamel."
  }
];

const InlaysOnlays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Inlays & Onlays | 32 Signature Smilez";

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
    <div className="io-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
       <section className="io-hero">
        <div
          className="io-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container io-hero-content">
          <h1 className="fade-up">Porcelain Inlays & Onlays</h1>

          <p className="io-hero-subtitle fade-up delay-1">
            Conservative restorations for stronger, natural-looking teeth
          </p>

          <div className="io-hero-buttons fade-up delay-2">
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
      <section className="io-centered-text">
        <div className="container io-ct-container">
          <h2>Preserve your natural tooth structure</h2>
          <p>
            When a tooth suffers moderate decay or structural damage that's too severe for a regular filling—but not quite bad enough to warrant grinding it down for a full dental crown—inlays and onlays offer the perfect conservative solution. 
          </p>
          <p>
            At 32 Signature Smilez, we utilize precise indirect restorations that safely cover and fortify your impaired teeth while preserving as much of your healthy, natural enamel as surgically possible. Looking to save a damaged tooth? Give us a call at <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a> today.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE */}
      <section className="io-dark-split">
  <div
    className="io-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="io-dark-overlay"></div>

  <div className="container io-dark-container">

    {/* IMAGE */}
    <div className="io-ds-image animate animate-slide-left">
      <div className="frame-outer">
        <div className="frame-inner">
          <img
            src="/Deep Datta.PNG"   // ✅ fixed (no space + lowercase)
            alt="Dr. Deep Datta"
            className="dr-portrait-fixed"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="io-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Preventing severe tooth fractures with an inlay or onlay today can save you thousands of dollars in root canals or extractions tomorrow. We strive to provide elite preventative and restorative dentistry while maximizing your existing insurance benefits and offering interest-free payment solutions.
      </p>
    </div>

  </div>
</section>

      {/* 4. WHY CHOOSE INLAYS/ONLAYS */}
<section className="io-split-section bg-cream">
  <div className="container io-split-container">

    <div className="io-split-content pr-large fade-up">
      <h2 className="fade-up">Why choose inlays & onlays?</h2>

      <p className="io-bold-lead fade-up delay-1">
        Sometimes known as "partial crowns", they bridge the gap between fillings and full restorative caps.
      </p>

      <ul className="io-bullet-list">
        <li className="fade-up delay-1">Tremendously strengthens weakened teeth</li>
        <li className="fade-up delay-2">Highly conservative treatment approach</li>
        <li className="fade-up delay-3">Longer-lasting than composite fillings</li>
        <li className="fade-up delay-4">Perfect aesthetic ceramic match</li>
        <li className="fade-up delay-5">Prevents bacteria re-entry</li>
      </ul>

      <p className="io-cta-text fade-up delay-2">
        We focus on saving your natural smile. Dial{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to consult our restorative experts immediately.
      </p>

      <Link to="/new-patients" className="btn-solid-orange io-split-btn fade-up delay-3">
        Learn More
      </Link>
    </div>

    <div className="io-split-image animate animate-slide-right">
      <img
        src="/Teeth Grinding.png"
        alt="Happy dental patient"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="io-split-section bg-white">
  <div className="container io-split-container reverse-mobile">

    <div className="io-split-image animate animate-slide-left">
      <img
        src="/inlays-and-onlays-img.png"
        alt="Dentist Consultation"
        className="shaped-image"
      />
    </div>

    <div className="io-split-content fade-up">
      <h2 className="fade-up">The restorative procedure</h2>

      <p className="io-bold-lead mb-20 fade-up delay-1">
        We rehabilitate the structural integrity of your tooth seamlessly:
      </p>

      <ul className="io-bullet-list">
        <li className="fade-up delay-1"><strong>Damage Control:</strong> Decay removed carefully.</li>
        <li className="fade-up delay-2"><strong>Exact Impressions:</strong> Digital precision scanning.</li>
        <li className="fade-up delay-3"><strong>Custom Fabrication:</strong> Ceramic crafted precisely.</li>
        <li className="fade-up delay-4"><strong>Final Bonding:</strong> Secure and polished placement.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
     <section className="io-redefining bg-white">
  <div className="container">
    
    <h2 className="fade-up">Conservative Dental Care</h2>
    
    <div className="io-ook-grid">

      {/* CARD 1 */}
      <div className="io-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Leaf size={42} strokeWidth={1.5} />
        </div>
        <h3>Preserve Enamel</h3>
      </div>

      {/* CARD 2 */}
      <div className="io-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Smile size={42} strokeWidth={1.5} />
        </div>
        <h3>Painless Placement</h3>
      </div>

      {/* CARD 3 */}
      <div className="io-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <Sparkles size={42} strokeWidth={1.5} />
        </div>
        <h3>Aesthetic Fusion</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={inlaysFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default InlaysOnlays;
