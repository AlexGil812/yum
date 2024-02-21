import React from "react";
import styles from "../Hero.module.css"; // Assume CSS module usage for scoped styling
import Avatar from '../images/Gemini_Generated_Image_avata.jpeg';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AIGeneratedImage from '../images/imageOne.jpeg';
import Footer from "./Footer";

export default function Hero() {

  useEffect(() => {
    const parallaxEffect = () => {
      const scrolled = window.scrollY;
      const parallaxImage = document.querySelector(`.${styles.aiImage}`);
      if (parallaxImage) {
        parallaxImage.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', parallaxEffect);

    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, []);













  return (
    <div className={styles.container}>
      <header className={styles.primaryHeader}>
        <div className={styles.wrapper}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <img className={styles.images} src={Avatar} alt="Logo Image" />
            </div>
            <nav className={styles.primaryNav}>
              <ul role="list">
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className={styles.socialLinks} aria-label="social links">
              <a href="#" aria-label="Link X">X</a>
              <a href="#" aria-label="Link IG">IG</a>
              <a href="#" aria-label="Link YT">YT</a>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1 className={styles.heroTitle}>
            <span>Gear up!</span> We're going monster hunting!
          </h1>
          <button className={styles.betaButton}>View Pastry</button>
        </div>
      </div>
      <div className={styles.parallax}>
        <img className={styles.bg} src="assets/bg.jpg" alt="Background" />
        <img className={styles.dust} src="assets/dust.webp" alt="Dust particles" />
        {/* Additional parallax images */}
      </div>
      <main className={styles.mainContent}>
        <div className={styles.wrapper}>
          {/* Content paragraphs */}
        </div>
      </main>

      <div className={styles.parallaxImageContainer}>
        <img src={AIGeneratedImage} alt="AI Generated" className={styles.aiImage} />
      </div>
      <Footer />
    </div>
  );
}
