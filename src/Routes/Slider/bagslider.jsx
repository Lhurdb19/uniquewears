import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bag-slider-container">
      <Slider {...settings} className="slider">
        <div className="bag-slider">
          <h3>1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosa
          </p>
        </div >

        <div className="bag-slider">
          <h3>2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>6</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

        <div className="bag-slider">
          <h3>8</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora
            consectetur aut laboriosam eius veniam voluptates voluptatibus?
            Corporis, sint molestias.
          </p>
        </div>

      </Slider>
    </div>
  );
}

export default Responsive;
