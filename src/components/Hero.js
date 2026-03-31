import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const whatsappNumber = '917358322382';
  const whatsappMessage = 'Hi! I want to book a service at Glow Beauty Salon.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Glow Beauty Salon</h1>
        <p className="hero-tagline">Enhancing Your Natural Beauty</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          <i className="fab fa-whatsapp"></i> Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;
