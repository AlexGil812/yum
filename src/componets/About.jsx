
import "../About.css";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AboutMePage = () => {
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);


  const handleClick = () => {
    navigate("/");
  }

  useEffect(() => {
    setLoaded(true);
  } , []);

  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = imageContainerRef.current;
      if (!imageContainer) return;

      const scrollPosition = window.scrollY;
      const fadeStart = 100; 
      const fadeDistance = 200; 

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
    <>
     <button 
       className="back-to-home" 
  onClick={handleClick} 
>
  <FontAwesomeIcon icon={faArrowLeft} />
</button>

<section id="about-me" className={loaded ? 'loaded' : ''}>
       
      <div className="grid-container">
        <figure className="grid-item">
       <Link to='/more-page' className="more">
       <button>About us</button>
       </Link>
        </figure>
      </div>
    </section>
    </>
  );
};

export default AboutMePage;