import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./Veneers.css";
import { Heart, Sofa, Sparkles } from "lucide-react";


const veneersFaqs = [
  {
    question: "Are porcelain veneers permanent?",
    answer: "Yes, traditional veneers are considered a permanent, irreversible procedure because a very thin layer of your natural enamel must be removed to create a flush fit. However, the veneer shells themselves typically need replacing every 10 to 15 years."
  },
  {
    question: "Can veneers stain like natural teeth?",
    answer: "No! One of the fantastic benefits of porcelain veneers is that they are highly stain-resistant. Unlike natural enamel, they won't absorb dark pigments from coffee, red wine, or tobacco, keeping your smile brilliantly white."
  },
  {
    question: "How many veneers do I need?",
    answer: "This is completely up to your cosmetic goals. Some patients only need one or two to camouflage a broken tooth, while others opt for 6 to 8 across their upper arch to completely redefine the visible \"smile zone\"."
  },
  {
    question: "Will they look like fake teeth?",
    answer: "Absolutely not. High-quality porcelain accurately mimics the unique light-reflecting properties of real teeth. Our expert dental lab meticulously customizes the size, shade, and subtle ridges of the veneers so they look incredibly natural."
  }
];

const Veneers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Porcelain Veneers | 32 Signature Smilez";

    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
            observerRef.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vn-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="vn-hero">
        <div
          className="vn-hero-bg zoom-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container vn-hero-content">
          <h1 className="animate fade-up delay-1">
            Custom Porcelain Veneers
          </h1>

          <p className="vn-hero-subtitle animate fade-up delay-2">
            Instantly transform and redefine your confidence
          </p>

          <div className="vn-hero-buttons animate fade-up delay-3">
            <Link to="/contact" className="btn-solid-orange btn-animate">
              Request Appointment
            </Link>

            <a href="tel:+919077770586" className="btn-outline-dark btn-animate">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TYPOGRAPHY BLOCK */}
      <section className="vn-centered-text">
  <div className="container vn-ct-container">

    <h2 className="animate fade-up delay-1">
      Your Hollywood smile is closer than you think!
    </h2>

    <p className="animate fade-up delay-2">
      Are severe chips, deeply embedded stains, or small gaps hiding your true smile? Porcelain veneers offer the ultimate cosmetic transformation. These ultra-thin, custom-made ceramic shells are durably bonded strictly to the front surfaces of your teeth to completely revitalize their appearance.
    </p>

    <p className="animate fade-up delay-3">
      Veneers allow you to essentially mask years of wear, tear, or genetic irregularities, giving you the dazzling, symmetrical smile you've always dreamed of. Let's sculpt your perfect aesthetics today—call{" "}
      <a href="tel:+919077770586" className="txt-orange">
        +91 90777 70586
      </a>{" "}
      to schedule your smile design consultation.
    </p>

  </div>
</section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="vn-dark-split">

  <div
    className="vn-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="vn-dark-overlay"></div>

  <div className="container vn-dark-container">

    {/* IMAGE SIDE */}
    <div className="vn-ds-image">

      <div className="frame-outer animate animate-slide-left delay-2">
        <div className="frame-inner">
          <img
            src="/Deep Datta.PNG"
            alt="Dr. Deep Datta"
            className="vn-portrait"
          />
        </div>
      </div>

    </div>

    {/* TEXT SIDE */}
    <div className="vn-ds-content">

      <h2 className="animate fade-up delay-1">
        Save and Smile
      </h2>

      <p className="animate fade-up delay-2">
        Investing in a flawless smile is an investment in your confidence and daily joy! At 32 Signature Smilez, we want premium cosmetic procedures like veneers to be within your reach. Ask our friendly staff about phased financial planning and available payment programs.
      </p>

    </div>

  </div>
</section>

      {/* 4. WHY CHOOSE VENEERS */}
<section className="vn-split-section bg-cream">
  <div className="container vn-split-container">

    <div className="vn-split-content pr-large">

      <h2 className="animate fade-up delay-1">
        Why choose porcelain veneers?
      </h2>

      <p className="vn-bold-lead animate fade-up delay-2">
        Veneers are the premier choice for patients seeking a comprehensive cosmetic makeover.
      </p>

      <ul className="vn-bullet-list">
        <li className="animate fade-up delay-3">Completely conceals intrinsic, un-bleachable stains</li>
        <li className="animate fade-up delay-4">Instantly fixes chipped, worn down, or fractured enamel</li>
        <li className="animate fade-up delay-5">Effortlessly closes distinct gaps between your front teeth</li>
        <li className="animate fade-up delay-3">Corrects mildly crooked or uneven dentition structurally</li>
        <li className="animate fade-up delay-4">Produces an incredibly natural, light-reflecting polish</li>
      </ul>

      <p className="vn-cta-text animate fade-up delay-5">
        We customize the exact shade of white you want. Call{" "}
        <a href="tel:+919077770586" className="txt-orange">
          +91 90777 70586
        </a>{" "}
        to secure a personalized consultation now.
      </p>

      <Link to="/new-patients" className="btn-solid-orange vn-split-btn animate fade-up delay-5">
        Learn More
      </Link>

    </div>

    <div className="vn-split-image animate animate-slide-right delay-2">
      <img
        src="/Gemini_Generated_Image_3ri72z3ri72z3ri7.png"
        alt="Happy Patient with Veneers"
        className="shaped-image img-zoom"
      />
    </div>

  </div>
</section>


{/* 5. PROCESS */}
<section className="vn-split-section bg-white">
  <div className="container vn-split-container reverse-mobile">

    <div className="vn-split-image pr-large animate animate-slide-left delay-2">
      <img
        src="/veneers-before-and-after.jpg"
        alt="Dentist Reviewing Smile Results"
        className="shaped-image img-zoom"
      />
    </div>

    <div className="vn-split-content">

      <h2 className="animate fade-up delay-1">
        Step-by-step to a stunning smile
      </h2>

      <p className="vn-bold-lead mb-20 animate fade-up delay-2">
        We don't just glue on teeth—we artistically engineer your dream smile over several visits:
      </p>

      <ul className="vn-bullet-list">
        <li className="animate fade-up delay-3">
          <strong>Smile Design:</strong> We discuss your overall goals, choose your perfect shade, and map the visual blueprint of your new smile.
        </li>
        <li className="animate fade-up delay-4">
          <strong>Enamel Preparation:</strong> A microscopic layer of enamel (about 0.5mm) is removed so the veneers sit perfectly flush against the gum line.
        </li>
        <li className="animate fade-up delay-5">
          <strong>Try-In Phase:</strong> Once our artisan lab finishes crafting the porcelain, we temporarily set them and evaluate the fit.
        </li>
        <li className="animate fade-up delay-3">
          <strong>Final Bonding:</strong> After making any final aesthetic tweaks, the custom veneers are permanently bonded directly to your teeth!
        </li>
      </ul>

    </div>

  </div>
</section>
      {/* 6. FEATURES (Hexagons) */}
      <section className="vn-redefining bg-white">
  <div className="container">
    
    <h2 className="animate fade-up delay-1">
      Personalized Cosmetic Solutions
    </h2>

    <div className="vn-ook-grid">

      <div className="vn-ook-card animate fade-up delay-2">
        <div className="hex-icon-vector">
          <Heart size={48} strokeWidth={1.5} />
        </div>
        <h3>Tailored to You</h3>
      </div>

      <div className="vn-ook-card animate fade-up delay-3">
        <div className="hex-icon-vector">
          <Sofa size={48} strokeWidth={1.5} />
        </div>
        <h3>Relaxing Visits</h3>
      </div>

      <div className="vn-ook-card animate fade-up delay-4">
        <div className="hex-icon-vector">
          <Sparkles size={48} strokeWidth={1.5} />
        </div>
        <h3>Stain Resistant</h3>
      </div>

    </div>
  </div>
</section>

      {/* 7. FAQ */}
      <FAQ faqsData={veneersFaqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default Veneers;
