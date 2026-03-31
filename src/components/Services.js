import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/Services.css';

function Services() {
  const services = [
    { icon: '💆‍♀️', name: 'Facial', price: '999' },
    { icon: '✂️', name: 'Haircut', price: '499' },
    { icon: '💇‍♀️', name: 'Hair Spa', price: '1499' },
    { icon: '💅', name: 'Nail Art', price: '799' },
    { icon: '💄', name: 'Bridal Makeup', price: '4999' },
    { icon: '💆', name: 'Body Massage', price: '1299' },
    { icon: '✨', name: 'Threading', price: '299' },
    { icon: '💃', name: 'Gel Nails', price: '599' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Premium beauty and wellness services tailored for you
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              name={service.name}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
