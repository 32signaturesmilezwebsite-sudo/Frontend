import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MaxillofacialSurgery.css";

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
          <h2>State-of-the-art surgical care</h2>
          <p>
            When standard dental interventions are not enough to treat complex conditions of the face, jaw, and mouth, our highly specialized maxillofacial team is ready to intervene. We combine advanced imaging technology with a gentle, patient-first approach to provide transformative results.
          </p>
          <p>
            We manage a wide spectrum of surgical issues—from reconstructive jaw surgery and severe facial trauma to complex impacted teeth and pathological cyst removals. Your safety, comfort, and ultimate recovery are our absolute highest priorities.
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
    
    <div className="ms-split-content pr-large fade-up">
      
      <h2 className="fade-up">Why choose us for maxillofacial surgery?</h2>

      <p className="ms-intro fade-up delay-1">
        Maxillofacial surgery demands an exceptional blend of precision, experience, and advanced technology. At 32 Signature Smilez, we go beyond routine care—delivering hospital-grade surgical expertise in a safe, comfortable, and patient-focused environment. Every procedure is meticulously planned to ensure optimal function, aesthetics, and long-term success.
      </p>

      <ul className="ms-bullet-list">

        <li className="fade-up delay-2">
          <strong>Precision 3D Surgical Planning:</strong> Using advanced CBCT imaging and digital workflow, we create highly accurate 3D models of your jaw and facial structures—allowing us to simulate and perfect your surgery before it even begins.
        </li>

        <li className="fade-up delay-3">
          <strong>Minimally Invasive, Maximum Preservation:</strong> Our modern techniques focus on smaller incisions, preserving bone and soft tissue integrity, reducing swelling, and significantly speeding up recovery time.
        </li>

        <li className="fade-up delay-4">
          <strong>Pain-Free Sedation & Anxiety Control:</strong> From local anesthesia to IV sedation and general anesthesia, we tailor sedation protocols to ensure a completely relaxed, stress-free, and pain-free surgical experience.
        </li>

        <li className="fade-up delay-5">
          <strong>Specialized Surgical Expertise:</strong> Our maxillofacial surgeons are extensively trained in managing complex cases—ranging from impacted wisdom teeth and jaw corrections to facial trauma and implant rehabilitation.
        </li>

        <li className="fade-up delay-6">
          <strong>Advanced Infection Control & Sterility:</strong> We follow strict surgical protocols with hospital-grade sterilization standards, ensuring maximum safety and minimizing any risk of complications.
        </li>

        <li className="fade-up delay-7">
          <strong>Faster Healing & Guided Recovery:</strong> With precision techniques and personalized post-operative care plans, we ensure quicker healing, reduced discomfort, and smooth recovery.
        </li>

        <li className="fade-up delay-8">
          <strong>Comprehensive Aftercare & 24/7 Support:</strong> Your care doesn’t end after surgery. We provide continuous monitoring, emergency support access, and scheduled follow-ups to guarantee flawless healing.
        </li>

        <li className="fade-up delay-9">
          <strong>Functional + Aesthetic Excellence:</strong> We don’t just treat the problem—we restore proper function while enhancing facial harmony, ensuring results that look as good as they feel.
        </li>

      </ul>
    </div>

    <div className="ms-split-image animate animate-slide-right">
      <img 
        src="/Oral-Maxillofacial-Surgery.jpg" 
        alt="Advanced Maxillofacial Surgery Planning and Treatment" 
        className="shaped-image" 
      />
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
