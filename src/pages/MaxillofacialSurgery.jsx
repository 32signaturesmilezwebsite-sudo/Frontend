import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MaxillofacialSurgery.css";
import { Microscope, HeartPulse, ClipboardList, ShieldCheck } from "lucide-react";

const faqs = [
  { 
    question: "Is the procedure painful?", 
    answer: "No, we use advanced anesthetics and sedation options to ensure you are completely numb and relaxed. Most patients report feeling only minor pressure during surgery." 
  },
  { 
    question: "How long is the recovery?", 
    answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days for minor surgeries to a couple of weeks for full healing and swelling reduction in complex procedures." 
  },
  { 
    question: "What is maxillofacial surgery?", 
    answer: "Maxillofacial surgery is a specialized field that focuses on treating conditions related to the face, jaw, mouth, and neck. It includes procedures like wisdom tooth removal, jaw correction, facial trauma repair, and dental implants." 
  },
  { 
    question: "When do I need maxillofacial surgery?", 
    answer: "You may need maxillofacial surgery if you have impacted teeth, jaw misalignment, facial injuries, cysts, tumors, or require dental implants or corrective jaw surgery." 
  },
  { 
    question: "Will I be put to sleep during the surgery?", 
    answer: "Depending on the complexity of the procedure, we offer local anesthesia, sedation, or general anesthesia to ensure maximum comfort and safety during treatment." 
  },
  { 
    question: "How long does the surgery take?", 
    answer: "The duration varies depending on the procedure. Simple procedures may take 30–60 minutes, while more complex surgeries can take several hours." 
  },
  { 
    question: "Are there any risks involved?", 
    answer: "Like any surgical procedure, there are minimal risks such as swelling, bleeding, or infection. However, we follow strict safety protocols to minimize complications." 
  },
  { 
    question: "Will there be visible scars?", 
    answer: "Most maxillofacial procedures are performed inside the mouth, leaving no visible scars. If external incisions are needed, they are carefully placed to minimize visibility." 
  },
  { 
    question: "What can I eat after surgery?", 
    answer: "A soft diet is usually recommended after surgery. Foods like soups, smoothies, mashed potatoes, and yogurt are ideal during the initial healing phase." 
  },
  { 
    question: "How soon can I return to normal activities?", 
    answer: "Most patients can resume normal daily activities within a few days, but strenuous activities should be avoided for at least 1–2 weeks depending on the procedure." 
  },
  { 
    question: "Do I need follow-up visits?", 
    answer: "Yes, follow-up visits are important to monitor healing, remove stitches if needed, and ensure there are no complications." 
  },
  { 
    question: "Is maxillofacial surgery safe?", 
    answer: "Yes, when performed by a qualified oral and maxillofacial surgeon, the procedures are highly safe and follow strict medical protocols." 
  }
];
const MaxillofacialSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Maxillofacial Surgery | 32 Signature Smilez";

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // TEXT ANIMATION
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("active");
            }
            // IMAGE / CARD / SECTION ANIMATION
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.add("animate-show");
            }
            // OPTIONAL: container activation (for grouped animations)
            if (entry.target.classList.contains("ms-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .ms-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ms-wrapper">
      <Header />

      <section className="ms-hero">
        <div className="ms-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container ms-hero-content">
          <h1 className="fade-up">Maxillofacial Surgery</h1>
          <p className="ms-hero-subtitle fade-up delay-1">Expert care for complex conditions</p>
          <div className="ms-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      <section className="ms-centered-text">
        <div className="container ms-ct-container">
          <h2 className="fade-up">What is Maxillofacial Surgery?</h2>
          <p className="fade-up delay-1" style={{ fontSize: '1.15rem' }}>
            Maxillofacial surgery is a specialized branch of dentistry that focuses on treating problems related to the face, jaw, mouth, and teeth. It combines dental knowledge with surgical expertise to manage both simple and complex conditions affecting these areas.
          </p>
          <p className="fade-up delay-2" style={{ fontSize: '1.15rem', marginBottom: '40px' }}>
            At 32 Signature Smilez Dental Clinic, our maxillofacial care is designed to restore not just your oral health, but also your comfort, function, and facial appearance.
          </p>

          <h3 className="fade-up delay-3" style={{ color: '#c57b43', fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '20px' }}>Why is it important?</h3>
          <p className="fade-up delay-4" style={{ fontSize: '1.15rem' }}>
            Problems in the jaw and facial region can affect eating, speaking, breathing, and appearance. Maxillofacial surgery helps restore normal function and enhances confidence by improving facial harmony.
          </p>
        </div>
      </section>

      <section className="ms-dark-split">
        <div className="ms-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="ms-dark-overlay"></div>
        <div className="container ms-dark-container">
          <div className="ms-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="ms-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
              Maxillofacial surgery is a major medical and financial undertaking, but at 32 Signature Smilez, we refuse to let cost bar you from essential, life-changing procedures. We expertly navigate the complex overlap between medical and dental insurance to ensure you receive the absolute maximum coverage possible for your specific surgery. Furthermore, we provide extended, zero-interest payment schedules to break down any remaining out-of-pocket costs into manageable monthly installments, taking the financial stress completely out of your recovery phase.
            </p>
          </div>
        </div>
      </section>

      <section className="ms-split-section bg-cream">
        <div className="container ms-split-container">
          
          <div className="ms-split-content pr-large animate animate-slide-right">
            <h2 className="animate">What does a Maxillofacial Surgeon do?</h2>
            <p className="animate delay-1" style={{ marginBottom: '25px', fontSize: '1.1rem' }}>
              A maxillofacial surgeon is trained to diagnose and perform surgeries for a wide range of conditions, including:
            </p>

            <ul className="ms-bullet-list">
              <li className="animate delay-2"><strong>Wisdom Tooth Removal:</strong> Safe and painless removal of impacted or painful wisdom teeth.</li>
              <li className="animate delay-3"><strong>Facial Trauma Treatment:</strong> Management of injuries like jaw fractures, facial cuts, or accidents affecting the face.</li>
              <li className="animate delay-4"><strong>Jaw Correction (Orthognathic Surgery):</strong> Correcting improper jaw alignment to improve chewing, speech, and facial balance.</li>
              <li className="animate delay-5"><strong>Dental Implants:</strong> Surgically placing implants to replace missing teeth with strong, natural-looking alternatives.</li>
              <li className="animate delay-6"><strong>Cyst & Tumor Removal:</strong> Diagnosis and removal of abnormal growths in the mouth or jaw.</li>
              <li className="animate delay-7"><strong>TMJ Disorders Treatment:</strong> Treating jaw joint pain, clicking, or difficulty in opening/closing the mouth.</li>
              <li className="animate delay-8"><strong>Facial Pain & Infections:</strong> Managing severe infections or unexplained facial pain.</li>
            </ul>
          </div>

          <div className="ms-split-image animate animate-slide-left">
            <img 
              src="/Oral-Maxillofacial-Surgery.jpg" 
              alt="Advanced Maxillofacial Surgery" 
              className="shaped-image img-zoom" 
            />
          </div>

        </div>
      </section>

      <section className="ms-centered-text bg-white" style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div className="container ms-ct-container" style={{ maxWidth: '1400px' }}>
          <h2 className="fade-up">Our Approach</h2>
          <p className="fade-up delay-1" style={{ marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.15rem' }}>
            At 32 Signature Smilez, we ensure hospital-grade surgical expertise is delivered in a safe, comfortable, and deeply personalized way:
          </p>

          <div className="ms-ook-grid fade-up delay-2">
            <div className="ms-ook-card">
              <div className="hex-icon">
                <Microscope size={48} strokeWidth={1.5} />
              </div>
              <h4>Advanced Tech</h4>
              <p>Advanced and safe surgical techniques</p>
            </div>
            <div className="ms-ook-card">
              <div className="hex-icon">
                <HeartPulse size={48} strokeWidth={1.5} />
              </div>
              <h4>Faster Healing</h4>
              <p>Minimal pain and faster recovery</p>
            </div>
            <div className="ms-ook-card">
              <div className="hex-icon">
                <ClipboardList size={48} strokeWidth={1.5} />
              </div>
              <h4>Custom Care</h4>
              <p>Personalized treatment plans</p>
            </div>
            <div className="ms-ook-card">
              <div className="hex-icon">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h4>Comfort First</h4>
              <p>A comfortable and caring environment</p>
            </div>
          </div>

          <p className="fade-up delay-3" style={{ fontWeight: '600', color: '#c57b43', fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto 30px' }}>
            If you're experiencing jaw pain, facial swelling, difficulty in chewing, or have been advised surgery, our team is here to help you every step of the way.
          </p>

          <div className="fade-up delay-4">
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

export default MaxillofacialSurgery;
