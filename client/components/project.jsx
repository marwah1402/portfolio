import React, { useState } from 'react';
import './style.css'; 
import project1Image from './project1.png'; 
import project2Image from './project2.png';
import project3Image from './project3.png';

export default function Project() {
    const [modalImage, setModalImage] = useState(null);
  
    const openModal = (image) => {
      setModalImage(image);
    };
  
    const closeModal = () => {
      setModalImage(null);
    };
  
    return (
      <div className="projects-container">
        <h1>My Projects</h1>
        
        <div className="projects-grid">
          <div className="project-item" onClick={() => openModal(project1Image)}>
            <img src={project1Image} alt="Project 1" className="project-image" />
            <div className="project-info">
              <h2>Project 1 Title</h2>
              <p>This project focuses on [brief description of the project]. My role was [explain your role], and the outcome was [briefly explain the result or success of the project].</p>
            </div>
          </div>
  
          <div className="project-item" onClick={() => openModal(project2Image)}>
            <img src={project2Image} alt="Project 2" className="project-image" />
            <div className="project-info">
              <h2>Project 2 Title</h2>
              <p>This project focuses on [brief description of the project]. My role was [explain your role], and the outcome was [briefly explain the result or success of the project].</p>
            </div>
          </div>
  
          <div className="project-item" onClick={() => openModal(project3Image)}>
            <img src={project3Image} alt="Project 3" className="project-image" />
            <div className="project-info">
              <h2>Project 3 Title</h2>
              <p>This project focuses on [brief description of the project]. My role was [explain your role], and the outcome was [briefly explain the result or success of the project].</p>
            </div>
          </div>
        </div>
  
        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img src={modalImage} alt="Project Full" className="modal-content" />
          </div>
        )}
      </div>
    );
  }