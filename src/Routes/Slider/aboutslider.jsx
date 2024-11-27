import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="slides">
        <div className="slider-1">
          <h3>1 JULIA</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi
            asperiores repudiandae harum placeat aut praesentium nulla vitae
            repellat expedita.
          </p>
        </div>
        <div className="slider-2">
          <h3>2 JAVA</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            possimus doloribus molestiae porro? Quis cumque eum neque maiores
            illum possimus aliquid, exercitationem culpa molestiae a officia?
            Velit hic iure cumque!
          </p>
        </div>
        <div className="slider-3">
          <h3>3 REACT NATIVE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolor fuga laborum! Ipsum illo dolor fugiat assumenda eveniet sunt
            dolore debitis perferendis? Deleniti fuga molestias voluptates hic
            consectetur ex inventore?
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
