import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./RootCanalTreatment.css";
import { ShieldCheck, Smile, HeartPulse, ClipboardList } from "lucide-react";

const rcpFaqs = [
  {
    question: "Is Root Canal Treatment painful?",
    answer:
      "Modern techniques and anesthesia make RCT virtually painless — often comparable to getting a regular filling. In fact, the procedure relieves the pain caused by infection.",
  },
  {
    question: "How many sittings does a root canal take?",
    answer:
      "Most root canals are completed in 1–2 visits depending on the severity of the infection and the tooth involved.",
  },
  {
    question: "What happens if I delay root canal treatment?",
    answer:
      "Delaying treatment allows the infection to spread to neighbouring teeth and jawbone, potentially leading to tooth loss or systemic health issues.",
  },
  {
    question: "Do I need a crown after RCT?",
    answer:
      "Yes, a crown is strongly recommended after root canal treatment to restore the tooth's strength and protect it from fracturing during chewing.",
  },
  {
    question: "How long does a root canal treated tooth last?",
    answer:
      "With proper care, a root canal treated tooth can last a lifetime. Good oral hygiene and regular dental check-ups are key.",
  },
  {
    question: "What is the recovery time?",
    answer:
      "Mild discomfort for a day or two is normal. Most patients return to normal activities the next day. Avoid chewing on the treated tooth until the crown is placed.",
  },
];

const RootCanalTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Root Canal Treatment | 32 Signature Smilez";

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("active");
            }
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.add("animate-show");
            }
            if (entry.target.classList.contains("rct-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".fade-up, .animate, .rct-ds-content"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rct-wrapper">
      <Header />

      {/* ── 1. HERO ── */}
      <section className="rct-hero">
        <div
          className="rct-hero-bg"
          style={{
            backgroundImage: "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>
        <div className="container rct-hero-content">
          <h1 className="fade-up">Root Canal Treatment</h1>
          <p className="rct-hero-subtitle fade-up delay-1">
            Save your natural tooth — pain-free, gentle &amp; effective
          </p>
          <div className="rct-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO / CENTERED TEXT ── */}
      <section className="rct-centered-text">
        <div className="container rct-ct-container">
          <h2 className="fade-up">What is Root Canal Treatment?</h2>
          <p className="fade-up delay-1" style={{ fontSize: "1.15rem" }}>
            Root Canal Treatment, commonly known as RCT, is a highly effective
            dental procedure used to save a tooth that is severely decayed,
            infected, or damaged. Instead of removing the tooth, RCT allows us
            to preserve your natural smile while eliminating pain and infection.
          </p>
          <p className="fade-up delay-2" style={{ fontSize: "1.15rem", marginBottom: "40px" }}>
            Inside every tooth is a soft tissue called the <strong>pulp</strong>, which
            contains nerves and blood vessels. When this pulp becomes infected
            due to deep decay, cracks, or trauma, it can cause severe pain and
            swelling. RCT involves carefully removing the infected pulp,
            cleaning and disinfecting the inner canals, and sealing the tooth
            to prevent further infection.
          </p>

          <h3
            className="fade-up delay-3"
            style={{
              color: "#c57b43",
              fontFamily: "Playfair Display, serif",
              fontSize: "2rem",
              marginBottom: "20px",
            }}
          >
            Signs You May Need RCT
          </h3>
          <ul className="rct-signs-list fade-up delay-4">
            <li>Persistent toothache or pain while chewing</li>
            <li>Sensitivity to hot or cold that lingers</li>
            <li>Swelling or tenderness in gums</li>
            <li>Darkening of the tooth</li>
            <li>Pimple-like swelling on the gums</li>
          </ul>
          <p className="fade-up delay-5" style={{ fontSize: "1.1rem", color: "#4a5568" }}>
            If you experience any of these symptoms, early treatment can save
            your tooth and prevent complications.
          </p>
        </div>
      </section>

      {/* ── 3. DARK SPLIT (Save & Smile) ── */}
      <section className="rct-dark-split">
        <div
          className="rct-dark-bg zoom-bg"
          style={{ backgroundImage: "url('/Background.png')" }}
        ></div>
        <div className="rct-dark-overlay"></div>
        <div className="container rct-dark-container">
          {/* IMAGE */}
          <div className="rct-ds-image animate animate-slide-left">
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
          <div className="rct-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              At 32 Signature Smilez, we believe every tooth deserves a second
              chance. Root canal treatment need not be a financial burden. We
              work with all major payment platforms to make care accessible and
              affordable. We are also empanelled with ONGC, ensuring
              high-quality treatment reaches everyone in Tripura and beyond —
              without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. PROCEDURE SPLIT SECTION ── */}
      <section className="rct-split-section bg-cream">
        <div className="container rct-split-container">
          <div className="rct-split-content pr-large animate animate-slide-right">
            <h2 className="animate">The Step-by-Step Procedure</h2>
            <p
              className="animate delay-1"
              style={{ marginBottom: "25px", fontSize: "1.1rem" }}
            >
              Our streamlined process ensures maximum comfort and precision at
              every stage:
            </p>

            <ul className="rct-bullet-list">
              <li className="animate delay-2">
                <strong>Diagnosis &amp; X-ray —</strong> To assess the extent
                of infection and plan treatment.
              </li>
              <li className="animate delay-3">
                <strong>Local Anesthesia —</strong> Ensures a completely
                painless experience throughout.
              </li>
              <li className="animate delay-4">
                <strong>Cleaning the Canals —</strong> Removal of infected
                pulp and bacteria from inside the tooth.
              </li>
              <li className="animate delay-5">
                <strong>Shaping &amp; Filling —</strong> Canals are sealed
                with biocompatible material to prevent reinfection.
              </li>
              <li className="animate delay-6">
                <strong>Crown Placement —</strong> A protective crown is
                placed to restore full strength and function.
              </li>
            </ul>
          </div>

          <div className="rct-split-image animate animate-slide-left">
            <div className="rct-image-gallery">
              <div className="rct-gallery-main">
                <img
                  src="/Gemini_Generated_Image_sn6sehsn6sehsn6s.png"
                  alt="Root Canal Treatment"
                  className="shaped-image img-zoom"
                />
              </div>
              <div className="rct-gallery-thumbs">
                <img
                  src="/IMG_9144.JPG"
                  alt="Root Canal Clinic"
                  className="rct-thumb img-zoom"
                />
                <img
                  src="/IMG_20240517_133226 (1).jpg"
                  alt="Root Canal Treatment Result"
                  className="rct-thumb img-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. APPROACH / ICON CARDS ── */}
      <section
        className="rct-centered-text bg-white"
        style={{ borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea" }}
      >
        <div
          className="container rct-ct-container"
          style={{ maxWidth: "1400px" }}
        >
          <h2 className="fade-up">Benefits of Root Canal Treatment</h2>
          <p
            className="fade-up delay-1"
            style={{
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto 40px",
              fontSize: "1.15rem",
            }}
          >
            Modern root canal treatment is designed to be fast, comfortable,
            and long-lasting — giving your natural tooth a new lease of life.
          </p>

          <div className="rct-ook-grid fade-up delay-2">
            <div className="rct-ook-card">
              <div className="hex-icon-rct">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h4>Saves Natural Tooth</h4>
              <p>Preserves your real tooth instead of extraction</p>
            </div>
            <div className="rct-ook-card">
              <div className="hex-icon-rct">
                <HeartPulse size={48} strokeWidth={1.5} />
              </div>
              <h4>Relieves Pain</h4>
              <p>Eliminates infection and stops toothache instantly</p>
            </div>
            <div className="rct-ook-card">
              <div className="hex-icon-rct">
                <ClipboardList size={48} strokeWidth={1.5} />
              </div>
              <h4>Restores Function</h4>
              <p>Restores normal chewing and biting strength</p>
            </div>
            <div className="rct-ook-card">
              <div className="hex-icon-rct">
                <Smile size={48} strokeWidth={1.5} />
              </div>
              <h4>Prevents Spread</h4>
              <p>Stops infection spreading to neighbouring teeth</p>
            </div>
          </div>

          <p
            className="fade-up delay-3"
            style={{
              fontWeight: "600",
              color: "#c57b43",
              fontSize: "1.25rem",
              maxWidth: "850px",
              margin: "0 auto 30px",
            }}
          >
            At 32 Signature Smilez, we use advanced technology and gentle
            techniques to ensure a comfortable, efficient, and successful root
            canal experience. Your long-term dental health is our top priority.
          </p>

          <div className="fade-up delay-4">
            <Link to="/contact" className="btn-solid-orange">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <FAQ faqsData={rcpFaqs} customTitle="Questions? We've Got Answers!" />

      {/* ── 7. FOOTER SECTIONS ── */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default RootCanalTreatment;
