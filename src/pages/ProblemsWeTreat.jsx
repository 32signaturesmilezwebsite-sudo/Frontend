import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import './ProblemsWeTreat.css';
import { Armchair, HeartHandshake, Sparkles } from 'lucide-react';


const problems = [
  {
    id: 1,
    title: 'Bleeding Gums',
    image: '/Bleeding-Gum-1.png',
    desc: 'Put an end to gum discomfort with gentle deep cleanings that heal and rejuvenate your gums, letting your smile shine healthier than ever.'
  },
  {
    id: 2,
    title: 'Cavities',
    image: '/Cavity.png',
    desc: "Say goodbye to cavities with fillings that blend so seamlessly. You'll forget they're even there!"
  },
  {
    id: 3,
    title: 'Chipped Tooth',
    image: '/Chipped Tooth.png',
    desc: 'Restore your tooth\'s natural look quickly — our repairs blend perfectly and restore full functionality.'
  },
  {
    id: 4,
    title: 'Dental Anxiety',
    image: '/Dental Anxiety.png',
    desc: 'Experience a calm, relaxing environment designed to put your fears to rest with gentle, compassionate care.'
  },
  {
    id: 5,
    title: 'Missing Tooth',
    image: '/Missing Tooth.png',
    desc: 'Complete your smile with natural-looking implants or bridges that permanently restore your confidence.'
  },
  {
    id: 6,
    title: 'Sensitive Teeth',
    image: '/Sensitive Teeth.png',
    desc: 'Find relief from sharp pains with targeted treatments that protect your enamel and soothe sensitivity instantly.'
  },
  {
    id: 7,
    title: 'Teeth Grinding',
    image: '/Teeth Grinding.png',
    desc: 'Protect your smile from wear and tear with custom night guards designed for comfortable sleep.'
  },
  {
    id: 8,
    title: 'Tooth Pain',
    image: '/Tooth Pain.png',
    desc: 'Don\'t let toothaches disrupt your day. We diagnose and treat the root cause swiftly and painlessly.'
  }
];

const ProblemsWeTreat = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Problems We Treat | 32 Signature Smilez';
  }, []);

  // 🔥 SCROLL ANIMATION OBSERVER
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
    <div className="pwt-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="pwt-hero">
        <div className="pwt-hero-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="container pwt-hero-content">
          <h1 className="animate animate-fade-up">Problems We Treat</h1>
          <p className="pwt-hero-subtitle animate animate-fade-up delay-1">
            Turn your worries into smiles
          </p>
          <div className="pwt-hero-buttons animate animate-fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Request Appointment</Link>
            <a href="tel:+919077770586" className="btn-outline-dark">Call: +91 90777 70586</a>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SECTION */}
      <section className="pwt-solutions">
        <div className="container">
          <h2 className="animate animate-fade-up">Solutions for every smile</h2>
          <div className="pwt-solutions-text animate animate-fade-up delay-1">
            <p>At 32 Signature Smilez, we're dedicated to turning your dental problems into happy smiles. Whether you're dealing with cavities or looking for ways to enhance your smile, we provide customized treatments crafted to improve your oral health efficiently and comfortably.</p>
            <p>Ready to boost your smile's health and appearance? Let's get started. Call <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a>.</p>
          </div>
        </div>
      </section>

      {/* 3. WE CAN HELP WITH... GRID */}
      <section className="pwt-grid-section">
        <div className="container">
          <h2 className="pwt-grid-title animate animate-fade-up">We can help you with...</h2>
          <div className="pwt-grid">
            {problems.map(prob => (
              <div className={`pwt-card animate animate-fade-up delay-${prob.id % 4}`} key={prob.id}>
                <div className="pwt-card-img-wrapper">
                  <img src={prob.image} alt={prob.title} className="pwt-card-img" />
                </div>
                <div className="pwt-card-content">
                  <h3>{prob.title}</h3>
                  <p>{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY BOX */}
      <section className="pwt-emergency">
  <div className="container">
    <div className="pwt-emergency-box animate animate-zoom">
      <div className="pwt-emergency-inner">
        <h2>Emergency? We’re ready to help!</h2>
        <p>
          In pain? Don’t wait. Our team is on standby to deliver swift, effective care. 
          Just call <a href="tel:+919077770586">+91 90777 70586</a>
        </p>
      </div>
    </div>
  </div>
</section>

      {/* 5. REDEFINING DENTAL VISITS (HEXAGONS) */}
<section className="pwt-redefining">
  <div className="container">
    <h2 className="animate animate-fade-up">Redefining Dental Visits</h2>
    
    <div className="pwt-ook-grid">

      <div className="pwt-ook-card animate animate-fade-up delay-1">
        <div className="hex-icon">
          <Armchair size={42} strokeWidth={1.5} />
        </div>
        <h3>Unrivaled Comfort</h3>
        <p>
          Kick back and relax — our cutting-edge pain management techniques ensure your visit is nothing short of comfortable.
        </p>
      </div>

      <div className="pwt-ook-card animate animate-fade-up delay-2">
        <div className="hex-icon">
          <HeartHandshake size={42} strokeWidth={1.5} />
        </div>
        <h3>Feel Like Family</h3>
        <p>
          From the moment you walk in, our team makes sure you're treated with warmth and genuine care.
        </p>
      </div>

      <div className="pwt-ook-card animate animate-fade-up delay-3">
        <div className="hex-icon">
          <Sparkles size={42} strokeWidth={1.5} />
        </div>
        <h3>Durable, Beautiful Results</h3>
        <p>
          Expect nothing less than excellence. Our treatments not only fix current problems but also ensure your smile stays beautiful and healthy.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* 6. WELCOME TO YOUR HAPPY PLACE */}
      <section className="pwt-split-section bg-cream">
        <div className="container pwt-split-container">
          <div className="pwt-split-image animate animate-slide-left">
            <img src="/109011124_2574952122770799_5844121879148698477_n.jpg" alt="Our Dental Team" />
          </div>
          <div className="pwt-split-content animate animate-slide-right">
            <h2>Welcome To Your Happy Place</h2>
            <p>Your satisfaction is our utmost priority,and our team is dedicated to giving you reasons to smile. Come visit us and learn about our 3-year warranty. Start your journey to a smile that will last a lifetime!</p>
            <Link to="/new-patients" className="btn-solid-orange pwt-split-btn">New Patients</Link>
          </div>
        </div>
      </section>

      {/* 7. SAVE AND SMILE */}
      <section className="pwt-split-section bg-cream">
        <div className="container pwt-split-container reverse-mobile">
          <div className="pwt-split-content pr-large animate animate-slide-left">
            <h2>Save and Smile</h2>
            <p>We’re committed to making dental care accessible. With our flexible payment options and insurance collaborations, we ensure you get the best care without any financial worries.</p>
          </div>
          <div className="pwt-split-image animate animate-slide-right">
            <img src="/326558262_896809911467593_2475934262789262714_n.jpg" alt="Patient Consultation" />
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ProblemsWeTreat;