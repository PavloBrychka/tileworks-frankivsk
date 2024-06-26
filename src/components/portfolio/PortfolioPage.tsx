import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Swiper from 'swiper';
import 'swiper/css';
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const images = [
    "/assets/portfoliophoto/1.jpg",
    "/assets/portfoliophoto/2.jpg",
    "/assets/portfoliophoto/3.jpg",
    "/assets/portfoliophoto/4.jpg",
    "/assets/portfoliophoto/5.jpg",
    "/assets/portfoliophoto/6.jpg",
    "/assets/portfoliophoto/7.jpg",
    "/assets/portfoliophoto/8.jpg",
    "/assets/portfoliophoto/9.jpg",
    "/assets/portfoliophoto/10.jpg",
    "/assets/portfoliophoto/11.jpg",
    "/assets/portfoliophoto/12.jpg",
    "/assets/portfoliophoto/13.jpg",
    "/assets/portfoliophoto/14.jpg",
    "/assets/portfoliophoto/15.jpg",
    "/assets/portfoliophoto/16.jpg",
    "/assets/portfoliophoto/17.jpg",
    "/assets/portfoliophoto/18.jpg",
    "/assets/portfoliophoto/19.jpg",
    "/assets/portfoliophoto/20.jpg",
    "/assets/portfoliophoto/21.jpg",
    "/assets/portfoliophoto/22.jpg",
    "/assets/portfoliophoto/23.jpg",
    "/assets/portfoliophoto/24.jpg",
    "/assets/portfoliophoto/25.jpg",
    "/assets/portfoliophoto/26.jpg",
    "/assets/portfoliophoto/27.jpg",
    "/assets/portfoliophoto/28.jpg",
    "/assets/portfoliophoto/29.jpg",
    "/assets/portfoliophoto/30.jpg",
  ];

  // Додаємо дублікати слайдів
  const duplicatedImages = images.concat(images);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
    });

    return () => {
      // swiper.destroy();
    };
  }, []);

  return (
    
    
    <div className="swiper-main">
    <div className="swiper-container" {...handlers}>
      <div className="swiper-wrapper">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className={`swiper-slide ${index === currentImageIndex ? "active" : ""}`}
            style={{backgroundImage: `url(${image})`}}
          />
        ))}
      </div>
      <div className="swiper-pagination" />
    </div>
    </div>
   
  );
};

export default PortfolioPage;
