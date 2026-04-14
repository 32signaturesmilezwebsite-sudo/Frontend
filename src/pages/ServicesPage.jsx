import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { Sparkles, Home, Smile, PhoneCall } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Page title
    document.title = 'Services | 32 Signature Smilez';

    // Animation observer 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate')) {
              entry.target.classList.add('animate-show');
            } else {
              entry.target.classList.add('show');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-up, .animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const servicesList = [
    {
      id: 1,
      title: 'Stay One Step Ahead',
      desc: 'Revitalize your teeth with our thorough checkups and cleanings, leaving your pearly whites shining like a diamond.',
      image: '/dental-cleaning.webp',
      link: '/treatment/cleaning-exams',
      linkText: 'See Cleanings'
    },
    {
      id: 2,
      title: 'Traditional Crowns',
      desc: 'Meticulously crafted to restore your tooth\'s strength and beauty — goodbye damaged teeth, hello healthy smile!',
      image: '/understanding-dental-crowns-and-bridges-what-they-are-and-how-they-work.jpg',
      link: '/dental-crowns',
      linkText: 'See Crowns'
    },
    {
      id: 3,
      title: 'Dental Bridges',
      desc: 'Our dental bridges seamlessly fill spaces left by missing teeth, giving you a complete and confident smile.',
      image: '/dental-bridge.jpg',
      link: '/treatment/bridges',
      linkText: 'See Bridges'
    },
    {
      id: 4,
      title: 'Root Canal Treatment',
      desc: 'Gentle and effective root canal therapy to relieve tooth pain, eliminate infection, and save your natural tooth.',
      image: '/gettyimages-1543511026.jpg',
      link: '/treatment/root-canal-treatment',
      linkText: 'See Root Canal'
    },

    {
      id: 7,
      title: 'Dental Implants',
      desc: 'Permanent and natural-looking replacements for missing teeth tailored to restore your unwavering confidence.',
      image: '/DRN_0707.jpg',
      link: '/treatment/dental-implants',
      linkText: 'See Implants'
    },
    {
      id: 8,
      title: 'Smile Makeover',
      desc: 'Complete cosmetic transformations meticulously tailored to give you the perfect, radiant smile you deserve.',
      image: '/Complete-Smile-Makeover-Transforming-Smiles-with-Cosmetic-Dental-Veneers.png',
      link: '/treatment/smile-makeover',
      linkText: 'See Makeovers'
    },
    {
      id: 9,
      title: 'Kids Dentistry',
      desc: 'Gentle, fun, and educational dental care designed specifically to give your little ones a reason to smile.',
      image: '/IMG_0591.jpeg',
      link: '/treatment/pediatric-dentistry',
      linkText: 'See Pediatric Care'
    }
  ];

  return (
    <div className="sp-wrapper">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="sp-hero">
        <div
          className="sp-hero-bg"
          style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}
        ></div>

        <div className="container sp-hero-content">
          <h1 className="fade-up delay-1">
            32 Signature Smilez Multi speciality Dental Clinic & Implant Centre
          </h1>

          <p className="sp-hero-subtitle fade-up delay-2">
            Creating smiles, spreading joy
          </p>

          <div className="sp-hero-buttons fade-up delay-3">
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
      <section className="sp-centered-text">
        <div className="container sp-ct-container">
          <h2 className="fade-up delay-1">Welcome To Your Happy Place</h2>

          <p className="fade-up delay-2">
            At 32 Signature Smilez, your smile takes center stage. We've got an extensive array of services designed just for you — from preventive care to cosmetic and restorative treatments, our Agartala dental services are tailored to make your unique smile shine more than ever.
          </p>

          <p className="fade-up delay-3">
            Our friendly team goes the extra mile to ensure you have the most comfortable and enjoyable experience possible. Come visit us, we know you'll leave our office with a beaming smile on your face!
          </p>

          <p className="sp-bold-action fade-up delay-4">
            Call: <a href="tel:+919077770586" className="txt-orange">+91 90777 70586</a> to get started!
          </p>
        </div>
      </section>

      {/* 3. SAVE AND SMILE (Dark Section) */}
      <section className="sp-dark-split">
        <div
          className="sp-dark-bg"
          style={{ backgroundImage: "url('/Background.png')" }}
        ></div>

        <div className="sp-dark-overlay"></div>

        <div className="container sp-dark-container">
          {/* IMAGE */}
          <div className="sp-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img
                  src="/Deep Datta.PNG"
                  alt="Save and Smile"
                  className="dr-portrait-fixed"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="sp-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>

            <p>
              We believe that everyone deserves a healthy mouth without breaking the bank. Our office has all payment platforms including online and card transactions for your convenience. We are empanelled with ONGC, making our dental services accessible and affordable for everyone in Tripura and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DENTAL TREATMENTS (Grid Section) */}
      <section className="sp-treatments">
        <div className="container sp-treatments-container">
          <h2 className="sp-title-center fade-up delay-1">
            The Complete Smile Care Kit
          </h2>

          <div className="sp-grid">
            {servicesList.map((service, idx) => {
              const delayClass = `delay-${(idx % 4) + 1}`; // Cycle through delays
              return (
                <div key={service.id} className={`sp-card animate ${delayClass}`}>
                  <div className="sp-card-img-wrapper">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="sp-card-text">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to={service.link} className="sp-action-link">
                      {service.linkText} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REDEFINING DENTAL VISITS (HEX CARDS - Appended) */}
      <section className="redefining-section">
        <div className="container">
          <h2 className="section-title-large fade-up">Redefining Dental Visits</h2>
          <div className="features-hexagon-grid">
            
            <div className="feature-hex-card animate delay-1">
              <div className="feature-hex-icon">
                <Sparkles size={60} color="#c57b43" strokeWidth={1.5} />
              </div>
              <h3>Blissful Comfort</h3>
              <p>Sit back and relax while we do our magic. Our gentle touch, painless injections, and calming nitrous oxide sedation ensures unparalleled comfort throughout your visit.</p>
            </div>

            <div className="feature-hex-card animate delay-2">
              <div className="feature-hex-icon">
                <Home size={60} color="#c57b43" strokeWidth={1.5} />
              </div>
              <h3>Your Dental Home</h3>
              <p>At our welcoming dental office, you're family. Our friendly team creates a warm atmosphere that instantly puts you at ease.</p>
            </div>

            <div className="feature-hex-card animate delay-3">
              <div className="feature-hex-icon">
                <Smile size={60} color="#c57b43" strokeWidth={1.5} />
              </div>
              <h3>Smiles That Go the Distance</h3>
              <p>Get ready for a shining grin for years to come. Our unwavering commitment to top-notch treatments ensures you'll never stop smiling with us.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <Testimonials />

      {/* 7. CONTACT SECTION */}
      <ContactSection />
      
      {/* 8. EMERGENCY BANNER (Appended) */}
      <section className="emergency-banner-section">
        <div className="container">
          <div className="emergency-banner-box animate fade-up">
            <h2>Dental Emergency? We're Here To Save The Day!</h2>
            <p>When dental troubles strike, our superhero team is here to help. Reach out and we'll come to your rescue.</p>
            <a href="tel:+919077770586" className="emergency-call-link">
              <PhoneCall size={32} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }} />
              Call +91 90777 70586
            </a>
          </div>
        </div>
      </section>

      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ServicesPage;
