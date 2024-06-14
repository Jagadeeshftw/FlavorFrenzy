"use client";
import { useEffect } from "react";
import carousel1 from "../../src/assets/img/Carousel/Carousel1.jpg";
import carousel2 from "../../src/assets/img/Carousel/Carousel2.jpg";
import carousel3 from "../../src/assets/img/Carousel/Carousel3.jpg";
import carousel4 from "../../src/assets/img/Carousel/Carousel4.jpg";
import carousel5 from "../../src/assets/img/Carousel/Carousel5.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CarouselItem from "./Carousel-Items";

const Carousel = () => {
  console.log("Carousel component rendered");

  useEffect(() => {
    console.log("Running useEffect");

    const script = document.createElement("script");
    script.src = "/js/carousel-setup.js";
    script.async = true;
    document.body.appendChild(script);
    console.log("Script added");

    return () => {
      console.log("Cleaning up script");
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>
          <div className="carousel-inner" role="listbox">
            <CarouselItem image={carousel1} active={true} />
            <CarouselItem image={carousel2} active={false} />
            <CarouselItem image={carousel3} active={false} />
            <CarouselItem image={carousel4} active={false} />
            <CarouselItem image={carousel5} active={false} />
            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <BsChevronLeft
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <BsChevronRight
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
