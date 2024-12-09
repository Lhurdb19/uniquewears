import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="clothe-slider-container">
      <Slider {...settings} className="clothe-slider">
        
        <div className="clothe">
          
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/8770752/1.jpg?3479" alt="" />
        </div>

        <div className="clothe">
          
          <img src="https://www.alcott.eu/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-alcott-master/default/dw955fa3c7/hi-res/5T0036UOAY14_D005_001.jpg?sw=1000&sh=1350&q=90&strip=false" alt="" />
        </div>

        <div className="clothe">
          
          <img src="https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/shopsy-t-shirt/g/l/o/xl-sp-white-zoom-half-stylesmyth-original-imagetdnfenufhkp.jpeg?q=90&crop=false" alt="" />
        </div>

        <div className="clothe">
          
          <img src="https://ae01.alicdn.com/kf/S31de76bfd82f4d58b0fc334a7da4b3b2n.jpg_960x960.jpg" alt="" />
        </div>

        <div className="clothe">
          
          <img src="https://assets.ajio.com/medias/sys_master/root/20230623/9TX5/6495db91eebac147fce16044/-473Wx593H-441693256-darkblue-MODEL.jpg" alt="" />
        </div>

        <div className="clothe">
        
          <img src="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2239041/1.jpg?0141" alt="" />
        </div>

      </Slider>
    </div>
  );
}

export default MultipleItems;

