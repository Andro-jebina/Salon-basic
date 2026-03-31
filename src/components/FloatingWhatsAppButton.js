import React from 'react';
import '../styles/FloatingWhatsAppButton.css';

function FloatingWhatsAppButton() {
  const whatsappNumber = '917358322382';
  const whatsappMessage = 'Hi! I want to book a service at Glow Beauty Salon.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default FloatingWhatsAppButton;
