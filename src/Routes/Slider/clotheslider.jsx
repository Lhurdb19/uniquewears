import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className="clothe-slider-container">
      <h2>Men's Jeans</h2>
      <Slider {...settings} className="clothe-slider">
        <div className="clothe">
          <h3>1</h3>

          <img src="https://assets.timberland.com/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1719386387/TB0A55S7BJ5-HERO/Mens-Timberland-PRO-Ballast-Athletic-Fit-Flex-Denim-Jeans.png" alt="" />
        </div>
        <div className="clothe">
          <h3>2</h3>
          
          <img src="https://lh4.googleusercontent.com/proxy/Jd3YdytQhZPiX6iC3qzQSg5tY-D6pxzPnV6c6y-m7xCSlN1GucpFbHtAQA14CJzY3l-Avwzvcx4BmhvQaGBWSCKJNzCKzJdOdfIZFasbLVG3LctPsvZ4L3jd0vY_DswmnFvpo7ezF80BPK1-" alt="" />
        </div>

        <div className="clothe">
          <h3>3</h3>
          <img src="https://images.blue-tomato.com/is/image/bluetomato/304718022_front.jpg-nC5VzbWx5h1wO9HXqN_HOgxD2jM/Baggy+Jeans.jpg?$b8$" alt="" />
        </div>

        <div className="clothe">
          <h3>4</h3>
          <img src="https://img.guess.com/image/upload/f_auto,q_auto,dpr_1.5,w_500,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/9751/G_Site_Men_ContentCenter_DenimGuide_9751_02" alt="" />
        </div>

        <div className="clothe">
          <h3>5</h3>
          <img src="https://www.alcott.eu/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-alcott-master/default/dw955fa3c7/hi-res/5T0036UOAY14_D005_001.jpg?sw=1000&sh=1350&q=90&strip=false" alt="" />
        </div>

        <div className="clothe">
          <h3>6</h3>
          <img src="https://m.media-amazon.com/images/I/81oLHw8Ey5L._AC_UL1500_.jpg" alt="" />
        </div>

        <div className="clothe">
          <h3>7</h3>
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/1868272/1.jpg?8655" alt="" />
        </div>

        <div className="clothe">
          <h3>8</h3>
          <img src="https://assets.ajio.com/medias/sys_master/root/20230623/9TX5/6495db91eebac147fce16044/-473Wx593H-441693256-darkblue-MODEL.jpg" alt="" />
        </div>

        <div className="clothe">
          <h3>9</h3>
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/288359/1.jpg?3148" alt="" />
        </div>

      </Slider>
    </div>
  );
}

export default MultipleItems;

