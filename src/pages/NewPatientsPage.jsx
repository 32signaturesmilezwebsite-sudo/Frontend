import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import { 
  Play, 
  Check,
  Sparkles,
  Eye,
  MessageCircle,
  Star,
  Home,
  Armchair
} from 'lucide-react';
import './NewPatientsPage.css';

const NewPatientsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  /* ===== SCROLL ANIMATION LOGIC ===== */
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="new-patients-wrapper">
      <Header />
      
      <main>

        {/* 1. HERO SECTION */}
        <section className="np-hero">
          <div className="np-hero-bg" style={{ backgroundImage: `url('/istockphoto-510081750-612x612.jpg')` }}></div>
          <div className="container np-hero-content animate fade-down">
            <h1>New Patients Welcome</h1>
            <p>Your new favorite place to smile</p>
            <div className="np-btn-row">
              <Link to="/contact" className="rough-btn rough-btn-primary">
                <span className="btn-text">Request Appointment</span>
              </Link>
              <a href="tel:+919077770586" className="rough-btn rough-btn-dark">
                <span className="btn-text">Call: +91 90777 70586</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. A WHOLE NEW DENTAL EXPERIENCE */}
        <section className="np-experience split-section">
          <div className="container split-container">
            <div className="split-text left-padding animate fade-left">
              <h2>A Whole New Dental Experience</h2>
              <p>
                Why settle for ordinary when you can have AMAZING? 32 Signature Smilez is built on the foundation of genuine care, personalized attention, and a true commitment to your comfort.
              </p>
              <p>
                From our friendly team that treats you like family to our state-of-the-art technology that ensures top-notch care, we go above and beyond to make your visit truly exceptional. Visit us and experience dental care like never before!
              </p>
            </div>
            <div className="split-image right-image video-thumbnail animate fade-right">
              <img src="/326558262_896809911467593_2475934262789262714_n.jpg" alt="Patient Experience" className="shaped-image fade-in-anim" />
              <div className="video-play-overlay">
                <Play fill="white" color="white" size={40} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. YOUR FIRST VISIT */}
        <section className="np-first-visit">
  <div className="container np-first-visit-content">
    
    <h2>Your First Visit</h2>

    <p className="visit-desc">
      Your first appointment will take 60–90 minutes. During this time, we will give you our undivided attention to understand your needs and address your concerns. Get ready for:
    </p>

    <div className="np-hexagon-grid">

      <div className="np-hex-card" style={{ animationDelay: "0.1s" }}>
        <div className="hex-icon-vector">
          <Sparkles size={60} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Gentle Dental Cleaning</h3>
      </div>

      <div className="np-hex-card" style={{ animationDelay: "0.2s" }}>
        <div className="hex-icon-vector">
          <Eye size={60} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Full-Mouth Examination</h3>
      </div>

      <div className="np-hex-card" style={{ animationDelay: "0.3s" }}>
        <div className="hex-icon-vector">
          <MessageCircle size={60} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Answers To Your Questions</h3>
      </div>

      <div className="np-hex-card" style={{ animationDelay: "0.4s" }}>
        <div className="hex-icon-vector">
          <Star size={60} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Personalized Recommendations</h3>
      </div>

      <div className="np-hex-card" style={{ animationDelay: "0.5s" }}>
        <div className="hex-icon-vector">
          <Home size={60} strokeWidth={1.5} color="#c57b43" />
        </div>
        <h3>Cozy, Welcoming Environment</h3>
      </div>

    </div>

    <div className="np-visit-btn">
      <Link to="/contact" className="rough-btn rough-btn-primary">
        <span className="btn-text">Request an Appointment</span>
      </Link>
    </div>

  </div>
</section>

        {/* 4. WHAT TO BRING */}
        <section className="np-what-to-bring split-section reverse-on-mobile section-bg-cream">
          <div className="container split-container gap-theme align-center">
            <div className="split-image left-image animate fade-left">
              <img src="/368558374_222782190749889_4640931906089376175_n.jpg" alt="Dentist and Patient" className="shaped-image fade-in-anim" />
            </div>
            <div className="split-text right-padding animate fade-right">
              <h2>What to Bring?</h2>
              <p>
                We're all about making your visit smooth and hassle-free. To ensure we maximize your appointment, please remember to bring:
              </p>
              <ul className="np-checklist">
                <li>
                  <div className="check-icon-wrapper"><Check strokeWidth={1.5} size={16} /></div>
                  Valid ID proof (if required)
                </li>
                <li>
                  <div className="check-icon-wrapper"><Check strokeWidth={1.5} size={16} /></div>
                  Medical and dental history
                </li>
                <li>
                  <div className="check-icon-wrapper"><Check strokeWidth={1.5} size={16} /></div>
                  Questions and concerns
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. EMERGENCY */}
        <section className="np-emergency split-section section-bg-cream">
          <div className="container split-container gap-theme align-center">
            <div className="split-text left-padding animate fade-left">
              <h2>Your Heroes In A Dental Emergency</h2>
              <p>
                Chipped, cracked, broken tooth? If you're experiencing a dental emergency, we have your back! <a href="tel:+919077770586" className="bold-orange-link">Call us at +91 90777 70586</a>.
              </p>
            </div>
            <div className="split-image right-image animate fade-right">
              <img src="/17191508_612685628922363_4529340329591677663_n.jpg" alt="Dental Emergency Treatment" className="shaped-image fade-in-anim" />
            </div>
          </div>
        </section>

        {/* 6. ONE-OF-A-KIND EXPERIENCE */}
<section className="np-ook-experience section-bg-white">
  <div className="container np-ook-content">
    <h2 className="animate fade-up">A One-Of-A-Kind Dental Experience</h2>
    <div className="np-ook-grid">
      
      <div className="np-ook-card animate zoom-in" style={{ transitionDelay: '0.1s' }}>
        <div className="hex-icon-vector large-icon">
          <Armchair size={60} strokeWidth={1.2} color="#c57b43" />
        </div>
        <h3>Ultimate Comfort</h3>
        <p>
          Sit back and relax. Our gentle touch, pain-free injections, and soothing nitrous oxide will help you unwind during your visit.
        </p>
      </div>

      <div className="np-ook-card animate zoom-in" style={{ transitionDelay: '0.2s' }}>
        <div className="hex-icon-vector large-icon">
          <Home size={60} strokeWidth={1.2} color="#c57b43" />
        </div>
        <h3>Just Like Home</h3>
        <p>
          Indulge in a dental experience like no other. Cozy pillows, great music, comfy chairs, and a waiting room equipped with refreshing beverages will make you feel at home.
        </p>
      </div>

      <div className="np-ook-card animate zoom-in" style={{ transitionDelay: '0.3s' }}>
        <div className="hex-icon-vector large-icon">
          <Sparkles size={60} strokeWidth={1.2} color="#c57b43" />
        </div>
        <h3>Smiles That Stand the Test of Time</h3>
        <p>
          Our strong commitment to exceptional dental care and 3-year warranty ensures that your teeth will stay healthy and bright for years to come.
        </p>
      </div>

    </div>
  </div>
</section>
        {/* 7. FAQ */}
<section className="np-orange-faq">
  <div className="container np-faq-container">
    <h2 className="animate fade-up">Questions? We've Got Answers!</h2>
    
    <div className="np-faq-list">
      
      {[
        {
          q: "How much will my first appointment cost?",
          a: "We believe in transparent pricing. During your visit, we will provide you with a clear breakdown of any treatments so there are never any surprises."
        },
        {
          q: "I have a dental emergency. What should I do?",
          a: "Call us immediately. We prioritize emergency cases and will help relieve your pain quickly and effectively."
        },
        {
          q: "Do you offer flexible payment options?",
a: "Yes! We provide flexible payment options along with convenient online and card transactions to make your treatment smooth, affordable, and stress-free. Feel free to contact us for more details."
        },
        {
          q: "What payment options are available?",
          a: "We accept cash, cards, and flexible payment plans to make your treatment affordable and stress-free."
        },
        {
          q: "How often should I visit the dentist?",
          a: "We recommend visiting every 6 months for regular checkups and cleanings to maintain optimal oral health."
        }
      ].map((faq, index) => (
        
        <div 
          key={index} 
          className={`np-faq-item ${openFaq === index ? 'open' : ''}`}
        >
          
          <button 
            className="np-faq-question" 
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.q}</span>
            <span className={`np-faq-icon ${openFaq === index ? 'open' : ''}`}>
              +
            </span>
          </button>

          <div className="np-faq-answer">
            <p>{faq.a}</p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

        <Testimonials />
        <ContactSection />
        
      </main>

      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default NewPatientsPage;