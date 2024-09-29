import './style.css';
import profileImage from './profile1.jpeg';
export default function Home() {
    return (
      <section className="hero">
        <div className="hero-content">
          <p>Hello,</p>
          <h1>I’m <span>Marwah</span></h1>
          <h6>
          Welcome to my digital portfolio! I’m a passionate student who thrives on bringing visually engaging and user-friendly websites to life. Whether you're here to explore my projects or seek out collaboration opportunities, I’m excited to share my work with you. Feel free to navigate through and let’s create something amazing together!
          </h6>
          <a href="#hire-me" className="hire-button">Hire me</a>
        </div>
        <img src={profileImage} alt="Smith" className="profile-image" />
      </section>
    );
  }