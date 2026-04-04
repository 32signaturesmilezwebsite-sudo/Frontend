
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | 32 Signature Smilez';

    // 🔥 SCROLL REVEAL ANIMATION
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: "url('/Background.png')" }}
        ></div>
        <div className="container about-hero-content">
          <h1>About 32 Signature Smilez</h1>
          <p className="hero-subtitle">Where smiles come to life!</p>
          <div className="hero-btn-group">
            <Link to="/contact" className="btn-solid-orange">
              Request Appointment
            </Link>
            <a href="tel:+919077770586" className="btn-outline-dark">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. DENTAL CARE SECTION */}
      <section className="dental-care-section reveal">
        <div className="container">
          <h2>Dental Care Like You’ve Never Seen Before</h2>

          <div className="dental-care-text">
            <p>
              Leave all your worries behind and get ready for an extraordinary
              dental experience. At 32 Signature Smilez, we’ve redefined what it
              means to go to the dentist.
            </p>
            <p>
              With genuine empathy and expertise, our dedicated team will guide
              you through your dental journey, prioritizing your comfort every
              step of the way. Embark on a dental adventure that will have you
              smiling from ear to ear!
            </p>
          </div>

          <div className="image-grid-3">
            <img
              src="/426887001_1356994765011071_2707191976779894133_n.jpg"
              alt="Dentist Treatment 1"
              className="grid-img"
            />
            <img
              src="/slide-4.jpg"
              alt="Dentist Treatment 2"
              className="grid-img"
            />
            <img
              src="/IMG_0591.jpeg"
              alt="Dentist Treatment 3"
              className="grid-img"
            />
          </div>
        </div>
      </section>

      {/* 3. DOCTOR SECTION */}
      <section className="favorite-dentist-section reveal">
        <div className="split-layout">
          <div className="doc-image-side">
            <div className="doc-orange-bg">
              <div
                className="doc-tree-bg"
                style={{
                  backgroundImage: `url('/istockphoto-510081750-612x612.jpg')`,
                }}
              ></div>
            </div>
            <img
              src="/Deep Datta.PNG"
              alt="Dr. Deep Datta"
              className="doc-cutout"
            />
          </div>

          <div className="doc-text-side">
            <h2>Your New Favorite Dentist</h2>

            <p className="doc-intro">
              Dr. Deep Datta is the visionary behind 32 Signature Smilez. A
              senior Oral Maxillofacial Surgeon and Implantologist with over 18
              years of comprehensive clinical, academic, and surgical experience,
              he is dedicated to transforming smiles and lives across the region.
            </p>

            <h3 className="list-heading">Fun to Know</h3>
            <ul className="doc-list">
              <li>
                Has successfully performed 500+ dental implant placements and
                175+ cleft lip/palate surgeries.
              </li>
              <li>
                Actively participates in professional sports, representing IDA
                Tripura at national sports events.
              </li>
              <li>
                Serves as Convener for Sports Committees alongside his demanding
                clinical practice.
              </li>
              <li>
                Co-authored multiple peer-reviewed publications in national and
                international journals.
              </li>
            </ul>

            <h3 className="list-heading">Good to Know</h3>
            <ul className="doc-list">
              <li>
                Associate Professor, Department of Dentistry, Tripura
                Santiniketan Medical College.
              </li>
              <li>
                Clinical Director at 32 Signature Smilez and Lucid Healthcare.
              </li>
              <li>
                Visiting Consultant Maxillofacial Surgeon at ILS Hospital,
                Agartala.
              </li>
              <li>
                Honoured with the Best Oral & Maxillofacial Surgeon &
                Implantologist of Tripura award.
              </li>
              <li>
                Expertise includes Maxillofacial Trauma, TMJ Surgery, and Head &
                Neck Oncology-related care.
              </li>
            </ul>

            <div className="doc-quote">
              <p>
                "I welcome opportunities for clinical collaboration, academic
                roles, hospital empanelment, speaking engagements, and healthcare
                leadership initiatives. My passion is delivering comfortable,
                transformative care."
              </p>
              <span>— Dr. Deep Datta</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES SECTION */}
      <section className="experiences-redefined-section reveal">
        <div className="container">
          <h2>Dental Experiences Redefined</h2>

          <div className="ook-grid">
            <div className="ook-card">
              <div className="hex-icon-vector">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                  <rect x="5" y="10" width="14" height="10" rx="2"></rect>
                  <path d="M7 10V6h10v4"></path>
                  <circle cx="12" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3>Unparalleled Comfort</h3>
              <p>
                Prepare to be amazed as we make your dental experience a breeze.
              </p>
            </div>

            <div className="ook-card">
              <div className="hex-icon-vector">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3>Home Away From Home</h3>
              <p>
                Our friendly team creates a warm and welcoming environment.
              </p>
            </div>

            <div className="ook-card">
              <div className="hex-icon-vector">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c57b43" strokeWidth="1.2">
                  <path d="M12 21H8c-2 0-3.5-1-4-3L3 13c-.5-2 1-4 3-4s3.5 1 4 3 2 3 4 3 4-1 6-3"></path>
                </svg>
              </div>
              <h3>Lasting Smiles</h3>
              <p>We create smiles that stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />

      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default AboutUs;

