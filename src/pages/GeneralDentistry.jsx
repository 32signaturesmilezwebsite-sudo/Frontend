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
  }, []);

  return (
    <div className="gd-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="gd-hero">
        <div className="gd-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container gd-hero-content">
          <h1>32 Signature Smilez General Dentist</h1>
          <p className="gd-hero-subtitle">Smile more, live more!</p>
          <div className="gd-hero-buttons">
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
          <h2>Caring for your oral health with a smile</h2>
          <p>
            We provide comprehensive general dental care for your entire family, in a comfortable and positive environment. Our doors are always open to new smiles, and we pride ourselves on creating a cozy, welcoming atmosphere.
          </p>
          <p>
            As your trusted Agartala general dentist, Dr. Datta is dedicated to delivering personalized care and adapting to your unique needs. We get to know you and your teeth, so every treatment feels just right. Visit us and see for yourself! Call: <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a>.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="gd-dark-split">
        <div className="gd-dark-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="gd-dark-overlay"></div>
        <div className="container gd-dark-container">
          <div className="gd-ds-image">
             <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
          </div>
          <div className="gd-ds-content">
            <h2>Save and Smile</h2>
            <p>
              At 32 Signature Smilez, we believe that your oral health shouldn't come with financial stress. 
            </p>
            <p>
              We provide affordable general dentist services with flexible payment plans and work with various insurance providers. Ask our team about our payment options!
            </p>
            <Link to="/contact" className="btn-solid-orange">
              Check My Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GENERAL DENTAL CARE (Grid) */}
      <section className="gd-treatments-grid-section bg-cream">
        <div className="container">
          <h2 className="gd-section-title">General Dental Care</h2>
          <div className="gd-grid">
            
            {/* Card 1: Cleanings */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/media__1774675904915.png" alt="Cleanings & Exams" />
              </div>
              <div className="gd-card-text">
                <h3>Cleanings & Exams</h3>
                <p>Regular cleanings and exams are key for maintaining your teeth in tip-top shape. Our gentle preventative approach will help keep cavities away.</p>
                <Link to="/treatment/cleaning-exams" className="gd-action-link">See Cleanings</Link>
              </div>
            </div>

            {/* Card 2: Fillings */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/media__1774513251008.jpg" alt="Dental Fillings" />
              </div>
              <div className="gd-card-text">
                <h3>Dental Fillings</h3>
                <p>We use high-quality materials for fillings. This makes them last longer and matches the natural color of your teeth for a seamless restoration.</p>
                <Link to="/treatment/fillings" className="gd-action-link">See Fillings</Link>
              </div>
            </div>

            {/* Card 3: Crowns */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/Missing Tooth.png" alt="Traditional Crowns" />
              </div>
              <div className="gd-card-text">
                <h3>Traditional Crowns</h3>
                <p>Don't hide your smile. Our crowns restore the strength and appearance of damaged teeth, crafted with precision for a perfect bite.</p>
                <Link to="/dental-crowns" className="gd-action-link">See Crowns</Link>
              </div>
            </div>

            {/* Card 4: Emergency */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/Teeth Grinding.png" alt="Emergency Care" />
              </div>
              <div className="gd-card-text">
                <h3>Emergency Care</h3>
                <p>Dental emergency? Rely on us for quick, compassionate care to address your needs effectively. Same-day appointments are available!</p>
                <Link to="/treatment/emergency-dentistry" className="gd-action-link">See Emergency Care</Link>
              </div>
            </div>

            {/* Card 5: Family Dentistry */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/Kids-Dentistry.png" alt="Family Dentistry" />
              </div>
              <div className="gd-card-text">
                <h3>Family Dentistry</h3>
                <p>As a family-focused general dentist, we offer comprehensive care for all ages. We help your family's smiles stay healthy and bright!</p>
                <Link to="/treatment/family-dentistry" className="gd-action-link">See Family Care</Link>
              </div>
            </div>

            {/* Card 6: Sedation */}
            <div className="gd-card">
              <div className="gd-card-img-wrapper">
                <img src="/media__1774675276734.png" alt="Nitrous Oxide" />
              </div>
              <div className="gd-card-text">
                <h3>Nitrous Oxide</h3>
                <p>Dental anxiety? We offer nitrous oxide sedation — a safe, effective way to help you unwind during dental procedures.</p>
                <Link to="/treatment/sedation" className="gd-action-link">See Sedation</Link>
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
