import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import "./RestorativeDentistry.css";

const RestorativeDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Restorative Dentistry | 32 Signature Smilez";

    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
            observerRef.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rd-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="rd-hero">

        <div
          className="rd-hero-bg zoom-bg"
          style={{
            backgroundImage: "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container rd-hero-content">

          <h1 className="animate fade-up delay-1">
            32 Signature Smilez Restorative Dentist
          </h1>

          <p className="rd-hero-subtitle animate fade-up delay-2">
            Turning frowns upside down
          </p>

          <div className="rd-hero-buttons animate fade-up delay-3">
            <Link to="/contact" className="btn-solid-orange btn-animate">
              Request Appointment
            </Link>

            <a href="tel:+919077770586" className="btn-outline-dark btn-animate">
              Call: +91 90777 70586
            </a>
          </div>

        </div>
      </section>

      {/* 2. CENTERED TYPOGRAPHY BLOCK */}
      <section className="rd-centered-text">
        <div className="container rd-ct-container">
          <h2>Bringing life back to your smile</h2>
          <p>
            Every smile tells a story, and we're here to make yours a happy one! Imagine a place where your comfort and well-being are at the heart of everything we do. That's us!
          </p>
          <p>
            Our approach to restorative dentistry is rooted in a comfortable and personalized approach, where top-quality care meets your unique needs. Our team, led by Dr. Datta, is here to create a warm, welcoming atmosphere where even the most nervous patients can relax and enjoy their visit. Schedule today with our 32 Signature Smilez restorative dentist!
          </p>
          <p className="rd-call-text">
            Call: <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a>.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="rd-dark-split">

  <div
    className="rd-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="rd-dark-overlay"></div>

  <div className="container rd-dark-container">

    {/* IMAGE */}
    <div className="rd-ds-image">

      <div className="frame-outer animate animate-slide-left delay-2">
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
    <div className="rd-ds-content">

      <h2 className="animate fade-up delay-1">
        Save and Smile
      </h2>

      <p className="animate fade-up delay-2">
        Good dental health shouldn't be a luxury. We offer flexible payment plans so that caring for your teeth doesn't mean emptying your piggy bank.
      </p>

      <p className="animate fade-up delay-3">
  We offer flexible payment options along with convenient online and card transactions, so you can receive top-notch dental care in Agartala without any stress.
</p>

    </div>

  </div>
</section>

      {/* 4. RESTORATIVE DENTAL CARE (Grid) */}
     <section className="rd-treatments-grid-section bg-cream">
  <div className="container">

    <h2 className="rd-section-title animate fade-up delay-1">
      Restorative Dental Care
    </h2>

    <div className="rd-grid">
      
      {/* Implant Restorations */}
      <div className="rd-card animate fade-up delay-2">
        <div className="rd-card-img-wrapper">
          <img
            src="/Gemini_Generated_Image_mvwoshmvwoshmvwo.png"
            alt="Implant Restorations"
            className="img-zoom"
          />
        </div>
        <div className="rd-card-text">
          <h3>Implant Restorations</h3>
          <p>
            Failing implant? No worries! Our restorative dentist can fix your damaged implant so you can get back to smiling, talking, and enjoying your favorite foods.
          </p>
          <Link to="/treatment/implant-restoration" className="rd-action-link">
            See Implant Restorations →
          </Link>
        </div>
      </div>

      {/* Crowns */}
      <div className="rd-card animate fade-up delay-3">
        <div className="rd-card-img-wrapper">
          <img
            src="/Missing Tooth.png"
            alt="Crowns"
            className="img-zoom"
          />
        </div>
        <div className="rd-card-text">
          <h3>Crowns</h3>
          <p>
            Got a damaged or severely decayed tooth? Restore and protect your teeth with our long-lasting crowns. Each crown is designed to perfectly match your smile.
          </p>
          <Link to="/dental-crowns" className="rd-action-link">
            See Crowns →
          </Link>
        </div>
      </div>

      {/* Bridges */}
      <div className="rd-card animate fade-up delay-4">
        <div className="rd-card-img-wrapper">
          <img
            src="/Gemini_Generated_Image_c2uhdrc2uhdrc2uh.png"
            alt="Bridges"
            className="img-zoom"
          />
        </div>
        <div className="rd-card-text">
          <h3>Bridges</h3>
          <p>
            Bridge the gap in your smile with our expertly designed dental bridges! Our bridges not only improve your smile's appearance but also restore full functionality.
          </p>
          <Link to="/treatment/bridges" className="rd-action-link">
            See Bridges →
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 5. EMERGENCY OUTLINE BOX */}
      <section className="rd-emergency-section bg-white">
  <div className="container">

    <div className="rd-emergency-box animate zoom-in delay-1">

      <h2 className="animate fade-up delay-2">
        Dental Emergency?<br />We're your dental heroes!
      </h2>

      <p className="animate fade-up delay-3">
        Dental urgency? Don't worry — at 32 Signature Smilez, we're ready to swoop in and save the day. Just give us a ring and we'll take care of that frown in no time.
      </p>

      <p className="rd-emergency-call animate fade-up delay-4">
        <a href="tel:+919077770586">
          Call +91 90777 70586
        </a>
      </p>

    </div>

  </div>
</section>

      {/* 6. BOTTOM SECTIONS */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default RestorativeDentistry;
