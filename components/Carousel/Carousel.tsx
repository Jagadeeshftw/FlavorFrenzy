import { Carousel } from "react-bootstrap";
import { CarouselItem } from "react-bootstrap";
import { CarouselCaption } from "react-bootstrap";
import CarouselItems from "./Carousel-Items";

const CarouselComponent = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <Carousel fade controls interval={5000}>
          {CarouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${item.src.src})` }}
            >
              <CarouselCaption className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    <span>Delicious</span> Restaurant
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    {item.caption}
                  </p>
                  <div>
                    <a
                      href="#menu"
                      className="btn-menu animate__animated animate__fadeInUp scrollto"
                    >
                      Explore Our Menu
                    </a>
                    <a
                      href="#book-a-table"
                      className="btn-book animate__animated animate__fadeInUp scrollto"
                    >
                      Join the Community
                    </a>
                  </div>
                </div>
              </CarouselCaption>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselComponent;
