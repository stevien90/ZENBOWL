import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Carousel = () => {
  const listOfCards = [
    {
      image: "https://i.imgur.com/bHERTBa.png",
      title: "Vietnamese Style",
      info: "Prawns & Mushroom with Leafy Greens & Tomato",
      alt: "viet rice bowl",
    },
    {
      image: "https://i.imgur.com/hJa4QPL.png",
      title: "Japanese Style",
      info: "Gyu(Beef) & Unagi(Eel) with a touch of Eel Sauce",
      alt: "japanese rice bowl",
    },
    {
      image: "https://i.imgur.com/XeGXzq9.png",
      title: "Chinese Style",
      info: "Charosu (BBQ Pork) topped with Green Onions",
      alt: "chinese rice bowl",
    },
    {
      image: "https://i.imgur.com/OU8YTeo.png",
      title: "Thai Style",
      info: "Basil Thai Chili with Poached Egg",
      alt: "thai rice bowl",
    },
    {
      image: "https://i.imgur.com/wetqeY5.png",
      title: "Singapore Style",
      info: "Vegetarian Fried Rice topped with Egg & Thick Soy Sauce",
      alt: "Singapore rice bowl",
    },
    {
      image: "https://i.imgur.com/8pt86Uv.png",
      title: "Indian Style",
      info: "Chicken Briyani mixed with Indian Spices & Curry Powder",
      alt: "Indian rice bowl",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(listOfCards.length / 3)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + Math.ceil(listOfCards.length / 3)) %
        Math.ceil(listOfCards.length / 3)
    );
  };

  const startIndex = currentSlide * 3;

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <h1>What's On The Menu</h1>
      <div className="carousel-inner">
        {/* Render multiple carousel-items, each containing 3 cards */}
        {Array.from({ length: Math.ceil(listOfCards.length / 3) }).map(
          (_, index) => {
            const start = index * 3;
            const currentCards = listOfCards.slice(start, start + 3);
            return (
              <div
                key={index}
                className={`carousel-item ${
                  currentSlide === index ? "active" : ""
                }`}
              >
                <div className="row">
                  {currentCards.map((card, cardIndex) => (
                    <div className="col-md-4" key={cardIndex}>
                      <Card
                        image={card.image}
                        title={card.title}
                        info={card.info}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Navigation buttons at the bottom */}
      <div className="carousel-controls">
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="button-container">
        <Link className="hero-btn hero-btn__on-yellow" to="/subscription">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
