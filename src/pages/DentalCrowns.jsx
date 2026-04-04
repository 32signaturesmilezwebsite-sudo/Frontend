import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./DentalCrowns.css";
import { Heart, Bed, ShieldCheck } from "lucide-react";

const crownsFaqs = [
  {
    question: "What are dental crowns made of?",
    answer: "Dental crowns can be crafted from various materials including porcelain, ceramic, zirconia, or metal alloys. At 32 Signature Smilez, we mostly recommend porcelain or zirconia crowns because they perfectly mimic the natural translucency and color of your real teeth."
  },
  {
    question: "Does getting a crown hurt?",
    answer: "Not at all. We use local anesthesia to completely numb the area during the preparation process. After the procedure, you might experience mild sensitivity, but this subsides quickly within a few days."
  },
  {
    question: "How long do dental crowns last?",
    answer: "A high-quality dental crown typically lasts anywhere from 10 to 15 years. With excellent oral hygiene, avoiding hard/sticky foods, and attending regular dental checkups, your crown can safely last even longer!"
  },
  {
    question: "How do I take care of my new crown?",
    answer: "Treat your crown just like your natural teeth. Brush twice a day with non-abrasive toothpaste, floss daily (sliding the floss out rather than snapping it up), and wear a nightguard if you have a habit of clenching or grinding your teeth."
  }
];

const DentalCrowns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Crowns | 32 Signature Smilez";

    // Scroll Animation — handles both .fade-up and .animate elements
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate')) {
              entry.target.classList.add('animate-show');
            } else {
              entry.target.classList.add('active');
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-up, .animate').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="dc-wrapper">
      <Header />

      {/* HERO SECTION */}
      <section className="dc-hero">
        <div
          className="dc-hero-bg"
          style={{
            backgroundImage: "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container dc-hero-content">
          <h1 className="fade-up">Premium Dental Crowns</h1>

          <p className="dc-hero-subtitle fade-up delay-1">
            Precision-crafted protection for a stronger, flawless smile
          </p>

          <div className="dc-hero-buttons fade-up delay-2">
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
      <section className="dc-centered-text">
  <div className="container dc-ct-container">
    
    <h2 className="fade-up">Restore the strength of your smile</h2>

    <p className="fade-up delay-1">
      When a tooth becomes cracked, severely decayed, or weakened over time, a dental crown provides an immediate, long-lasting solution. At 32 Signature Smilez, our precision-milled dental crowns act like protective 'caps' that completely encase your damaged tooth.
    </p>

    <p className="fade-up delay-2">
      Not only do our crowns restore the structural integrity and chewing function of your tooth, but they are also artistically matched to the exact color of your surrounding teeth for a stunning, natural blend. Call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      today!
    </p>

  </div>
</section>
      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="cd-dark-split">
  <div
    className="cd-dark-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="cd-dark-overlay"></div>

  <div className="container cd-dark-container">

    {/* IMAGE SIDE */}
    <div className="cd-ds-image animate animate-slide-left">
      
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

    {/* TEXT SIDE — no nested .animate; parent handles opacity */}
    <div className="cd-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
        Protecting a vulnerable tooth shouldn't cause financial stress. At 32 Signature Smilez, we ensure that our durable, high-quality crowns remain accessible. We work dynamically with a variety of insurance carriers and proudly offer flexible payment financing.
      </p>
    </div>

  </div>
</section>

      {/* 4. WHY CHOOSE CROWNS (Split Normal) */}
      <section className="dc-split-section bg-cream">
  <div className="container dc-split-container">

    <div className="dc-split-content pr-large animate animate-slide-left">
      <h2 className="animate">Why choose a dental crown?</h2>

      <p className="dc-bold-lead animate delay-1">
        Our permanent crowns offer aesthetic resilience when a standard filling just isn't enough.
      </p>

      <ul className="dc-bullet-list">
        <li className="animate delay-1">Mends and protects deeply cracked or fractured teeth</li>
        <li className="animate delay-2">Anchors a dental bridge securely in place</li>
        <li className="animate delay-3">Strengthens a tooth following root canal therapy</li>
        <li className="animate delay-4">Cosmetically covers severely discolored or misshapen teeth</li>
        <li className="animate delay-5">Acts as the natural-looking finish for a dental implant</li>
      </ul>

      <p className="dc-cta-text animate delay-3">
        Save your damaged tooth before it's too late. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to book your professional consultation.
      </p>

      <Link to="/new-patients" className="btn-solid-orange dc-split-btn animate delay-4">
        Learn More
      </Link>
    </div>

    <div className="dc-split-image animate animate-slide-right">
      <img
        src="/Gemini_Generated_Image_3goe3c3goe3c3goe.png"
        alt="Dental Crown Restorative Patient"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>

      {/* 5. PROCESS (Split Reverse) */}
      <section className="dc-split-section bg-white">
  <div className="container dc-split-container reverse-mobile">

    <div className="dc-split-image pr-large animate animate-slide-left">
      <img
        src="/10923-dental-crowns.jpg"
        alt="Dentist Consultation"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="dc-split-content animate animate-slide-right">
      <h2 className="animate">Step-by-step crown placement</h2>

      <p className="dc-bold-lead mb-20 animate delay-1">
        Rebuilding your smile is a fast and comfortable two-visit process:
      </p>

      <ul className="dc-bullet-list">
        <li className="animate delay-1"><strong>Evaluation:</strong> X-rays and assessment to ensure the roots are healthy.</li>
        <li className="animate delay-2"><strong>Preparation:</strong> The tooth is gently reshaped so the crown can fit flawlessly over it.</li>
        <li className="animate delay-3"><strong>Impressions:</strong> Highly accurate molds are made for the dental lab to sculpt your custom crown.</li>
        <li className="animate delay-4"><strong>Temporary Crown:</strong> We protect your tooth with a temporary cap while you wait.</li>
        <li className="animate delay-5"><strong>Final Placement:</strong> Once ready, the temporary cap is removed, and your beautiful permanent crown is cemented securely in place.</li>
      </ul>
    </div>

  </div>
</section>

      {/* 6. FEATURES (Hexagons) */}
      <section className="dc-redefining bg-white">
  <div className="container">

    <h2 className="animate">Personalized Restorative Care</h2>

    <div className="dc-ook-grid">

      {/* CARD 1 */}
      <div className="dc-ook-card animate delay-1">
        <div className="hex-icon-vector">
          <Heart size={48} strokeWidth={1.5} />
        </div>
        <h3>Tailored to You</h3>
      </div>

      {/* CARD 2 */}
      <div className="dc-ook-card animate delay-2">
        <div className="hex-icon-vector">
          <Bed size={48} strokeWidth={1.5} />
        </div>
        <h3>Painless Process</h3>
      </div>

      {/* CARD 3 */}
      <div className="dc-ook-card animate delay-3">
        <div className="hex-icon-vector">
          <ShieldCheck size={48} strokeWidth={1.5} />
        </div>
        <h3>Lasting Durability</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={crownsFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default DentalCrowns;
