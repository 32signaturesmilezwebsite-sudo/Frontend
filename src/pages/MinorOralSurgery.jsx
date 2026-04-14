import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./MinorOralSurgery.css";

const faqs = [
  {
    question: "What is orthodontic treatment?",
    answer: "Orthodontic treatment corrects the alignment of your teeth and jaw using braces, clear aligners, or other dental appliances. The goal is to improve both the function and appearance of your smile."
  },
  {
    question: "How long does orthodontic treatment take?",
    answer: "Treatment duration varies by case complexity. Mild corrections may take 6–12 months, while more complex cases can require 18–36 months. We give you a personalised timeline at your consultation."
  },
  {
    question: "Are braces or clear aligners better?",
    answer: "Both are effective. Traditional metal or ceramic braces are ideal for complex bite corrections. Clear aligners (like Invisalign) offer a near-invisible option and are popular with adults and teens for moderate corrections."
  },
  {
    question: "Is orthodontic treatment painful?",
    answer: "You may experience mild soreness for a few days after each adjustment or new aligner tray, but this is temporary. Over-the-counter pain relief is usually sufficient to manage any discomfort."
  },
  {
    question: "At what age should orthodontic treatment begin?",
    answer: "We recommend an initial orthodontic evaluation by age 7–8, as early intervention can prevent more complex treatment later. However, orthodontics is successful at any age—many adults achieve excellent results."
  },
  {
    question: "Can adults get orthodontic treatment?",
    answer: "Absolutely. Orthodontics is not just for children. Adults represent a growing percentage of orthodontic patients. Clear aligners in particular are widely chosen by working professionals for their discreteness."
  },
  {
    question: "Will I need to wear a retainer?",
    answer: "Yes. After active treatment, a retainer is essential to keep teeth in their new positions. We customise your retainer plan—which may include removable or fixed options—to maintain your results long-term."
  },
  {
    question: "How do I clean my teeth with braces?",
    answer: "Good oral hygiene requires extra care with braces. We recommend brushing after every meal using an orthodontic toothbrush, using floss threaders or water flossers, and attending regular professional cleans."
  },
  {
    question: "Are there foods I need to avoid?",
    answer: "With traditional braces you should avoid hard, sticky, or chewy foods (e.g. popcorn, hard candies, chewing gum) that can break brackets or wires. Clear aligner wearers remove their trays to eat and drink freely."
  },
  {
    question: "What happens if a bracket or wire breaks?",
    answer: "Contact the clinic promptly and we will schedule a repair appointment. Minor wire irritations can be temporarily soothed with orthodontic wax until you come in."
  },
  {
    question: "Is orthodontic treatment covered by insurance?",
    answer: "Coverage varies by plan. We work with most major dental insurance providers and offer flexible payment plans to help make your orthodontic journey affordable."
  },
  {
    question: "Will orthodontic treatment affect my speech?",
    answer: "There may be a brief adjustment period with new appliances. Most patients adapt within a week or two and speak normally. Clear aligner wearers often find the adjustment quicker."
  }
];

const Orthodontics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Orthodontics | 32 Signature Smilez";

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
            if (entry.target.classList.contains("mo-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .mo-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mo-wrapper">
      <Header />

      {/* ── HERO ── */}
      <section className="mo-hero">
        <div className="mo-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mo-hero-content">
          <h1 className="fade-up">Orthodontics</h1>
          <p className="mo-hero-subtitle fade-up delay-1">Straighten your smile. Transform your confidence.</p>
          <div className="mo-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Consultation</Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="mo-centered-text">
        <div className="container mo-ct-container">
          <h2>A straight smile is a healthy smile</h2>
          <p>
            Orthodontics is far more than aesthetics. Properly aligned teeth are easier to clean, experience less abnormal wear, and contribute to a healthier bite and jaw. At 32 Signature Smilez, we offer a full spectrum of orthodontic solutions — from classic metal braces to advanced clear aligner therapy — tailored precisely to your anatomy, lifestyle, and goals.
          </p>
          <p>
            Whether you are a child starting early preventive treatment, a teenager seeking a discreet solution, or an adult finally prioritising that smile you've always wanted, our orthodontic team is here to guide every step of your journey with expertise and genuine care.
          </p>
        </div>
      </section>

      {/* ── DARK SPLIT ── */}
      <section className="mo-dark-split">
        <div className="mo-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="mo-dark-overlay"></div>
        <div className="container mo-dark-container">
          <div className="mo-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="mo-ds-content animate animate-slide-right">
            <h2>Affordable, Accessible Orthodontics</h2>
            <p>
              We believe that a beautifully aligned smile should not be a luxury. That is why we offer flexible, interest-free instalment plans and work closely with all major dental insurance providers to maximise your orthodontic coverage. Our in-house orthodontic team eliminates costly external referrals, keeping your treatment journey streamlined, transparent, and genuinely affordable from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="mo-split-section bg-cream">
        <div className="container mo-split-container">
          <div className="mo-split-content pr-large fade-up">
            <h2 className="fade-up">Our Orthodontic Solutions</h2>
            <p className="mo-intro fade-up delay-1">
              We combine the latest orthodontic technology with a meticulous, patient-centred approach to deliver outcomes that are both beautiful and lasting.
            </p>
            <ul className="mo-bullet-list">
              <li className="fade-up delay-2">
                <strong>Metal Braces:</strong> The gold standard for comprehensive tooth movement. Reliable, effective, and suitable for even the most complex bite corrections — now with smaller, sleeker brackets.
              </li>
              <li className="fade-up delay-3">
                <strong>Ceramic Braces:</strong> Tooth-coloured brackets that blend naturally with your smile for a far more discreet appearance while delivering the same precision as metal braces.
              </li>
              <li className="fade-up delay-4">
                <strong>Clear Aligners:</strong> A series of virtually invisible, removable trays progressively guide your teeth into alignment. Ideal for teens and adults who want freedom during meals and social events.
              </li>
              <li className="fade-up delay-5">
                <strong>Early Interceptive Treatment:</strong> Identifying and addressing bite discrepancies in children aged 7–10 can simplify — or even eliminate — comprehensive treatment in later years.
              </li>
              <li className="fade-up delay-6">
                <strong>Retainers & Maintenance:</strong> A custom retention plan after active treatment ensures your new smile stays perfectly in place for life.
              </li>
            </ul>
          </div>
          <div className="mo-split-image animate animate-slide-right">
            <div className="mo-image-gallery">
              <div className="mo-gallery-main">
                <img
                  src="/Gemini_Generated_Image_mcd1m1mcd1m1mcd1.png"
                  alt="Orthodontics at 32 Signature Smilez"
                  className="shaped-image"
                />
              </div>
              <div className="mo-gallery-thumbs">
                <img
                  src="/Recreate_the_provided_dental_clinic_promotional_po-1775803759872.png"
                  alt="Orthodontic Treatment"
                  className="mo-thumb"
                />
                <img
                  src="/Gemini_Generated_Image_aqngpcaqngpcaqng (1).png"
                  alt="Orthodontic Results"
                  className="mo-thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqsData={faqs} customTitle="Orthodontics — Your Questions Answered" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Orthodontics;
