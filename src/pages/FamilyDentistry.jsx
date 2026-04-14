import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./FamilyDentistry.css";

import { Users, CalendarDays, Heart } from "lucide-react";


const familyFaqs = [
  {
    question: "Do you see children and adults?",
    answer: "Absolutely! As a dedicated family dentistry practice, we are equipped to treat patients of all ages, from toddlers getting their first teeth to seniors requiring complex restorative care."
  },
  {
    question: "Can I schedule appointments for my whole family on the same day?",
    answer: "Yes, we love making dental care convenient! We frequently accommodate block scheduling so parents and children can all receive their checkups and cleanings during one trip to our office."
  },
  {
    question: "How do you handle children who are afraid of the dentist?",
    answer: "Our team is specifically trained to create a warm, fun, and completely non-threatening environment for children. We explain everything in kid-friendly terms and go at a pace they are comfortable with to build lifelong trust."
  },
  {
    question: "Do you offer orthodontic screenings for teenagers?",
    answer: "Yes! We closely monitor the alignment and development of your teenager's teeth and will confidently recommend early interventions or specific orthodontic actions like clear aligners if they become necessary."
  }
];

const FamilyDentistry = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Family Dentistry | 32 Signature Smilez";

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // fade-up elements
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }

          // general animations (cards, images, split sections)
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
    <div className="fam-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
       <section className="fam-hero">
        <div
          className="fam-hero-bg zoom-bg"
          style={{
            backgroundImage:
              "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container fam-hero-content">
          <h1 className="fade-up">Family Dentistry</h1>

          <p className="fam-hero-subtitle fade-up delay-1">
            Comprehensive, gentle care for every stage of life
          </p>

          <div className="fam-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Request Appointments
            </Link>

            <a href="tel:+919077770586" className="btn-outline-dark">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. CENTERED BLOCK */}
     <section className="fam-centered-text">
  <div className="container fam-ct-container">

    <h2 className="fade-up">
      One convenient location for your entire family
    </h2>

    <p className="fade-up delay-1">
      Running back and forth between different specialized dental offices for your children, teens, and yourself is a massive drain on your time. At 32 Signature Smilez, we eliminate the hassle by offering truly comprehensive care right here under one roof.
    </p>

    <p className="fade-up delay-2">
      From your toddler's very first 'happy visit' and fluoride treatment, to restorative crowns for adults, and comfortable denture solutions for seniors—Dr. Datta and our caring team provides customized excellence across generations. Ready to unify your family's oral care? Contact us at{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      today.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE */}
      <section className="fam-dark-split">
  <div
    className="fam-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="fam-dark-overlay"></div>

  <div className="container fam-dark-container">

    {/* IMAGE SIDE */}
    <div className="fam-ds-image animate animate-slide-left">
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

    {/* TEXT SIDE */}
    <div className="fam-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
  Managing a family budget is hard enough; affording premium dental care
  shouldn't make it harder. We offer flexible payment options along with
  convenient online and card transactions to make dental care easier for
  your entire family. Our goal is to ensure quality treatment remains
  accessible, comfortable, and stress-free for everyone.
</p>
      
    </div>

  </div>
</section>

      {/* 4. WHY CHOOSE US */}
<section className="fam-split-section bg-cream">
  <div className="container fam-split-container">

    <div className="fam-split-content pr-large animate animate-slide-right">
      <h2 className="animate">Why choose a family dentist?</h2>

      <p className="fam-bold-lead animate delay-1">
        Building a long-term relationship with our practice pays massive dividends for your health.
      </p>

      <ul className="fam-bullet-list">
        <li className="animate delay-1">Tremendously convenient block-scheduling for parents and kids</li>
        <li className="animate delay-2">We hold comprehensive records of your family's genetic dental history</li>
        <li className="animate delay-3">Familiar environments drastically reduce childhood dental anxiety</li>
        <li className="animate delay-4">A massive range of preventative, cosmetic, and restorative services</li>
        <li className="animate delay-5">Continuity of care—we don't age out your children when they become adults</li>
      </ul>

      <p className="fam-cta-text animate delay-3">
        We love seeing families grow! Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to schedule your family's visit today.
      </p>

      <Link
        to="/new-patients"
        className="btn-solid-orange fam-split-btn animate delay-4"
      >
        Learn More
      </Link>
    </div>

    <div className="fam-split-image animate animate-slide-left">
      <img
        src="/Gemini_Generated_Image_106trx106trx106t.png"
        alt="Happy dental patient"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>

{/* 5. PROCESS */}
<section className="fam-split-section bg-white">
  <div className="container fam-split-container reverse-mobile">

    <div className="fam-split-image pr-large animate animate-slide-left">
      <img
        src="/family-dentist-2104.jpg"
        alt="Family friendly dental exam"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="fam-split-content animate animate-slide-right">
      <h2 className="animate">Care at every stage of development</h2>

      <p className="fam-bold-lead mb-20 animate delay-1">
        We adapt our approach to match the exact needs of the patient:
      </p>

      <ul className="fam-bullet-list">
        <li className="animate delay-1"><strong>Pediatric Prevention:</strong> Sealants, fluoride, and fun education.</li>
        <li className="animate delay-2"><strong>Adult Maintenance:</strong> Gum care, fillings, and smile improvement.</li>
        <li className="animate delay-3"><strong>Senior Restorative:</strong> Bridges, crowns, and implant-supported dentures.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
      <section className="fam-redefining bg-white">
  <div className="container">

    <h2 className="animate">Generational Excellence</h2>
    
    <div className="fam-ook-grid">

      {/* CARD 1 */}
      <div className="fam-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Users size={48} strokeWidth={1.5} />
        </div>
        <h3>All Ages</h3>
      </div>

      {/* CARD 2 */}
      <div className="fam-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <CalendarDays size={48} strokeWidth={1.5} />
        </div>
        <h3>Convenience</h3>
      </div>

      {/* CARD 3 */}
      <div className="fam-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <Heart size={48} strokeWidth={1.5} />
        </div>
        <h3>Compassion</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={familyFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default FamilyDentistry;
