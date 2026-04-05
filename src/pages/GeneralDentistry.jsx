import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import "./GeneralDentistry.css";

const GeneralDentistry = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "General Dentist | 32 Signature Smilez";

  // 🔥 select BOTH animation types
  const elements = document.querySelectorAll(".fade-up, .animate");

  const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");         // for fade-up
        el.classList.add("animate-show");   // for slide animations
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

  return () => window.removeEventListener("scroll", reveal);
}, []);

  return (
    <div className="gd-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
       <section className="gd-hero">
        <div
          className="gd-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container gd-hero-content">
          <h1 className="fade-up">32 Signature Smilez General Dentist</h1>

          <p className="gd-hero-subtitle fade-up delay-1">
            Smile more, live more!
          </p>

          <div className="gd-hero-buttons fade-up delay-2">
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
     <section className="gd-centered-text">
  <div className="container gd-ct-container">
    
    <h2 className="fade-up">
      Caring for your oral health with a smile
    </h2>

    <p className="fade-up delay-1">
      We provide comprehensive general dental care for your entire family, in a comfortable and positive environment. Our doors are always open to new smiles, and we pride ourselves on creating a cozy, welcoming atmosphere.
    </p>

    <p className="fade-up delay-2">
      As your trusted Agartala general dentist, Dr. Datta is dedicated to delivering personalized care and adapting to your unique needs. We get to know you and your teeth, so every treatment feels just right. Visit us and see for yourself! Call:{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
     <section className="gd-dark-split">
  <div
    className="gd-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="gd-dark-overlay"></div>

  <div className="container gd-dark-container">
    
    {/* IMAGE */}
<div className="gd-ds-image animate animate-slide-left">
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
    <div className="gd-ds-content animate animate-slide-right">
      <h2 className="fade-up">Save and Smile</h2>

      <p className="fade-up delay-1">
        At 32 Signature Smilez, we believe that your oral health shouldn't come with financial stress.
      </p>

      <p className="fade-up delay-2">
        We provide affordable general dentist services with flexible payment plans and work with various insurance providers. Ask our team about our payment options!
      </p>

     
    </div>

  </div>
</section>

      {/* 4. GENERAL DENTAL CARE (Grid) */}
     <section className="gd-treatments-grid-section bg-cream">
  <div className="container">
    
    {/* TITLE */}
    <h2 className="gd-section-title fade-up">General Dental Care</h2>

    <div className="gd-grid">
      
      {/* Card 1 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/Gemini_Generated_Image_p5ogtpp5ogtpp5og.png" alt="Cleanings & Exams" />
        </div>
        <div className="gd-card-text">
          <h3>Cleanings & Exams</h3>
          <p>Regular cleanings and exams are key for maintaining your teeth in tip-top shape.</p>
          <Link to="/treatment/cleaning-exams" className="gd-action-link">See Cleanings →</Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/media__1774513251008.jpg" alt="Dental Fillings" />
        </div>
        <div className="gd-card-text">
          <h3>Dental Fillings</h3>
          <p>We use high-quality materials for fillings for a seamless restoration.</p>
          <Link to="/treatment/fillings" className="gd-action-link">See Fillings →</Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/Missing Tooth.png" alt="Traditional Crowns" />
        </div>
        <div className="gd-card-text">
          <h3>Traditional Crowns</h3>
          <p>Restore strength and appearance of damaged teeth.</p>
          <Link to="/dental-crowns" className="gd-action-link">See Crowns →</Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/Teeth Grinding.png" alt="Emergency Care" />
        </div>
        <div className="gd-card-text">
          <h3>Emergency Care</h3>
          <p>Quick, compassionate same-day dental care when you need it.</p>
          <Link to="/treatment/emergency-dentistry" className="gd-action-link">See Emergency →</Link>
        </div>
      </div>

      {/* Card 5 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/Kids-Dentistry.png" alt="Family Dentistry" />
        </div>
        <div className="gd-card-text">
          <h3>Family Dentistry</h3>
          <p>Comprehensive care for all ages to keep smiles healthy.</p>
          <Link to="/treatment/family-dentistry" className="gd-action-link">See Family Care →</Link>
        </div>
      </div>

      {/* Card 6 */}
      <div className="gd-card animate">
        <div className="gd-card-img-wrapper">
          <img src="/Gemini_Generated_Image_xsga3sxsga3sxsga.png" alt="Nitrous Oxide" />
        </div>
        <div className="gd-card-text">
          <h3>Nitrous Oxide</h3>
          <p>A safe, effective way to reduce dental anxiety.</p>
          <Link to="/treatment/sedation" className="gd-action-link">See Sedation →</Link>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* 5. EMERGENCY CALLOUT */}
      <section className="gd-emergency-section bg-white">
        <div className="container">
          <div className="gd-emergency-box">
            <h2>Dental Emergency?<br/>We're your dental heroes!</h2>
            <p>Facing a dental emergency? Don't worry! Our skilled team at 32 Signature Smilez is ready to spring into action, providing fast, expert care to get you smiling again.</p>
            <a href="tel:+919077770586" className="gd-emergency-phone">Call +91 90777 70586</a>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM APPENDAGES */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default GeneralDentistry;
