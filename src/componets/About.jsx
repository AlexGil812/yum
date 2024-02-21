
import React from 'react';
import '../About.css';

const AboutMePage = () => {
  return (
    <div className="about-page">
      <section className="video-section">
        <video src={VideoOne} autoPlay muted loop className="video-background"></video>
        <div className="overlay-text">
          <h1>Welcome to Our Bakery</h1>
          <p>Discover the taste of tradition and passion in every bite.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="content">
          <h2>Our Story</h2>
          <p>Our bakery began as a cherished family tradition, with recipes passed down through generations...</p>
        </div>
        <video src={VideoTwo} autoPlay muted loop className="video-story"></video>
      </section>

      <section className="connection-section">
        <p>Stepping into our bakery means more than simply satisfying a craving...</p>
        <video src={VideoThree} autoPlay muted loop className="video-connection"></video>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Our Bakery. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutMePage;
