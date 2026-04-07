import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./DentalImplants.css";
import { Microscope, Users, ShieldCheck, Sparkles } from "lucide-react";

const faqs = [
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const DentalImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Implants | 32 Signature Smilez";

    // IntersectionObserver logic for fade-up and animate
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.add("animate-show");
            }
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".fade-up, .animate")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="di-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="di-hero">
        <div
          className="di-hero-bg zoom-bg"
          style={{
            backgroundImage: "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container di-hero-content">
          <h1 className="fade-up">Dental Implants</h1>

          <p className="di-hero-subtitle fade-up delay-1">
            A Permanent Solution for Missing Teeth
          </p>

          <div className="di-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT CONTENT */}
      <section className="di-centered-text">
        <div className="container di-ct-container">
          <h2 className="fade-up">What are Dental Implants?</h2>
          <p className="fade-up delay-1" style={{ fontSize: '1.25rem' }}>
            Dental implants are a modern and long-lasting way to replace missing teeth. They are small, strong titanium posts that are placed into the jawbone, acting like artificial tooth roots. Once healed, a natural-looking tooth (crown) is fixed on top, giving you a complete, confident smile.
          </p>
        </div>
      </section>

      {/* 3. WHY CHOOSE IMPLANTS (Split Image Left, Content Right) */}
      <section className="di-split-section bg-cream">
        <div className="container di-split-container">
          <div className="di-split-image pr-large animate animate-slide-left">
            <img
              src="/ffd0d908a1ffd9bac25382d0f81b8351 (1).jpg"
              alt="Why Choose Dental Implants"
              className="shaped-image img-zoom"
            />
          </div>

          <div className="di-split-content animate animate-slide-right">
            <h2 className="animate">Why choose Dental Implants?</h2>
            
            <ul className="di-bullet-list">
              <li className="animate delay-1">Look and feel like natural teeth</li>
              <li className="animate delay-2">Help you chew and speak comfortably</li>
              <li className="animate delay-3">Prevent bone loss and maintain face shape</li>
              <li className="animate delay-4">Do not affect nearby healthy teeth</li>
              <li className="animate delay-5">Long-lasting and reliable solution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TREATMENT PROCESS (Split Content Left, Image Right) */}
      <section className="di-split-section bg-white" style={{ padding: '80px 20px' }}>
        <div className="container di-split-container row-reverse">
          <div className="di-split-content pr-large animate animate-slide-right">
            <h2 className="animate">What is done in Dental Implant Treatment?</h2>
            <p className="di-bold-lead animate delay-1" style={{color: '#c57b43', fontWeight: '600', marginBottom: '20px'}}>
              At 32 Signature Smilez Dental Clinic, the dental implant process is done carefully and comfortably in a few steps:
            </p>

            <ul className="di-process-list">
              <li className="animate delay-1">
                <strong>1. Consultation & Planning:</strong> We examine your teeth, gums, and bone using X-rays or scans to plan the best treatment for you.
              </li>
              <li className="animate delay-2">
                <strong>2. Implant Placement:</strong> The titanium implant is gently placed into the jawbone under local anesthesia. The procedure is safe and usually painless.
              </li>
              <li className="animate delay-3">
                <strong>3. Healing Phase:</strong> Over the next few months, the implant naturally fuses with the bone (this process is called osseointegration), creating a strong base.
              </li>
              <li className="animate delay-4">
                <strong>4. Crown Placement:</strong> Once healing is complete, a custom-made tooth (crown) is attached to the implant, matching your natural teeth perfectly.
              </li>
            </ul>

            <div className="animate delay-5" style={{ marginTop: '30px', padding: '20px', background: '#fbf7ee', borderRadius: '12px' }}>
              <h4 style={{ color: '#3b4657', marginBottom: '10px', fontSize: '1.2rem' }}>Additional Procedures (if needed)</h4>
              <p style={{ color: '#4a5568', marginBottom: '10px' }}>In some cases, we may perform:</p>
              <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: '1.6' }}>
                <li>Bone grafting (to strengthen the jawbone)</li>
                <li>Sinus lift (for upper jaw implants)</li>
                <li>Immediate implants (placement right after tooth removal)</li>
              </ul>
            </div>
          </div>

          <div className="di-split-image animate animate-slide-left">
            <img
              src="/ChatGPT Image Dec 17, 2025, 08_03_49 PM.png"
              alt="Dental Implant Treatment Process"
              className="shaped-image img-zoom"
            />
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY & WHY US (Centered Section) */}
      <section className="di-centered-text bg-cream" style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div className="container di-ct-container" style={{ maxWidth: '1400px' }}>
          <h2 className="fade-up">Who can get Dental Implants?</h2>
          <p className="fade-up delay-1" style={{ marginBottom: '60px', maxWidth: '850px', margin: '0 auto 60px' }}>
            Most adults with healthy gums and adequate bone can opt for implants. Even if bone is less, advanced procedures can make implants possible.
          </p>

          <h2 className="fade-up delay-2">Why choose 32 Signature Smilez?</h2>
          
          <div className="di-ook-grid fade-up delay-3">
            <div className="di-ook-card">
              <div className="hex-icon">
                <Microscope size={48} strokeWidth={1.5} />
              </div>
              <h3>Advanced Technology</h3>
              <p>We utilize precision care and the latest technology for every patient.</p>
            </div>
            
            <div className="di-ook-card">
              <div className="hex-icon">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3>Experienced Team</h3>
              <p>Our professionals have years of specialized dental implant experience.</p>
            </div>
            
            <div className="di-ook-card">
              <div className="hex-icon">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h3>Comfort & Safety</h3>
              <p>Your safety and absolute comfort are our highest priorities.</p>
            </div>
            
            <div className="di-ook-card">
              <div className="hex-icon">
                <Sparkles size={48} strokeWidth={1.5} />
              </div>
              <h3>Lasting Results</h3>
              <p>Impeccable natural-looking, long-lasting results you'll be proud of.</p>
            </div>
          </div>

          <h3 className="fade-up delay-4" style={{ color: '#c57b43', fontSize: '2rem', fontFamily: 'Playfair Display', marginBottom: '20px' }}>Get Your Smile Back with Confidence!</h3>
          <p className="fade-up delay-5" style={{ marginBottom: '30px', maxWidth: '850px', margin: '0 auto 30px' }}>
            Dental implants can completely transform your smile and quality of life. Book your consultation today and take the first step towards a permanent solution for missing teeth.
          </p>
          <div className="fade-up delay-5">
            <Link to="/contact" className="btn-solid-orange">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqsData={faqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default DentalImplants;
