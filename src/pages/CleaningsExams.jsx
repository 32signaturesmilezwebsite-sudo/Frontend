import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./CleaningsExams.css";
import { Heart, Shield, Sparkles } from "lucide-react";

const cleaningFaqs = [
  {
    question: "How often should I get my teeth cleaned?",
    answer: "The American Dental Association recommends a professional cleaning and exam every six months. If you have a history of periodontal (gum) disease, we may recommend visits every 3-4 months."
  },
  {
    question: "Do dental cleanings hurt?",
    answer: "Routine cleanings are generally completely painless! If you have sensitive teeth or inflamed gums, let our hygienist know. We can apply a numbing gel to ensure you remain completely comfortable."
  },
  {
    question: "Why do my gums bleed when I floss?",
    answer: "Bleeding gums are typically the first sign of gingivitis (early gum disease) caused by plaque buildup. A professional cleaning removes this plaque, allowing your gums to heal and stop bleeding."
  },
  {
    question: "Do you take X-rays at every visit?",
    answer: "Not necessarily. We usually take bitewing X-rays once a year to catch decay occurring between teeth. We only take a full mouth series (panoramic) every 3-5 years or for new patients."
  }
];

const CleaningsExams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cleanings & Exams | 32 Signature Smilez";

    // Scroll Reveal
    const elements = document.querySelectorAll('.fade-up, .animate');

    const reveal = () => {
      const trigger = window.innerHeight * 0.85;

      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add('active');
          el.classList.add('animate-show');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);


  return (
    <div className="ce-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="ce-hero">
        <div className="ce-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container ce-hero-content">
          <h1 className="fade-up">Professional Cleanings & Exams</h1>
          <p className="ce-hero-subtitle fade-up delay-1">The foundation of a lifetime of healthy smiles</p>
          <div className="ce-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Request Appointment
            </Link>
            <a href="tel:+919077770586" className="btn-outline-dark">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. CENTERED BLOCK */}
      <section className="ce-centered-text">
        <div className="container ce-ct-container">
          <h2>Preventative care you can count on</h2>
          <p>
            Brushing and flossing at home are absolutely critical, but your toothbrush simply cannot reach everywhere. Over time, missed plaque hardens into tartar (calculus) that only professional dental instruments can safely remove. 
          </p>
          <p>
            At 32 Signature Smilez, our bi-annual cleanings and comprehensive exams are designed to catch potential issues like cavities, gum disease, and oral cancer before they escalate into painful, expensive emergencies. Prioritize your preventative health today by calling <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a>.
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE */}
      <section className="ce-dark-split">
        <div className="ce-dark-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="ce-dark-overlay"></div>
        <div className="container ce-dark-container">
          <div className="ce-ds-image animate animate-slide-left">
             
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="ce-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
           <p>
  Did you know that regular cleanings can actually save you money? Preventative care helps avoid costly dental treatments in the future by keeping your teeth and gums healthy. We offer affordable services along with convenient online and card payment options, making it easier to prioritize your oral health. Don’t wait—invest in your smile today to prevent bigger issues tomorrow!
</p>
            
          </div>
        </div>
      </section>

      <section className="ce-split-section bg-cream">
  <div className="container ce-split-container">

    <div className="ce-split-content pr-large fade-up">
      <h2 className="fade-up">Why are regular exams vital?</h2>

      <p className="ce-bold-lead fade-up delay-1">
        Preventative dentistry is the cheapest, most effective way to keep your natural teeth for life.
      </p>

      <ul className="ce-bullet-list">
        <li className="fade-up delay-1">Stops cavities from forming or deepening</li>
        <li className="fade-up delay-2">Prevents and reverses gingivitis</li>
        <li className="fade-up delay-3">Removes tartar buildup safely</li>
        <li className="fade-up delay-4">Polishes stains for a brighter smile</li>
        <li className="fade-up delay-5">Eliminates bacteria causing bad breath</li>
      </ul>

      <p className="ce-cta-text fade-up delay-2">
        Due for a checkup? Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to book your exam immediately.
      </p>

      <Link to="/new-patients" className="btn-solid-orange ce-split-btn fade-up delay-3">
        Learn More
      </Link>
    </div>

    <div className="ce-split-image ce-split-image-gallery animate animate-slide-right">
      <div className="ce-img-stack">
        <img
          src="/r 14, 2026, 02_56_48 PM.png"
          alt="Happy Dental Patient"
          className="ce-img-top img-zoom"
        />
        <img
          src="/scaling.jpg"
          alt="Teeth Scaling"
          className="ce-img-bottom img-zoom"
        />
      </div>
    </div>

  </div>
</section>

      {/* 6. HEXAGONS SECTION */}
      <section className="ce-redefining bg-white">
  <div className="container">

    {/* TITLE */}
    <h2 className="fade-up">Preventative Focus</h2>
    
    <div className="ce-ook-grid">

      {/* Card 1 */}
      <div className="ce-ook-card animate">
        <div className="hex-icon-vector">
          <Heart size={50} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Plaque Control</h3>
      </div>

      {/* Card 2 */}
      <div className="ce-ook-card animate">
        <div className="hex-icon-vector">
          <Shield size={50} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Complete Comfort</h3>
      </div>

      {/* Card 3 */}
      <div className="ce-ook-card animate">
        <div className="hex-icon-vector">
          <Sparkles size={50} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Long-term Health</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={cleaningFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default CleaningsExams;
