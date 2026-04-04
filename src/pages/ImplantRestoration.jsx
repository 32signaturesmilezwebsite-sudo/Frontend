import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./ImplantRestoration.css";

const implantFaqs = [
  {
    question: "What is an implant restoration?",
    answer: "An implant restoration refers to replacing or repairing the visible part of a dental implant (the crown, bridge, or denture) that attaches to the titanium post implanted in your jaw."
  },
  {
    question: "How long does a restoration last?",
    answer: "While the titanium root is permanent, the crown or bridge attached to it experiences daily wear and tear. High-quality porcelain restorations usually last 10 to 15 years with proper care."
  },
  {
    question: "Does restoring an implant hurt?",
    answer: "Not generally! Because the titanium post is already healed within the jaw, attaching or replacing the crown on top requires no surgery and is a completely painless process."
  },
  {
    question: "Can an old implant crown be upgraded?",
    answer: "Absolutely. If you have an older, discolored, or chipped implant crown, we can replace it with a brand new, highly aesthetic porcelain or zirconia crown."
  }
];

const ImplantRestoration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Implant Restoration | 32 Signature Smilez";

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
    <div className="ir-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
       <section className="ir-hero">
        <div
          className="ir-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container ir-hero-content">
          <h1 className="fade-up">Implant Restorations</h1>

          <p className="ir-hero-subtitle fade-up delay-1">
            Regain your bite with flawless, custom restorations
          </p>

          <div className="ir-hero-buttons fade-up delay-2">
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
      <section className="ir-centered-text">
  <div className="container ir-ct-container">

    <h2 className="animate fade-up delay-1">
      Secure and beautiful replacements
    </h2>

    <p className="animate fade-up delay-2">
      If the crown attached to your dental implant has become chipped, cracked, or simply loose, 32 Signature Smilez can restore it to pristine condition. Your dental implant post acts as a sturdy root, but the crown structure on top requires specialized care to remain functional and aesthetic.
    </p>

    <p className="animate fade-up delay-3">
      Our restorative specialists meticulously design replacement crowns or abutments that perfectly color-match your surrounding teeth while restoring 100% of your biting force. Don't live with a compromised implant; call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      today.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE */}
      <section className="ir-dark-split">

  <div
    className="ir-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="ir-dark-overlay"></div>

  <div className="container ir-dark-container">

    {/* IMAGE */}
    <div className="ir-ds-image animate animate-slide-left delay-2">
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
    <div className="ir-ds-content">

      <h2 className="animate fade-up delay-1">
        Save and Smile
      </h2>

      <p className="animate fade-up delay-2">
        Repairing a damaged implant restoration shouldn't be stressful. At 32 Signature Smilez, we focus on delivering budget-friendly restorative solutions that last for decades.
      </p>

      <p className="animate fade-up delay-3">
        Explore our diverse array of accepted insurance plans and flexible financing paths to secure your smile today.
      </p>

    </div>

  </div>

</section>

      {/* 4. WHY RESTORE */}
<section className="ir-split-section bg-cream">
  <div className="container ir-split-container">

    <div className="ir-split-content pr-large animate fade-up">
      <h2 className="fade-up">Why restore your implant?</h2>

      <p className="ir-bold-lead fade-up delay-1">
        Never settle for a loose or compromised dental implant. Our restorations offer complete rehabilitation.
      </p>

      <ul className="ir-bullet-list">
        <li className="fade-up delay-1">Repairs chipped or shattered porcelain crowns</li>
        <li className="fade-up delay-2">Re-secures loose abutments to prevent infection</li>
        <li className="fade-up delay-3">Upgrades older crowns to aesthetic zirconia</li>
        <li className="fade-up delay-4">Restores proper bite alignment</li>
        <li className="fade-up delay-5">Enhances chewing capability safely</li>
      </ul>

      <p className="ir-cta-text fade-up delay-2">
        We fix failing restorations fast. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to book your diagnostic exam immediately.
      </p>

      <Link to="/new-patients" className="btn-solid-orange ir-split-btn fade-up delay-3">
        Learn More
      </Link>
    </div>

    <div className="ir-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_pnyp32pnyp32pnyp.png"
        alt="Clinical Implant Checkup"
        className="shaped-image"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="ir-split-section bg-white">
  <div className="container ir-split-container reverse-mobile">

    {/* IMAGE */}
    <div className="ir-split-image animate animate-slide-left">
      <img
        src="/three-types-of-dental-implant-restorations.jpg"
        alt="Dental implant restoration process"
        className="shaped-image"
      />
    </div>

    {/* CONTENT */}
    <div className="ir-split-content">

      <h2 className="animate fade-up delay-1">
        Our structured restoration process
      </h2>

      <p className="ir-bold-lead mb-20 animate fade-up delay-2">
        We follow a precise, step-by-step approach to restore your implant’s strength, function, and natural appearance — ensuring long-lasting results and complete comfort.
      </p>

      <ul className="ir-bullet-list">

        <li className="animate fade-up delay-3">
          <strong>Comprehensive Diagnostics:</strong>
          <span>
            We begin with a detailed evaluation of your implant using advanced imaging to assess bone support, positioning, and overall stability.
          </span>
        </li>

        <li className="animate fade-up delay-4">
          <strong>Abutment Check:</strong>
          <span>
            The connector (abutment) is carefully examined and adjusted or replaced to ensure a secure and stable foundation for your crown.
          </span>
        </li>

        <li className="animate fade-up delay-5">
          <strong>Custom Modeling:</strong>
          <span>
            Digital scans or precise impressions are taken to craft a crown that perfectly matches your natural teeth in shape, size, and color.
          </span>
        </li>

        <li className="animate fade-up delay-6">
          <strong>Seamless Attachment:</strong>
          <span>
            Your new crown is securely fixed, restoring full bite strength and delivering a flawless, natural-looking smile.
          </span>
        </li>

      </ul>

      {/* EXTRA TRUST LINE */}
      <p className="ir-trust-line animate fade-up delay-6">
        ✔ Designed for durability &nbsp;&nbsp; ✔ Natural aesthetics &nbsp;&nbsp; ✔ Long-term comfort
      </p>

    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
      <section className="ir-redefining bg-white">
        <div className="container">
          <h2>Precision Implant Engineering</h2>
          
          <div className="ir-ook-grid">
            <div className="ir-ook-card">
              <div className="hex-icon-vector">
                 {/* Hex Icon 1 */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    <path d="M12 21.23l-3.5-3.5"></path>
                 </svg>
              </div>
              <h3>Tailored to You</h3>
            </div>
            <div className="ir-ook-card">
              <div className="hex-icon-vector">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <rect x="2" y="8" width="20" height="8" rx="2" ry="2"></rect>
                    <path d="M6 16v4"></path>
                    <path d="M18 16v4"></path>
                    <path d="M4 8V4h16v4"></path>
                 </svg>
              </div>
              <h3>Painless Recovery</h3>
            </div>
            <div className="ir-ook-card">
              <div className="hex-icon-vector">
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                    <path d="M12 21H8c-2 0-3.5-1-4-3L3 13c-.5-2 1-4 3-4s3.5 1 4 3 2 3 4 3 4-1 6-3 3-2 3 4l-1 5c-.5 2-2 3-4 3Z"></path>
                    <path d="M18 5c1 1 1.5 2.5 1 4"></path>
                    <path d="M14 6c.5 1.5 0 3-1 4"></path>
                 </svg>
              </div>
              <h3>Lasting Durability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ faqsData={implantFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ImplantRestoration;
