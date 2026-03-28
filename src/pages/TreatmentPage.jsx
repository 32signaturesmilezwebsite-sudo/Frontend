import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTreatmentData, MAPS_LINK } from '../data/treatmentData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import BookingModal from '../components/BookingModal';
import './TreatmentPage.css';

const TreatmentPage = () => {
  const { slug } = useParams();
  const data = getTreatmentData(slug);

  const [openFaq, setOpenFaq] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      document.title = `${data.title} | 32 Signature Smilez`;
    }
  }, [slug, data]);

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Treatment not found</h2>;
  }

  return (
    <>
      <Header />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <div className="treatment-page">

        {/* HERO */}
        <div className="treatment-hero">
          <div className="container">
            <h1>{data.title}</h1>
          </div>
        </div>

        {/* BODY */}
        <div className="treatment-body container">

          {/* TOP SECTION */}
          <div className="treatment-main">

            <div className="treatment-content">
              <h2>What is {data.title}?</h2>
              <p className="treatment-intro">{data.intro}</p>
            </div>

            <div className="treatment-image-col">
              <div className="treatment-img-card">
                <img
                  src={data.image}
                  alt={data.title}
                  loading="lazy"
                  onError={(e) =>
                    (e.target.src = '/teeth-whitening-before-1.webp')
                  }
                />
              </div>

              
            </div>
          </div>

          {/* DETAILS */}
          <div className="details-grid">
            {data.details.map((section, i) => {

              let count = 0;
              const lines = section.content.split('\n');

              return (
                <div key={i} className="detail-section">
                  <h3>{section.heading}</h3>

                  <div className="detail-text">
                    {lines.map((line, j) => {

                      const isNumbered = line.match(/^\d+\./);
                      const clean = line.replace(/^\d+\.\s*/, '');
                      const isSigns = section.heading.toLowerCase().includes("signs");

                      if (isNumbered) {
                        count++;

                        const roman = ["i","ii","iii","iv","v","vi","vii","viii","ix","x"];
                        const parts = clean.split('–');

                        return (
                          <div key={j} className="detail-item">
                            <span className="number">
                              {isSigns ? `${roman[count - 1]}.` : `${count}.`}
                            </span>

                            <span>
                              <strong>{parts[0]}</strong>
                              {parts[1] && <> – {parts[1]}</>}
                            </span>
                          </div>
                        );
                      }

                      if (line.trim() !== "") {
                        return (
                          <p key={j} className="detail-full">
                            {line}
                          </p>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="treatment-cta">
            <button
              className="btn-primary"
              onClick={() => setBookingOpen(true)}
            >
              BOOK FREE APPOINTMENT 📅
            </button>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              VISIT CLINIC 📍
            </a>
          </div>

          {/* FAQ */}
          {data.faqs.length > 0 && (
            <div className="treatment-faq">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-list">
                {data.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`faq-row ${openFaq === i ? 'open' : ''}`}
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                  >
                    <div className="faq-q">
                      <span>{faq.q}</span>
                      <span className="faq-toggle">
                        {openFaq === i ? '▲' : '▼'}
                      </span>
                    </div>

                    {openFaq === i && (
                      <div className="faq-a">
                        <p><strong>Answer:</strong> {faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <FloatingWidgets />
      <Footer />
    </>
  );
};

export default TreatmentPage;