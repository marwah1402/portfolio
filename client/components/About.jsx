import React from 'react';
import './style.css'; // 
import profileImage from './profile.jpeg'; 
import resumeFile from './resume.pdf'; 

export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={profileImage} alt="Profile" className="about-profile-image" />
      <p>
        Hi, my name is <strong>Your Name</strong>. I am a passionate web developer and designer, with a keen eye for creating user-friendly and visually appealing websites. 
        I have experience working with modern technologies and am excited to continue growing in my career. 
      </p>
      <a href={resumeFile} download className="resume-link">Download My Resume</a>
    </div>
  );
}