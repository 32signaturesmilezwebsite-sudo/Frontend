
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import FloatingWidgets from '../components/FloatingWidgets';
import { Heart, Home, Sparkles, Smile, ShieldCheck, Clock, PhoneCall } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    {
      id: 1,
      title: 'Stay One Step Ahead',
      desc: 'Revitalize your teeth with our thorough checkups and cleanings, leaving your pearly whites shining like a diamond.',
      image: '/Cleaning-Exams.png',
      link: '/treatment/cleaning-exams',
      linkText: 'See Cleanings'
    },
    {
      id: 2,
      title: 'Traditional Crowns',
      desc: 'Meticulously crafted to restore your tooth\'s strength and beauty — goodbye damaged teeth, hello healthy smile!',
      image: '/Traditional-Crowns.png',
      link: '/dental-crowns',
      linkText: 'See Crowns'
    },
    {
      id: 3,
      title: 'Dental Bridges',
      desc: 'Our dental bridges seamlessly fill spaces left by missing teeth, giving you a complete and confident smile.',
      image: '/Dental-Bridges.png',
      link: '/treatment/bridges',
      linkText: 'See Bridges'
    },
    {
      id: 4,
      title: 'Same-Day Crowns',
      desc: 'Witness the transformation as we restore your smile to its former glory with CEREC same-day crowns that blend artistry and efficiency.',
      image: '/Same-Day-Crowns.png',
      link: '/treatment/same-day-crowns',
      linkText: 'See CEREC Crowns'
    },
    {
      id: 5,
      title: 'Implant Restorations',
      desc: 'Our expert team will restore your implant with precision, providing a natural-looking tooth that renews your confidence.',
      image: '/Implant-Restoration.png',
      link: '/treatment/implant-restoration',
      linkText: 'See Restorations'
    },
    {
      id: 6,
      title: 'Nitrous Oxide',
      desc: 'Forget about dental anxiety — enjoy a relaxed dental experience while we work our magic with nitrous oxide sedation.',
      image: '/Nitrous-Oxide.png',
      link: '/treatment/sedation',
      linkText: 'See Sedation'
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
      image: '/IMG_4514 (1).jpg',
      link: '/treatment/smile-makeover',
      linkText: 'See Makeovers'
    },
    {
      id: 9,
      title: 'Kids Dentistry',
      desc: 'Gentle, fun, and educational dental care designed specifically to give your little ones a reason to smile.',
      image: '/Kids-Dentistry.png',
      link: '/treatment/pediatric-dentistry',
      linkText: 'See Pediatric Care'
    }
  ];

  return (
    <div className="services-page-wrapper">
      <Header />

      <main>
        {/* 1. HERO SECTION */}
        <section className="services-hero">
          <div className="hero-trees"></div>
          <div className="services-hero-content">
            <h1>32 Signature Smilez Dental Services</h1>
            <p className="subtitle">Creating smiles, spreading joy</p>
            <div className="services-hero-buttons">
              <Link to="/contact" className="btn-services btn-services-primary">Request Appointment</Link>
              <a href="tel:+919077770586" className="btn-services btn-services-outline">Call: +91 90777 70586</a>
            </div>
          </div>
        </section>

        {/* 2. REDEFINING DENTAL VISITS (HEX CARDS) */}
        <section className="redefining-section">
          <div className="container">
            <h2 className="section-title-large">Redefining Dental Visits</h2>
            <div className="features-hexagon-grid">
              
              <div className="feature-hex-card">
                <div className="feature-hex-icon">
                  <Sparkles size={60} color="#c57b43" strokeWidth={1.5} />
                </div>
                <h3>Blissful Comfort</h3>
                <p>Sit back and relax while we do our magic. Our gentle touch, painless injections, and calming nitrous oxide sedation ensures unparalleled comfort throughout your visit.</p>
              </div>

              <div className="feature-hex-card">
                <div className="feature-hex-icon">
                  <Home size={60} color="#c57b43" strokeWidth={1.5} />
                </div>
                <h3>Your Dental Home</h3>
                <p>At our welcoming dental office, you\'re family. Our friendly team creates a warm atmosphere that instantly puts you at ease.</p>
              </div>

              <div className="feature-hex-card">
                <div className="feature-hex-icon">
                  <Smile size={60} color="#c57b43" strokeWidth={1.5} />
                </div>
                <h3>Smiles That Go the Distance</h3>
                <p>Get ready for a shining grin for years to come. Our unwavering commitment to top-notch treatments ensures you\'ll never stop smiling with us.</p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. WELCOME (SPLIT IMAGE LEFT) */}
        <section className="split-section">
          <div className="split-image" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}>
            {/* Using stock team placeholder if specific team photo not found */}
          </div>
          <div className="split-content">
            <h2>Welcome To Your Happy Place</h2>
            <p>
              At 32 Signature Smilez, your smile takes center stage. We\'ve got an extensive array of services designed just for you — from preventive care to cosmetic and restorative treatments, our Agartala dental services are tailored to make your unique smile shine more than ever.
            </p>
            <p>
              Our friendly team goes the extra mile to ensure you have the most comfortable and enjoyable experience possible. Come visit us, we know you\'ll leave our office with a beaming smile on your face!
            </p>
            <Link to="/new-patients" className="btn-text-link">New Patients →</Link>
          </div>
        </section>

        {/* 4. THE COMPLETE SMILE CARE KIT (GRID) */}
        <section className="services-kit-section">
          <div className="container">
            <h2 className="section-title-large">The Complete Smile Care Kit</h2>
            <div className="services-kit-grid">
              {servicesList.map((service) => (
                <div key={service.id} className="service-kit-card">
                  <div className="kit-card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to={service.link} className="link-see-more">{service.linkText}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SAVE AND SMILE (SPLIT IMAGE RIGHT) */}
        <section className="split-section reverse">
          <div className="split-image" style={{ backgroundImage: "url('/DRN_0707.jpg')" }}>
          </div>
          <div className="split-content">
            <h2>Save and Smile</h2>
            <p>
              We believe that everyone deserves a healthy mouth without breaking the bank. We offer flexible payment options tailored to your needs and budget.
            </p>
            <p>
              Our office also works with various insurance providers to make our dental services affordable for everyone in Krishna Nagar and beyond.
            </p>
            <Link to="/contact" className="btn-text-link">Contact Us →</Link>
          </div>
        </section>

        {/* 6. TESTIMONIALS / REVIEW SECTION */}
        <Testimonials />

        {/* 7. EMERGENCY BANNER */}
        <section className="emergency-banner-section">
          <div className="container">
            <div className="emergency-banner-box">
              <h2>Dental Emergency? We're Here To Save The Day!</h2>
              <p>When dental troubles strike, our superhero team is here to help. Reach out and we'll come to your rescue.</p>
              <a href="tel:+919077770586" className="emergency-call-link">
                <PhoneCall size={32} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }} />
                Call +91 90777 70586
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default ServicesPage;
