import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Glow Beauty Salon</h2>
        <div className="about-content">
          <p className="about-description">
            At Glow Beauty Salon, we believe that beauty is more than just a look—it's a feeling of confidence and self-care. With over a decade of experience in the beauty industry, we've dedicated ourselves to providing premium services with utmost professionalism.
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Professional Staff</h3>
              <p>
                Our team of certified beauticians and stylists bring expertise, creativity, and passion to every service.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Hygienic Environment</h3>
              <p>
                We maintain the highest standards of cleanliness and hygiene to ensure your safety and comfort.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Premium Products</h3>
              <p>
                We use only internationally recognized, high-quality beauty and skincare products for best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
