// import React, { Component } from "react";
// import Slider from "react-slick";

import React, { useState } from "react";
import Slider from "react-slick";

export default function BikesSlider() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
    <div className="container pt-5 " style={{ backgroundColor: "#f7f9f9" }}>
      <div className="d-flex bikes-style justify-content-center">
        {[
          "Xe máy điện cao cấp",
          "Xe máy điện trung cấp",
          "Xe máy điện phổ thông",
        ].map((item, index) => (
          <p
            key={index}
            onClick={() => handleItemClick(index)}
            className={index === activeIndex ? "active" : ""}
          >
            {item}
          </p>
        ))}
      </div>
      <Slider {...settings}>
        <div className="card-wrap bikes-card " data-aos="zoom-in">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrap bikes-card " data-aos="zoom-in">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrap bikes-card " data-aos="zoom-in">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrap bikes-card " data-aos="zoom-in">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrap bikes-card">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrap bikes-card">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title bike-name">VENTO</h5>
              <div className="d-flex justify-content-between bike-info">
                <div className="distance">
                  <span>Quãng đường</span>
                  <p>Lên tới 110km/ 1 lần sạc</p>
                </div>
                <div className="speed">
                  <span>Tốc độ</span>
                  <p>Lên tới 80km/h</p>
                </div>
              </div>
              <p className="bike-price">Từ 56.350.000 VND </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary car-deposit">ĐẶT CỌC</button>
                <button className="btn btn-outline-primary car-detail">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
