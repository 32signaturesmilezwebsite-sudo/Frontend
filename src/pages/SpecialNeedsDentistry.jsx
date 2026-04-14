import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./SpecialNeedsDentistry.css";

const specialFaqs = [
  {
    question: "Do you have wheelchair access?",
    answer: "Yes, our facility is entirely ground-level and fully ADA compliant, featuring wide hallways and spacious treatment rooms to comfortably accommodate wheelchair-bound patients directly during procedures."
  },
  {
    question: "How do you handle patients with severe sensory processing issues?",
    answer: "We understand that bright lights and loud noises can be highly triggering. We are happy to modify our clinical environment by dimming non-essential lights, reducing office noise, working slowly, and providing comforting sedation options."
  }
];

const SpecialNeedsDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Special Needs Dentistry | 32 Signature Smilez";

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // TEXT ANIMATION
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("active");
            }
            // IMAGE / CARD / SECTION ANIMATION
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.add("animate-show");
            }
            // OPTIONAL: container activation (for grouped animations)
            if (entry.target.classList.contains("snd-ds-content")) {
              entry.target.classList.add("active");
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up, .animate, .snd-ds-content");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="snd-wrapper">
      <Header />

      <section className="snd-hero">
        <div className="snd-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container snd-hero-content">
          <h1 className="fade-up">Special Needs Dentistry</h1>
          <p className="snd-hero-subtitle fade-up delay-1">Accommodating care for uniquely wonderful patients</p>
          <div className="snd-hero-buttons fade-up delay-2">
             <a href="tel:+919077770586" className="btn-solid-orange">Call for Consultation</a>
          </div>
        </div>
      </section>

      <section className="snd-centered-text">
        <div className="container snd-ct-container">
          <h2>Patience, empathy, and tailored environments</h2>
          <p>
            At 32 Signature Smilez, we firmly believe everyone deserves access to high-quality, compassionate dental care. We specialize in modifying our clinical approach to safely and comfortably treat patients living with physical, psychological, cognitive, and sensory-related disabilities. 
          </p>
          <p>
            From autism spectrum disorders to cerebral palsy and severe dental phobias, we take the time to understand your loved one's specific triggers and needs. We schedule longer appointment blocks so there is never any rushing, and we utilize nitrous oxide to ensure a calm, successful visit every time.
          </p>
        </div>
      </section>

      <section className="snd-dark-split">
        <div className="snd-dark-bg zoom-bg" style={{ backgroundImage: "url('/Background.png')" }}></div>
        <div className="snd-dark-overlay"></div>
        <div className="container snd-dark-container">
          <div className="snd-ds-image animate animate-slide-left">
            <div className="frame-outer">
              <div className="frame-inner">
                <img src="/Deep Datta.PNG" alt="Dr. Deep Datta" className="dr-portrait-fixed" />
              </div>
            </div>
          </div>
          <div className="snd-ds-content animate animate-slide-right">
            <h2>Save and Smile</h2>
            <p>
  Families caring for loved ones with special needs already have enough on their plate. You shouldn't have to worry about excessive dental costs for necessary, compassionate care. Our clinic is committed to providing gentle, personalized treatment in a comfortable and supportive environment. 

  We offer flexible and low-stress payment options along with convenient online and card transactions, so you can focus entirely on ensuring safe, high-quality care for your loved ones without financial pressure.
</p>
          </div>
        </div>
      </section>

      <section className="snd-split-section bg-cream">
        <div className="container snd-split-container">
          <div className="snd-split-content pr-large fade-up">
            <h2 className="fade-up">Customized care tailored to every patient</h2>
            <p className="snd-intro fade-up delay-1">
              There is no one-size-fits-all approach to special needs dentistry. We constantly adapt our treatments to secure a positive, trauma-free experience for everyone involved.
            </p>
            <ul className="snd-bullet-list">
              <li className="fade-up delay-2">
                <strong>Sensory Management:</strong> We happily dim overhead lights, shut off distracting monitors, and limit loud tools to prevent sensory overload.
              </li>
              <li className="fade-up delay-3">
                <strong>Extended Appointments:</strong> We never rush. We book far longer time slots to allow the patient to acclimate to the room at their own comfortable pace.
              </li>
              <li className="fade-up delay-4">
                <strong>Show-Tell-Do Method:</strong> We narrate exactly what we are going to do before we do it, letting the patient safely feel the instruments to alleviate fear.
              </li>
              
              <li className="fade-up delay-6">
                <strong>Mobility Friendly:</strong> Our hallways and operatory rooms are extra wide. We can perform checkups directly in the patient's wheelchair without transferring them.
              </li>
            </ul>
          </div>
          <div className="snd-split-image animate animate-slide-right">
            <img src="/Gemini_Generated_Image_slg5f9slg5f9slg5.png" alt="Special Needs Dental Care" className="shaped-image" />
          </div>
        </div>
      </section>

      <FAQ faqsData={specialFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default SpecialNeedsDentistry;
