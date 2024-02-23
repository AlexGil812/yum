
import "../About.css";
import { useRef } from "react";
import { useEffect } from "react";
import Bakery from "../images/bakery.jpeg";
import InsideBakery from "../images/inside_bake.jpeg";
const AboutMePage = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = imageContainerRef.current;
      if (!imageContainer) return;

      const scrollPosition = window.scrollY;
      const fadeStart = 100; // When the fade starts
      const fadeDistance = 200; // How long the fade lasts

      const opacity = Math.max(
        0,
        1 - (scrollPosition - fadeStart) / fadeDistance,
      );
      imageContainer.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about-me">
      <div className="content">
        <h2>Pastry Bakery</h2>
        <p>About us ...</p>
      </div>
      <div className="image-container" ref={imageContainerRef}>
        <img src={Bakery} alt="store" />
      </div>

      <section className="image-container-one" ref={imageContainerRef}>
        <h2>Our Story</h2>
        <img src={InsideBakery} alt="inside store" />
        <p>
          In the heart of 2015, our bakery was born from a lifelong passion for
          creating sweet delights. What started as a small, family-run shop has
          blossomed into a beloved community hub...
        </p>
      </section>
    </section>
  );
};

export default AboutMePage;
