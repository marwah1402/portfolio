import React from 'react';
import './style.css'; // Assuming your styles are in style.css
import webDevImage from './pic1.jpeg'; // Replace with your actual images
import mobileDevImage from './pic2.jpeg';
import programmingImage from './pic3.jpeg';

export default function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        <div className="service-item">
          <img src={webDevImage} alt="Web Development" className="service-image" />
          <h2>Web Development</h2>
          <p>I specialize in creating dynamic and responsive websites that offer a great user experience across devices.</p>
        </div>

        <div className="service-item">
          <img src={mobileDevImage} alt="Mobile App Development" className="service-image" />
          <h2>Mobile App Development</h2>
          <p>Building modern and user-friendly mobile applications for both iOS and Android platforms.</p>
        </div>

        <div className="service-item">
          <img src={programmingImage} alt="Programming" className="service-image" />
          <h2>General Programming</h2>
          <p>Offering programming services, from software development to scripting and automation, tailored to your needs.</p>
        </div>
      </div>
    </div>
  );
}