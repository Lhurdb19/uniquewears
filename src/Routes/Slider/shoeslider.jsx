import React from "react";
import Slider from "react-slick";

function AppendDots() {
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
      }
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "gray",
          border: "1px black solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className="shoe-slider-container">
      <h2>SHOES PRODUCT</h2>
      <Slider {...settings} className="shoe-slider">
        <div className="shoes">
          <h3>1</h3>
          <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/588878/1.jpg?4924" alt="" />
        </div>

        <div className="shoes">
          <h3>2</h3>
          <img src="https://www.fairfurt.com.ng/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-15-at-2.21.46-PM.jpeg" alt="" />
        </div>

        <div className="shoes">
          <h3>3</h3>
          <img src="https://dev.komback.com/wp-content/uploads/2023/10/Shoes-Men.jpg" alt="" />
        </div>

        <div className="shoes">
          <h3>4</h3>
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/353027032/OS/TU/JH/89328219/1408-wht-10-500x500.jpg" alt="" />
        </div>

        <div className="shoes"> 
          <h3>5</h3>
          <img src="https://m.media-amazon.com/images/I/71LU0P4NMML._AC_SL1500_.jpg" alt="" />
        </div>

        <div className="shoes">
          <h3>6</h3>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2022/2/MJ/AO/ZH/73718625/product-jpeg-500x500.jpg" alt="" />
        </div>

        <div className="shoes">
          <h3>7</h3>
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7173062/1.jpg?6506" alt="" />
        </div>

        <div className="shoes">
          <h3>8</h3>
          <img src="https://m.media-amazon.com/images/I/51sDLAxmy3L._AC_UY1000_.jpg" alt="" />
        </div>

        <div className="shoes">
          <h3>9</h3>
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/7/KG/LP/OY/133892487/whatsapp-image-2021-07-18-at-9-24-20-pm-500x500.jpeg" alt="" />
        </div>

        <div className="shoes">
          <h3>10</h3>
          <img src="https://cww.com.ng/wp-content/uploads/2021/02/Minea-Dress-Men-Shoes-New-Classic-Genuine-Leather-Oxford-Shoe-Fashion-Business-Men-S-Suits-Shoes-600x600.jpg" alt="" />
        </div>

      </Slider>
    </div>
  );
}
export default AppendDots;
