import React from "react";

interface CarouselItemProps {
  image: any;
  active: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, active }) => {
  console.log(image);
  return (
    <div
      className={active ? "carousel-item active" : "carousel-item"}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">
            Welcome to <span>FoodChain</span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Discover the future of food delivery with FoodChain. Our
            decentralized platform connects you directly with local farmers and
            chefs, ensuring fresh, high-quality meals delivered to your
            doorstep. Experience transparency, sustainability, and a seamless
            culinary journey with every order.
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
      </div>
    </div>
  );
};

export default CarouselItem;
