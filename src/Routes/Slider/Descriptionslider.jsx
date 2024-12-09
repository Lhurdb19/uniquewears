import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider className="settings"
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings} >
        <div key={1} className="describe">
        <div className="text">
          <h3>Take your bussiness online</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
        </div>
        </div>
        <div key={2}className="describe">
        <div className="text">
          <h3>Minimal and modern products</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
        </div>
        </div>
        <div key={3}className="describe">
            <div className="text">
          <h3>Best outfit you will find</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
            </div>
        </div>
        <div key={4}className="describe">
            <div className="text">
          <h3>Do this with love</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
            </div>
        </div>
        <div key={5}className="describe">
            <div className="text" >
          <h3>For dedicated people</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
            </div>
        </div>
        <div key={6} className="describe">
        <div className="text">
          <h3>Let people see how good you look</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt doloribus laborum pariatur accusamus iste similique, esse laudantium quae ad.
          </p>
        </div>
        </div>
      </Slider>
      <div style={{ textAlign: "start" }} className="prevnext-button">
        <button className="button" onClick={previous}>
        <FaArrowLeftLong />
        </button>
        <button className="button" onClick={next}>
        <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
