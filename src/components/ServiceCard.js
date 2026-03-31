import React from 'react';
import '../styles/Services.css';

function ServiceCard({ icon, name, price }) {
  const whatsappNumber = '917358322382';
  const whatsappMessage = `I'm interested in the ${name} service at Glow Beauty Salon.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-name">{name}</h3>
      <p className="service-price">₹{price}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="service-btn"
      >
        Book Now
      </a>
    </div>
  );
}

export default ServiceCard;
