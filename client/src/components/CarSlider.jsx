import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../helpers";
import Slider from "react-slick";
export default function CarSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  const fetchAll = async () => {
    await axios
      .get("http://localhost:3636/api/v1/products")
      .then((res) => setCarList(res.data.cars))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchAll();
  }, []);
  const handleDeposit = (id) => {
    navigate(`/deposit/${id}`);
  };
  const handleDetail = (id) => {
    navigate(`/car/${id}`);
  };
  return (
    <div className="container pt-5" style={{ backgroundColor: "#f7f9f9" }}>
      <Slider {...settings}>
        {carList?.length > 0 &&
          carList.map((car, i) => (
            <div className="card-wrap car-card" key={i}>
              <div className="card" style={{ width: "100%" }}>
                <img src={car.source} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title car-name">{car.product_name}</h5>
                  <h3 className="description">Cùng bứt phá mọi giới han</h3>
                  <div className="d-flex justify-content-between car-info">
                    <div className="vehicles">
                      <span>Dòng xe</span>
                      <p>SUV</p>
                    </div>
                    <div className="seat">
                      <span>Số chỗ ngồi</span>
                      <p>{car.seat}</p>
                    </div>
                    <div className="distance">
                      <span>Quãng đường</span>
                      <p>318.6 km</p>
                    </div>
                  </div>
                  <p className="car-price">Từ {formatCurrency(car.price)} </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary car-deposit"
                      onClick={() => handleDeposit(car.product_id)}
                    >
                      ĐẶT CỌC
                    </button>
                    <button
                      className="btn btn-outline-primary car-detail"
                      onClick={() => handleDetail(car.product_id)}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
