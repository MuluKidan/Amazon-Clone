import React from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
        ></img>
      </div>
      {/* below is the section which has different products listed */}
      <div className="home__row">
        <Products
          title="Ski Jacket from MOERDENG"
          price={31.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/41p3CizDpnL._AC_SY460_.jpg"
        />
        <Products
          title="PlayStation PS5 Console-Thug of War Ragnaro Bundle"
          price={559}
          rating={5}
          image="https://m.media-amazon.com/images/I/61SUJDrCTLL._AC_UL480_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Products
          title=" Apple AirPods Pro (nd Generation) Wireless EarBuds"
          price={81}
          rating={4}
          image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg"
        />
        <Products
          title="Cosonsen Women's Dress, Deep V-Neck"
          price={40.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51YGdPjQZCL._MCnd_AC_UL480_FMwebp_QL65_.jpg"
        />
        <Products
          title="Logitech C920xHD Pro Webcam, Full HD"
          price={89}
          rating={4}
          image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          title="Nike Everybody Cushion Crew Training"
          price={14}
          rating={4}
          image="https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_UL480_QL65_.jpg"
        />
        <Products
          title="Nike Everybody Cushion Crew Training"
          price={13.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71PvrUdqq4L._AC_UL480_QL65_.jpg"
        />
      </div>
     
    </div>
  );
}

export default Home;
