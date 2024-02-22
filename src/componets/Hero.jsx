import React from "react";
import styles from "../Hero.module.css"; // Assume CSS module usage for scoped styling
import Avatar from "../images/Gemini_Generated_Image_avata.jpeg";
import { Link } from "react-router-dom";
import AIGeneratedImage from "../images/imageOne.jpeg";
import Footer from "./Footer";
import Cake from "../images/cake.jpeg";
import Fire from "../images/fire.jpeg";
import HandCake from "../images/hand_cake.jpeg";

const imageSource = [AIGeneratedImage, Cake, Fire, HandCake];

export default function Hero() {
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
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1 className={styles.heroTitle}>
            <span>Gear up!</span> We're going to pastry town!
          </h1>
          <Link to="/menu">
            <button className={styles.betaButton}>View Pastries</button>
          </Link>
        </div>
      </div>
      <div className={styles.parallax}>
        <img className={styles.bg} src="assets/bg.jpg" alt="Background" />
        <img
          className={styles.dust}
          src="assets/dust.webp"
          alt="Dust particles"
        />
        {/* Additional parallax images */}
      </div>
      <main className={styles.mainContent}>
        <div className={styles.wrapper}>{/* Content paragraphs */}</div>
      </main>
      <section className={styles.grid}>
        {imageSource.map((src, index) => (
          <div className={styles.gridItem} key={index}>
            <img src={src} alt="AI Generated" className={styles.aiImage} />
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
