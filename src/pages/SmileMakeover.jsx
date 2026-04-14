import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./SmileMakeover.css";
import { Heart, Sparkles, UserCheck } from "lucide-react";

const faqs = [
  { question: "Is the procedure painful?", answer: "No, we use advanced anesthetics to ensure you are completely numb. Most patients report feeling only minor pressure." },
  { question: "How long is the recovery?", answer: "Recovery depends entirely on the specific procedure, but typically ranges from a few days to a couple of weeks for full healing." }
];

const SmileMakeover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smile Makeover | 32 Signature Smilez";

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
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sm-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="sm-hero">
        <div
          className="sm-hero-bg"
          style={{
            backgroundImage: "url('/istockphoto-510081750-612x612.jpg')",
          }}
        ></div>

        <div className="container sm-hero-content">
          <h1 className="fade-up">Professional Smile Makeover</h1>

          <p className="sm-hero-subtitle fade-up delay-1">
            Complete cosmetic transformations for a perfect smile
          </p>

          <div className="sm-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">
              Book Consultation
            </Link>

            <a href="tel:+919077770586" className="btn-outline-dark">
              Call: +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TYPOGRAPHY BLOCK */}
      <section className="sm-centered-text">
        <div className="container sm-ct-container">
          
          <h2 className="fade-up">State-of-the-art Smile Makeover</h2>

          <p className="fade-up delay-1">
            We combine advanced technology with a gentle, patient-first approach to offer you the most reliable and comfortable care possible. Your safety and comfort are our absolute highest priorities.
          </p>

          <p className="fade-up delay-2">
            Every smile is unique, which is why we meticulously design a treatment plan matched exactly to your facial structure and aesthetic goals for a stunning, natural blend. Call{" "}
            <a href="tel:+919077770586" className="txt-orange">
              +91 90777 70586
            </a>{" "}
            today!
          </p>

        </div>
      </section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="sm-dark-split">
        <div
          className="sm-dark-bg"
          style={{ backgroundImage: "url('/Background.png')" }}
        ></div>

        <div className="sm-dark-overlay"></div>

        <div className="container sm-dark-container">

          {/* IMAGE SIDE */}
          <div className="sm-ds-image animate animate-slide-left">
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
          <div className="sm-ds-content animate animate-slide-right">
            <h2>Invest in Your Smile</h2>

            <p>
              Transforming your smile shouldn't cause financial stress. At 32 Signature Smilez, we ensure that our state-of-the-art makeovers remain accessible. We offer flexible payment options along with convenient online and card transactions, making your treatment smooth and worry-free.
            </p>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE (Split Normal) */}
      <section className="sm-split-section bg-cream">
        <div className="container sm-split-container">

          <div className="sm-split-content pr-large animate animate-slide-left">
            <h2 className="animate">Why choose us for Smile Makeover?</h2>

            <p className="sm-bold-lead animate delay-1">
              Experience a comprehensive approach to achieving the smile you've always dreamed of.
            </p>

            <ul className="sm-bullet-list">
              <li className="animate delay-1">Advanced 3D digital smile planning</li>
              <li className="animate delay-2">Minimally invasive cosmetic techniques</li>
              <li className="animate delay-3">Comprehensive care throughout treatment</li>
              <li className="animate delay-4">Highly experienced aesthetic team</li>
            </ul>

            <p className="sm-cta-text animate delay-3">
              Don't wait to get the perfect smile. Call{" "}
              <a href="tel:+919077770586" className="txt-orange">
                +91 90777 70586
              </a>{" "}
              to book your professional consultation.
            </p>

            <Link to="/contact" className="btn-solid-orange sm-split-btn animate delay-4">
              Learn More
            </Link>
          </div>

          <div className="sm-split-image animate animate-slide-right">
            <img
              src="/Image_2znf3g2znf3g2znf (1).png"
              alt="Smile Makeover Consultation"
              className="shaped-image img-zoom"
            />
          </div>

        </div>
      </section>

      {/* 5. PROCESS (Split Reverse with new image) */}
      <section className="sm-split-section bg-white">
        <div className="container sm-split-container reverse-mobile">

          <div className="sm-split-image pr-large animate animate-slide-left">
            <img
              src="/d_Image_on9l58on9l58on9l.png"
              alt="Smile Makeover Procedure"
              className="shaped-image img-zoom"
            />
          </div>

          <div className="sm-split-content animate animate-slide-right">
            <h2 className="animate">Step-by-step Transformation</h2>

            <p className="sm-bold-lead mb-20 animate delay-1">
              Rebuilding your smile is a tailored and comfortable process:
            </p>

            <ul className="sm-bullet-list">
              <li className="animate delay-1"><strong>Consultation:</strong> We map out your goals and assess your dental health.</li>
              <li className="animate delay-2"><strong>Digital Design:</strong> Our tools create a precise preview model of your new smile.</li>
              <li className="animate delay-3"><strong>Preparation:</strong> Your teeth are delicately prepped for the latest cosmetic enhancements.</li>
              <li className="animate delay-4"><strong>Application:</strong> Using top-tier components like veneers, implants, or whitening to realize the design.</li>
              <li className="animate delay-5"><strong>Final Polish:</strong> The finishing touches let your gorgeous new smile shine immediately.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. FEATURES (Hexagons) */}
      <section className="sm-redefining bg-white">
        <div className="container">

          <h2 className="animate">Personalized Cosmetic Care</h2>

          <div className="sm-ook-grid">

            {/* CARD 1 */}
            <div className="sm-ook-card animate delay-1">
              <div className="hex-icon-vector">
                <Heart size={48} strokeWidth={1.5} />
              </div>
              <h3>Tailored to You</h3>
            </div>

            {/* CARD 2 */}
            <div className="sm-ook-card animate delay-2">
              <div className="hex-icon-vector">
                <Sparkles size={48} strokeWidth={1.5} />
              </div>
              <h3>Stunning Results</h3>
            </div>

            {/* CARD 3 */}
            <div className="sm-ook-card animate delay-3">
              <div className="hex-icon-vector">
                <UserCheck size={48} strokeWidth={1.5} />
              </div>
              <h3>Empowered Confidence</h3>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ faqsData={faqs} customTitle="Questions? We've Got Answers!" />

      {/* 8. FOOTER */}
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default SmileMakeover;
