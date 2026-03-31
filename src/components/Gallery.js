import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1562183241-e5e70d780356?w=400&h=400&fit=crop',
      testimonial: 'Amazing facial treatment! My skin has never looked better.',
      author: 'Sarah M.',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      testimonial: 'Best haircut ever! Highly recommended for all hair types.',
      author: 'Priya K.',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      testimonial: 'The hair spa was absolutely rejuvenating. Felt like a new person!',
      author: 'Anjali R.',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      testimonial: 'Stunning nail art design! The artist is very talented.',
      author: 'Deepika S.',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1516746885899-b5222d90f9f9?w=400&h=400&fit=crop',
      testimonial: 'Bridal makeup was flawless! I felt like a princess on my wedding day.',
      author: 'Neha P.',
      rating: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1560066620-b8b73ea28550?w=400&h=400&fit=crop',
      testimonial: 'Professional staff and premium products. Worth every penny!',
      author: 'Meera T.',
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">
          Discover the transformation and beauty we create
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{item.testimonial}"</p>
                  <p className="testimonial-author">- {item.author}</p>
                  <div className="testimonial-stars">{renderStars(item.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
