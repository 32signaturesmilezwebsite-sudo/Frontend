import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Mouthguards.css";

const guardFaqs = [
  {
    question: "Why can't I just buy a 'boil-and-bite' guard from the store?",
    answer: "Store-bought guards are bulky, uncomfortable, and can restrict breathing and speaking during sports. Poorly fitted night guards may also shift your bite over time, leading to long-term dental issues."
  },
  {
    question: "How long does a custom guard last?",
    answer: "With proper care, a custom night guard made from high-quality materials can last 3 to 5 years, even for patients with heavy grinding habits."
  },
  {
    question: "Who should wear a mouthguard?",
    answer: "Mouthguards are recommended for athletes involved in contact sports, individuals who grind their teeth (bruxism), and patients experiencing jaw pain or TMJ-related issues."
  },
  {
    question: "Are custom mouthguards comfortable?",
    answer: "Yes, custom mouthguards are designed using precise dental impressions, ensuring a snug fit that allows comfortable breathing, speaking, and long-term wear."
  },
  {
    question: "Can a mouthguard help with jaw pain or headaches?",
    answer: "Absolutely. Night guards help reduce pressure on the jaw joints and muscles, which can relieve TMJ discomfort, tension headaches, and facial pain."
  },
  {
    question: "How do I clean and maintain my mouthguard?",
    answer: "Clean your mouthguard daily using a soft toothbrush and mild soap or a non-abrasive cleaner. Store it in a ventilated case and avoid exposure to heat to prevent distortion."
  },
  {
    question: "Will wearing a mouthguard affect my speech or breathing?",
    answer: "Custom mouthguards are designed to fit precisely, allowing you to breathe and speak naturally—unlike bulky over-the-counter options."
  },
  {
    question: "Can children and teenagers use mouthguards?",
    answer: "Yes, mouthguards are especially important for children and teens involved in sports. Custom guards can also be adjusted as their teeth and jaws grow."
  },
  {
    question: "What is the difference between a sports guard and a night guard?",
    answer: "Sports guards are designed to absorb impact and prevent injuries during physical activities, while night guards focus on protecting teeth from grinding and reducing jaw strain during sleep."
  },
  {
    question: "Are mouthguards affordable?",
answer: "Yes, custom mouthguards are an affordable way to protect your teeth from damage caused by grinding or sports activities. We offer flexible payment options along with convenient online and card transactions to make your treatment easy and stress-free."
  }
];

const Mouthguards = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Mouthguards | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // TEXT ANIMATION (headings, paragraphs)
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // CARD / IMAGE / SECTION ANIMATION
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          // OPTIONAL: container activation (for grouped animations like paragraphs)
          if (entry.target.classList.contains("em-ds-content")) {
            entry.target.classList.add("active");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // SELECT ALL ELEMENTS TO ANIMATE
  const elements = document.querySelectorAll(
    ".fade-up, .animate, .em-ds-content"
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="mg-wrapper">
      <Header />

      <section className="mg-hero">
        <div className="mg-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container mg-hero-content">
          <h1 className="fade-up">Custom Mouthguards</h1>
          <p className="mg-hero-subtitle fade-up delay-1">Protecting your smile while you sleep and play</p>
          <div className="mg-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Get Protected</Link>
          </div>
        </div>
      </section>

      <section className="mg-centered-text">
        <div className="container mg-ct-container">
          <h2>Prevention is better than a fracture</h2>
          <p>
            Whether you're engaging in high-impact contact sports, or you physically grind your teeth together at night due to stress (Bruxism), the immense forces exerted on your natural enamel will inevitably cause catastrophic fractures or premature tooth wear.
          </p>
          <p>
            We fabricate ultra-precise, comfortable custom mouthguards utilizing highly accurate digital scans. Our appliances absorb impact shock flawlessly and protect your vital restorations over the long haul.
          </p>
        </div>
      </section>

      <section className="fil-dark-split">
  <div
    className="fil-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="fil-dark-overlay"></div>

  <div className="container fil-dark-container">

    {/* IMAGE */}
    <div className="fil-ds-image animate animate-slide-left">
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
    <div className="fil-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

     <p>
  Protecting your smile during sports or from nighttime grinding is essential for long-term oral health. Custom mouthguards are designed to provide superior comfort, durability, and protection compared to over-the-counter options. Whether you’re an athlete or suffer from teeth grinding (bruxism), our precision-fit mouthguards help prevent tooth damage, jaw strain, and unnecessary wear. 

  Crafted using advanced materials, they fit securely and allow you to breathe and speak comfortably. Our team also guides you through flexible payment options along with convenient online and card transactions, ensuring your protection is both effective and easily accessible.
</p>
    </div>

  </div>
</section>




     <section className="mg-split-section bg-cream">
  <div className="container mg-split-container">

    <div className="mg-split-content pr-large fade-up">
      <h2 className="fade-up">The dual benefits of our guards</h2>

      <p className="mg-intro fade-up delay-1">
        Our custom mouthguards are designed to do more than just protect —
        they enhance comfort, prevent long-term damage, and support overall
        oral health. Whether you're active in sports or dealing with teeth
        grinding, we provide solutions tailored specifically to your needs.
      </p>

      <ul className="mg-bullet-list">
        <li className="fade-up delay-2">
          <strong>Sports Guards:</strong> Absorb shock and protect teeth, gums,
          and jaw from impact during high-contact activities, reducing the risk
          of fractures and injuries.
        </li>

        <li className="fade-up delay-3">
          <strong>Night Guards:</strong> Minimize the effects of teeth grinding
          (bruxism), preventing enamel wear, headaches, and jaw discomfort while
          improving sleep quality.
        </li>

        <li className="fade-up delay-4">
          <strong>Custom Fit:</strong> Precisely crafted using advanced dental
          impressions to ensure a secure, comfortable fit that allows easy
          breathing and speaking.
        </li>

        <li className="fade-up delay-5">
          <strong>Durable Materials:</strong> Made from high-quality,
          long-lasting materials that resist wear and maintain performance over time.
        </li>

        <li className="fade-up delay-6">
          <strong>Jaw Support:</strong> Helps reduce strain on the jaw joint
          (TMJ), easing tension and preventing long-term complications.
        </li>
      </ul>
    </div>

    <div className="mg-split-image animate animate-slide-right">
      <img
        src="/comparing-6-types-of-mouthguards.jpg"
        alt="Custom Mouthguard fitting"
        className="shaped-image"
      />
    </div>

  </div>
</section>

      <FAQ faqsData={guardFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Mouthguards;
