import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Crown, Link as LinkIcon, Activity } from 'lucide-react'; // 🔥 lucide icons
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // 🔥 Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <Header />
      
      <main>
        {/* 1. HERO + FORM COMBINED SECTION */}
        <section className="contact-hero-form-container reveal">
          <div className="contact-hero-bg" style={{ backgroundImage: `url('/istockphoto-510081750-612x612.jpg')` }}></div>
          
          <div className="container">
            {/* HERO TITLE */}
            <div className="contact-hero-content">
              <h1>Request an Appointment at 32 Signature Smilez</h1>
              <p>Let's begin this adventure together!</p>
              <a href="tel:+919077770586" className="rough-btn rough-btn-dark">
                <span className="btn-text">Call: +91 90777 70586</span>
              </a>
            </div>

            {/* FORM */}
            <div className="appointment-form-wrapper">
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="custom-input-group">
                  <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="custom-input-group">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="custom-input-group">
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="custom-input-group custom-textarea-group">
                  <input type="text" name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} />
                </div>

                {status === 'success' && <div className="form-alert success">Thank you! Your appointment request has been sent successfully.</div>}
                {status === 'error' && <div className="form-alert error">Something went wrong. Please try again or call us.</div>}

                <button type="submit" className="rough-btn rough-btn-primary submit-btn-large" disabled={status === 'loading'}>
                  <span className="btn-text">{status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 2. NEW TO SIGNATURE SMILEZ */}
        <section className="new-patient-promo reveal">
          <div className="container promo-content">
            <h2>New To 32 Signature Smilez?</h2>
            <p>
              We're so glad you chose us! During your visit, you'll enjoy a thorough exam, gentle cleaning, and a custom treatment plan crafted just for you. Get cozy and comfortable as we create an atmosphere that will make you excited to return!
            </p>
            <div className="btn-centerer">
              <Link to="/new-patients" className="rough-btn rough-btn-primary">
                <span className="btn-text">New Patients</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. DENTAL SERVICES YOU'LL LOVE */}
        <section className="mini-services reveal">
          <div className="container mini-services-content">
            <h2>Dental Services You'll Love</h2>
            <p className="services-desc">
              We go the extra mile to make sure you feel completely at ease throughout your personalized dental journey. With us, it's not just about the treatment — it's about your comfort and happiness.
            </p>
            
            <div className="services-hexagon-grid">
              
              <div className="mini-hex-card">
                <div className="hex-icon-vector">
                  <Sparkles size={70} strokeWidth={2} />
                </div>
                <h3>Cleanings & Checkups</h3>
              </div>
              
              <div className="mini-hex-card">
                <div className="hex-icon-vector">
                  <Crown size={70} strokeWidth={2} />
                </div>
                <h3>Traditional & Same-Day Crowns</h3>
              </div>
              
              <div className="mini-hex-card">
                <div className="hex-icon-vector">
                  <LinkIcon size={70} strokeWidth={2} />
                </div>
                <h3>Dental Bridges</h3>
              </div>
              
              <div className="mini-hex-card">
                <div className="hex-icon-vector">
                  <Activity size={70} strokeWidth={2} />
                </div>
                <h3>Implant Restorations</h3>
              </div>
              
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

export default ContactPage;