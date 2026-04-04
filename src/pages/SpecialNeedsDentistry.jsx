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
    src: "Yes, our facility is entirely ground-level and fully ADA compliant, featuring wide hallways and spacious treatment rooms to comfortably accommodate wheelchair-bound patients directly during procedures."
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
    // Shared scroll-reveal
    return  }, []);

  return (
    <div className="snd-wrapper">
      <Header />
      <section className="snd-hero">
        <div className="snd-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container snd-hero-content">
          <h1 className="fade-up">Special Needs Dentistry</h1>
          <p className="snd-hero-subtitle fade-up delay-1">Accommodating care for uniquely wonderful patients</p>
          <div className="snd-hero-buttons fade-up delay-2">
             <a href="tel:+919077770586" className="btn-solid-orange">Call to Discuss Accommodations</a>
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

      <FAQ faqsData={specialFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default SpecialNeedsDentistry;
