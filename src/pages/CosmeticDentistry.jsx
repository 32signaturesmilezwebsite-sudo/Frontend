import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import './CosmeticDentistry.css';

const CosmeticDentistry = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Page title
    document.title = 'Cosmetic Dentistry | 32 Signature Smilez';

    // Animation observer — adds 'animate-show' for .animate elements, 'show' for .fade-up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate')) {
              entry.target.classList.add('animate-show');
            } else {
              entry.target.classList.add('show');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-up, .animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cd-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      
<section className="cd-hero">
  <div
    className="cd-hero-bg"
    style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
  ></div>

  <div className="container cd-hero-content">
    <h1 className="fade-up delay-1">
      Your 32 Signature Smilez Cosmetic Dentist
    </h1>

    <p className="cd-hero-subtitle fade-up delay-2">
      32 Signature Smilez's choice for a brighter, happier smile!
    </p>

    <div className="cd-hero-buttons fade-up delay-3">
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
      <section className="cd-centered-text">
  <div className="container cd-ct-container">

    <h2 className="fade-up delay-1">Transform Your Smile!</h2>

    <p className="fade-up delay-2">
      For us, your comfort, confidence, and dental health are our top priorities. Our 32 Signature Smilez cosmetic dentist office is designed to offer a relaxing, positive atmosphere while providing personalized cosmetic care.
    </p>

    <p className="fade-up delay-3">
      Whether you need specific cosmetic enhancements or a combination of restorative and cosmetic care, our team is here to ensure a comfortable and rewarding experience.
    </p>

    <p className="cd-bold-action fade-up delay-4">
      Call: <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a> to get started!
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE (Dark Section Reused from Bad Breath / Mockups) */}
      <section className="cd-dark-split">
  <div
    className="cd-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="cd-dark-overlay"></div>

  <div className="container cd-dark-container">

    {/* IMAGE */}
    <div className="cd-ds-image animate animate-slide-left">
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
    <div className="cd-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Achieving a beautiful smile shouldn't be a financial burden. At 32 Signature Smilez, we provide flexible payment options suited to your financial needs and collaborate with a variety of insurance providers.
      </p>

      
    </div>

  </div>
</section>

      {/* 4. COSMETIC DENTAL TREATMENTS (Grid Section) */}
      <section className="cd-treatments bg-cream">
  <div className="container cd-treatments-container">

    <h2 className="cd-title-center fade-up delay-1">
      Cosmetic Dental Treatments
    </h2>

    <div className="cd-grid">

      {/* Card 1 */}
      <div className="cd-card animate delay-1">
        <div className="cd-card-img-wrapper">
          <img src="/271997434_1762637817260466_4433929669717644270_n.jpg" alt="Teeth Whitening" />
        </div>
        <div className="cd-card-text">
          <h3>Teeth Whitening</h3>
          <p>Upgrade your smile with our professional teeth whitening treatment. It's fast, effective, and delivers radiant results that help you shine with confidence.</p>
          <Link to="/teeth-whitening" className="cd-action-link">
            See Teeth Whitening →
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="cd-card animate delay-2">
        <div className="cd-card-img-wrapper">
          <img src="/Kids-Dentistry.png" alt="Bonding" />
        </div>
        <div className="cd-card-text">
          <h3>Bonding</h3>
          <p>Perfect your smile with dental bonding. Ideal for correcting imperfections such as minor chips or gaps.</p>
          <Link to="/dental-bonding" className="cd-action-link">
            See Bonding →
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="cd-card animate delay-3">
        <div className="cd-card-img-wrapper">
          <img src="/Missing Tooth.png" alt="Crowns" />
        </div>
        <div className="cd-card-text">
          <h3>Crowns</h3>
          <p>Restore your smile's beauty and function with our precision-crafted crowns.</p>
          <Link to="/dental-crowns" className="cd-action-link">
            See Crowns →
          </Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="cd-card animate delay-4">
        <div className="cd-card-img-wrapper">
          <img src="/Teeth Grinding.png" alt="Veneers" />
        </div>
        <div className="cd-card-text">
          <h3>Veneers</h3>
          <p>Dental veneers provide a beautiful, natural-looking solution for chipped or stained teeth.</p>
          <Link to="/veneers" className="cd-action-link">
            See Veneers →
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* 5. COMPONENTS FROM REQUEST */}
      <Testimonials />
      <ContactSection />
      
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
