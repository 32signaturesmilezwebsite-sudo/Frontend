import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import "./GumTreatment.css";

const gumFaqs = [
  {
    question: "What is Scaling and Root Planing?",
    answer: "Scaling involves carefully removing hardened plaque (calculus) from beneath the gums, while root planing smooths the tooth roots to prevent bacteria from reattaching. This helps the gums heal and reattach to the teeth."
  },
  {
    question: "Can periodontitis be cured completely?",
    answer: "Advanced periodontal disease cannot be completely reversed once significant bone loss has occurred. However, with proper treatment and maintenance, we can stop its progression and preserve your teeth."
  },
  {
    question: "What are the early signs of gum disease?",
    answer: "Common early signs include bleeding gums while brushing, redness, swelling, persistent bad breath, and gum tenderness. Early treatment can prevent serious complications."
  },
  {
    question: "Is gum treatment painful?",
    answer: "Modern periodontal treatments are designed to be comfortable. We use gentle techniques and, if needed, local anesthesia to ensure a pain-free experience during deep cleaning procedures."
  },
  {
    question: "How long does gum treatment take?",
    answer: "The duration depends on the severity of the condition. Mild cases may require one or two sessions, while advanced cases may need multiple visits and ongoing maintenance."
  },
  {
    question: "Can gum disease cause tooth loss?",
    answer: "Yes, if left untreated, gum disease can destroy the supporting bone and tissues, eventually leading to loose teeth or tooth loss. Early treatment is key to prevention."
  },
  {
    question: "How can I prevent gum disease after treatment?",
    answer: "Maintaining good oral hygiene, including regular brushing, flossing, and routine dental check-ups, is essential. Professional cleanings and lifestyle changes also help prevent recurrence."
  },
  {
    question: "Is bad breath related to gum disease?",
    answer: "Yes, persistent bad breath (halitosis) is often caused by bacteria buildup under the gums, which is a common sign of gum disease."
  },
  {
    question: "Do I need surgery for gum disease?",
    answer: "Not always. Many cases can be treated with non-surgical procedures like scaling and root planing. Surgery is only recommended for advanced stages when necessary."
  },
  {
    question: "Is gum treatment affordable?",
answer: "Yes, gum treatments are designed to be accessible for patients. Our team will guide you through flexible payment options and convenient online and card transactions to ensure your treatment is smooth and stress-free."
  }
];
const GumTreatment = () => {
useEffect(() => {
  window.scrollTo(0, 0);
  document.title = "Periodontal Gum Treatment | 32 Signature Smilez";

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
          if (entry.target.classList.contains("pg-content")) {
            entry.target.classList.add("active");
          }

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // SELECT ALL ELEMENTS
  const elements = document.querySelectorAll(
    ".fade-up, .animate, .pg-content"
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="gum-wrapper">
      <Header />

      <section className="gum-hero">
        <div className="gum-hero-bg" style={{ backgroundImage: "url('/istockphoto-510081750-612x612.jpg')" }}></div>
        <div className="container gum-hero-content">
          <h1 className="fade-up">Periodontal Treatment</h1>
          <p className="gum-hero-subtitle fade-up delay-1">Reversing disease and securing your foundation</p>
          <div className="gum-hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-solid-orange">Get Checked</Link>
          </div>
        </div>
      </section>

      <section className="gum-centered-text">
        <div className="container gum-ct-container">
          <h2>Healthy teeth require healthy gums</h2>
          <p>
            Periodontal (gum) disease is a silent, painless infection that slowly destroys the bone structure holding your teeth in place. It is actually the leading cause of tooth loss in adults today. 
          </p>
          <p>
            If you notice chronic bad breath, actively bleeding gums when you floss, or a sense of teeth suddenly feeling 'loose', you critically require deep-cleaning intervention immediately. Our expert hygiene team utilizes advanced ultrasonic scaling tech to sweep away deeply rooted bacterial infections and allow your gums to reattach strongly.
          </p>
        </div>
      </section>

       <section className="fil-dark-split">
  <div
    className="fil-dark-bg zoom-bg"
    style={{ backgroundImage: "url('/Background.png')" }}
  ></div>

  <div className="fil-dark-overlay"></div>

  <div className="container fil-dark-container">

    {/* IMAGE */}
    <div className="fil-ds-image animate animate-slide-left">
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

    {/* CONTENT */}
    <div className="fil-ds-content animate animate-slide-right">
      <h2>Save and Smile</h2>

      <p>
  Healthy gums are the foundation of a strong and lasting smile. Periodontal (gum) treatment focuses on preventing, diagnosing, and treating gum disease before it leads to serious complications such as tooth loss. Gum disease often begins silently with symptoms like bleeding gums, bad breath, or mild swelling, but can progress to damage the supporting bone and tissues if left untreated. 

  Our advanced periodontal care includes deep cleaning procedures such as scaling and root planing to remove harmful bacteria and promote healing. Using modern techniques and gentle care, we help restore gum health, reduce inflammation, and prevent further damage. 

  Whether you are in the early stages of gingivitis or require more advanced treatment, our team provides personalized care plans tailored to your needs. We also guide you on maintaining optimal oral hygiene and offer flexible payment options along with convenient online and card transactions, ensuring your treatment is both effective and stress-free.
</p>
    </div>

  </div>
</section>

     <section className="gum-split-section bg-cream">
  <div className="container gum-split-container">

    <div className="gum-split-content pr-large fade-up">
      <h2 className="fade-up">Halt disease progression quickly</h2>

      <p className="gum-intro fade-up delay-1">
        Gum disease can progress silently, causing damage to your gums and supporting bone.
        Early intervention with professional periodontal care helps stop the infection,
        restore gum health, and protect your smile for the long term.
      </p>

      <p className="gum-intro fade-up delay-2">
        Our advanced gum treatments focus on eliminating harmful bacteria, reducing inflammation,
        and strengthening the foundation of your teeth. With modern techniques and gentle care,
        we ensure a comfortable experience while delivering long-lasting results.
      </p>

      <ul className="gum-bullet-list">
        <li className="fade-up delay-3">
          <strong>Prevents tooth loss:</strong> Protects supporting bone and tissues from further damage.
        </li>

        <li className="fade-up delay-4">
          <strong>Eliminates harmful bacteria:</strong> Targets the root cause of infection and bad breath.
        </li>

        <li className="fade-up delay-5">
          <strong>Reduces inflammation:</strong> Helps control swelling, bleeding, and gum sensitivity.
        </li>

        <li className="fade-up delay-6">
          <strong>Pain-free deep cleaning:</strong> Gentle scaling and root planing for maximum comfort.
        </li>

        <li className="fade-up delay-7">
          <strong>Improves overall health:</strong> Supports better systemic health by reducing bacterial load.
        </li>

        <li className="fade-up delay-8">
          <strong>Long-term protection:</strong> Helps maintain healthy gums and prevents disease recurrence.
        </li>
      </ul>
    </div>

    <div className="gum-split-image animate animate-slide-right">
      <img
        src="/Caldwell-Bills-Petrilli-Gum-Treatment.png"
        alt="Clinical deep cleaning"
        className="shaped-image"
      />
    </div>

  </div>
</section>

      <FAQ faqsData={gumFaqs} customTitle="Questions? We've Got Answers!" />
      <Testimonials />
      <ContactSection />
      <FloatingWidgets />
      <Footer />
    </div>
  );
};

export default GumTreatment;
