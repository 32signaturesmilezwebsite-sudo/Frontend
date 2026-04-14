import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import './BadBreath.css';
import { Armchair, HeartHandshake, Sparkles } from "lucide-react";

const badBreathFaqs = [
  {
    question: "What causes bad breath?",
    answer: "Bad breath, or halitosis, can be caused by poor oral hygiene, dry mouth, certain foods, tobacco products, and underlying dental or medical conditions. Plaque build-up and bacteria on the tongue are among the most common culprits."
  },
  {
    question: "Can professional dental care help with bad breath?",
    answer: "Absolutely. Professional cleanings remove hardened plaque and tartar that trap odor-causing bacteria. We can also identify and treat gum disease or tooth decay, which are frequent sources of persistent bad breath."
  },
  {
    question: "How can I prevent bad breath?",
    answer: "Brush twice daily, floss daily, and gently brush your tongue. Drink plenty of water to prevent dry mouth, and visit your dentist regularly for professional cleanings and check-ups to keep bacteria at bay."
  },
  {
    question: "Will mouthwash help with bad breath?",
    answer: "Mouthwash can temporarily mask bad breath and kill some bacteria, but it doesn't cure the underlying cause. If you have chronic bad breath, professional treatment is necessary to address the root issue."
  },
  {
    question: "Is bad breath a sign of a serious dental issue?",
    answer: "Yes, persistent bad breath that doesn't improve with brushing and flossing is often an early warning sign of gum disease (periodontitis) or severe tooth decay, which require prompt professional care."
  }
];

const BadBreath = () => {

  // Existing (keep this)
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Bad Breath Treatment | 32 Signature Smilez';
  }, []);

  // 🔥 ADD THIS (scroll animation observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bb-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
<section className="bb-hero">
  <div 
    className="bb-hero-bg"
    style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
  ></div>

  <div className="container bb-hero-content">
    <h1 className="animate animate-fade-up">
      32 Signature Smilez Bad Breath Treatment
    </h1>

    <p className="bb-hero-subtitle animate animate-fade-up delay-1">
      Freshen your breath with expert care
    </p>

    <div className="bb-hero-buttons animate animate-fade-up delay-2">
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
      <section className="bb-centered-text">
  <div className="container bb-ct-container">

    <h2 className="animate animate-fade-up">
      Say goodbye to bad breath
    </h2>

    <p className="animate animate-fade-up delay-1">
      Are you struggling with persistent bad breath? At 32 Signature Smilez, we understand how uncomfortable and frustrating it can be. Our expert dentist is here to help you find the cause and achieve long-lasting freshness.
    </p>

    <p className="animate animate-fade-up delay-2">
      With professional bad breath treatments, you can enjoy fresh, confident smiles. Call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      to schedule an appointment.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
     <section className="bb-dark-split">
  <div
    className="bb-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>
  <div className="bb-dark-overlay"></div>

  <div className="container bb-dark-container">

    <div className="bb-ds-image animate animate-slide-left">
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

    <div className="bb-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>
          <p>
        We believe your oral health shouldn't come with financial stress.
        Our clinic supports all major payment methods including online and
        card transactions for your convenience. We are empanelled with ONGC,
        making our services accessible and affordable for patients across Tripura.
      </p>
    </div>

  </div>
</section>

      {/* 4. HOW WE CAN HELP (Split Normal) */}
   <section className="bb-split-section bg-cream">
  <div className="container bb-split-container">

    <div className="bb-split-content pr-large animate animate-slide-left">
      <h2 className="animate animate-fade-up">
        How we can help you get rid of bad breath
      </h2>

      <p className="animate animate-fade-up delay-1">
        Our comprehensive bad breath treatments offer expert solutions to combat halitosis and improve your oral health.
      </p>

      <ul className="bb-bullet-list animate animate-fade-up delay-2">
        <li>Identify underlying causes of bad breath</li>
        <li>Provide professional cleanings to eliminate bacteria</li>
        <li>Offer personalized treatment plans</li>
        <li>Educate you on oral hygiene practices</li>
        <li>Use advanced techniques for lasting freshness</li>
      </ul>

      <p className="bb-cta-text animate animate-fade-up delay-3">
        Ready to start? Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        or explore what you need to know before your first appointment.
      </p>

      <Link
        to="/new-patients"
        className="btn-solid-orange bb-split-btn animate animate-fade-up delay-4"
      >
        Learn More
      </Link>
    </div>

    <div className="bb-split-image animate animate-slide-right">
      <img src="/1165c70791c25f3bd1b8d6be00b3acad.jpg" alt="Dental Patient Process" />
    </div>

  </div>
</section>

      {/* 5. PROCESS AT 32 SIGNATURE SMILEZ (Split Reverse) */}
     <section className="bb-split-section bg-white">
  <div className="container bb-split-container reverse-mobile">

    <div className="bb-split-image pr-large animate animate-slide-left">
      <img src="/Teeth-Scaling-Polishing.png" alt="Dentist Consultation" />
    </div>

    <div className="bb-split-content animate animate-slide-right">
      <h2 className="animate animate-fade-up">
        Bad breath treatment at 32 Signature Smilez
      </h2>

      <p className="animate animate-fade-up delay-1">
        When you visit us, we'll take the time to understand your concerns and ensure your comfort.
      </p>

      <h3 className="bb-sub-heading animate animate-fade-up delay-2">
        Our bad breath treatment process
      </h3>

      <ul className="bb-bullet-list animate animate-fade-up delay-3">
        <li>Comprehensive evaluation to determine the root cause</li>
        <li>Personalized treatment plan tailored to your needs</li>
        <li><strong>Professional cleanings</strong> and guidance on preventive care</li>
        <li>Follow-up support to maintain fresh breath</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. REFRESHING DENTAL CARE (HEXAGONS) */}
      <section className="bb-redefining bg-cream">
  <div className="container">

    <h2 className="animate animate-fade-up">
      Comfortable, refreshing dental care
    </h2>

    <div className="bb-ook-grid">

      <div className="bb-ook-card animate animate-fade-up delay-1">
        <div className="hex-icon">
          <Armchair size={42} strokeWidth={1.5} />
        </div>
        <h3>Complete Comfort</h3>
        <p>
          Experience stress-free dental visits with gentle care,
          modern techniques, and a relaxing environment.
        </p>
      </div>

      <div className="bb-ook-card animate animate-fade-up delay-2">
        <div className="hex-icon">
          <HeartHandshake size={42} strokeWidth={1.5} />
        </div>
        <h3>Tailored care for every smile</h3>
        <p>
          Every treatment is customized to your needs,
          ensuring personalized attention and better results.
        </p>
      </div>

      <div className="bb-ook-card animate animate-fade-up delay-3">
        <div className="hex-icon">
          <Sparkles size={42} strokeWidth={1.5} />
        </div>
        <h3>Cutting-edge whitening technology</h3>
        <p>
          Achieve brighter smiles with advanced whitening solutions
          designed for safe and long-lasting results.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* 7. FAQ SECTION */}
      <FAQ faqsData={badBreathFaqs} customTitle="Questions? We've Got Answers!" />

      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default BadBreath;
