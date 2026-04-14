import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./PediatricDentistry.css";

const pediatricFaqs = [
  {
    question: "When should I schedule my child's first visit?",
    answer: "The American Academy of Pediatric Dentistry recommends bringing your child in within six months of their first tooth erupting, or no later than their first birthday."
  },
  {
    question: "Are baby teeth really that important?",
    answer: "Yes! Primary teeth help children chew, speak clearly, and maintain proper spacing for permanent teeth, guiding them into correct alignment."
  },
  {
    question: "Can parents stay in the room during the appointment?",
    answer: "Absolutely. We encourage parents to remain in the room for regular checkups to provide comfort and reinforce positive dental habits."
  },
  {
    question: "How often should my child visit the dentist?",
    answer: "Children should visit the dentist every six months for regular checkups and cleanings, unless your dentist recommends more frequent visits."
  },
  {
    question: "What if my child is afraid of the dentist?",
    answer: "Our team is specially trained to create a fun, friendly, and stress-free environment. We use gentle techniques and positive reinforcement to help children feel safe and comfortable."
  },
  {
    question: "How can I prevent cavities in my child?",
    answer: "Encourage proper brushing twice a day, limit sugary snacks and drinks, and ensure regular dental visits. Fluoride treatments and sealants also provide added protection."
  },
  {
    question: "What are dental sealants?",
    answer: "Sealants are thin protective coatings applied to the chewing surfaces of back teeth to prevent cavities by keeping out food and bacteria."
  },
  {
    question: "Is thumb-sucking harmful?",
    answer: "Thumb-sucking is normal in early childhood, but prolonged habits can affect tooth alignment and jaw development. We can guide you on when and how to gently stop the habit."
  },
  {
    question: "Do children need fluoride treatments?",
    answer: "Yes, fluoride strengthens enamel and helps prevent cavities. Professional fluoride treatments provide extra protection, especially for children at higher risk of decay."
  },
  {
    question: "What should I do if my child has a dental emergency?",
    answer: "Contact us immediately. Whether it’s a knocked-out tooth, pain, or injury, early care can prevent complications and protect your child’s smile."
  }
];

const PediatricDentistry = () => {
useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Pediatric Dentistry | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up elements (titles, text)
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // general animations (cards, images, sections)
          if (entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate-show");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // observe all animated elements
  const elements = document.querySelectorAll(".fade-up, .animate");
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="ped-wrapper">
      <Header />

      <section className="ped-hero">
        <div className="ped-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container ped-hero-content">
          <h1 className="fade-up">Pediatric Dentistry</h1>
          <p className="ped-hero-subtitle fade-up delay-1">Building positive habits from day one</p>
          <div className="ped-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Book Appointment</Link>
          </div>
        </div>
      </section>

      <section className="ped-centered-text">
        <div className="container ped-ct-container">
          <h2>Gentle care for your little ones</h2>
          <p>
            A child's early experiences at the dental office dictate their attitude toward oral health for the rest of their lives. We go above and beyond to ensure our pediatric visits are entirely fun, educational, and free of fear.
          </p>
          <p>
            We take a highly preventative approach, focusing fiercely on stopping early childhood cavities through education, sealants, and gentle fluoride varnishes.
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
  Establishing good oral health habits early is one of the most important investments in your child’s long-term well-being. Pediatric dentistry focuses on gentle, preventive care designed specifically for growing smiles. From routine check-ups and cleanings to early cavity prevention and guidance on brushing habits, we ensure your child feels safe, comfortable, and confident at every visit. 

  Our friendly team creates a positive dental experience while helping parents understand treatment options. We also offer flexible payment options along with convenient online and card transactions, making quality dental care affordable and stress-free for your child.
</p>
    </div>

  </div>
</section>


     <section className="ped-split-section bg-cream">
  <div className="container ped-split-container">

    <div className="ped-split-content pr-large fade-up">
      <h2 className="fade-up">The importance of early visits</h2>

      <ul className="ped-bullet-list">

        <li className="fade-up delay-1">
          Helps children feel comfortable and build trust with the dentist from an early age
        </li>

        <li className="fade-up delay-2">
          Detects habits like thumb-sucking or tongue thrusting before they affect tooth alignment
        </li>

        <li className="fade-up delay-3">
          Provides personalized diet and oral hygiene guidance for parents to support healthy development
        </li>

        <li className="fade-up delay-4">
          Protects young teeth with preventive treatments like fluoride applications and dental sealants
        </li>

        <li className="fade-up delay-5">
          Monitors jaw growth and tooth eruption to identify potential orthodontic concerns early
        </li>

        <li className="fade-up delay-6">
          Prevents cavities and reduces the need for complex treatments later in life
        </li>

      </ul>
    </div>

    <div className="ped-split-image animate animate-slide-right">
      <img
        src="/Kids-Dentistry.png"
        alt="Happy child at dentist"
        className="shaped-image"
      />
    </div>

  </div>
</section>

      <FAQ faqsData={pediatricFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default PediatricDentistry;
