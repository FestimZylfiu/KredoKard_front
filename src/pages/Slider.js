import React, { useEffect, useRef } from 'react';
import './Slider.css';
import img1 from "../assets/images/kredo-7.png";
import img2 from "../assets/images/kredo-8.png";
import img3 from "../assets/images/kredo-9.png";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Slider = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const images = [img1, img2, img3, img1, img2, img3];

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // drag speed multiplier
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

   useEffect(()=> {
      AOS.init({
        duration: 1000,    
        once: true,         
        offset: 50         
      });
    },[])

  return (
    <div className="slider-container" data-aos="zoom-out-up">
      <div
        className="logo-slider draggable"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Logo ${index + 1}`}
            className="slider-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
