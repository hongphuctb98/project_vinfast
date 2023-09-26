import React, { useEffect, useState } from "react";
import NavbarComp from "../components/NavbarComp";
import CarSlider from "../components/CarSlider";
import BikesSlider from "../components/BikesSlider";
import FooterCom from "../components/FooterComp";
import AOS from "aos";
import axios from "axios";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavbarComp />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <div className="carousel-caption">
              Cùng bạn bứt phá <br /> mọi giới hạn
            </div>
            <img
              src="https://storage.googleapis.com/vinfast-data-01/slide-home_1666149698.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://storage.googleapis.com/vinfast-data-01/slide-home_1666149698.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <CarSlider />
      <BikesSlider />
      <div className="container py-5">
        <div className="battery-title">
          <h2 className="title">Pin và trạm sạc </h2>
          <p className="description">
            Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp
            dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất
            cả các mô hình cho thuê pin từ trước tới nay trên thế giới.
          </p>
        </div>
        <div className="battery-item">
          <div className="row">
            <div className="col col-lg-6 col-sm-12" data-aos="fade-up">
              <div className="card">
                <img
                  src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-oto_1666149988.png"
                  alt=""
                />
                <div className="card-body text-center">
                  <div className="card-title">Pin và trạm sạc ô tô </div>
                  <button className="btn btn-outline-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-lg-6 col-sm-12" data-aos="fade-down">
              <div className="card">
                <img
                  src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-oto_1666149988.png"
                  alt=""
                />
                <div className="card-body text-center">
                  <div className="card-title">Pin và trạm sạc ô tô </div>
                  <button className="btn btn-outline-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container charging-station pt-5 "
        style={{ backgroundColor: "white", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-6" data-aos="fade-right">
            <div className="charging-station-img d-flex align-items-center justify-content-center">
              <img
                src="https://storage.googleapis.com/vinfast-data-01/thiet-bi-sac-di-dong_1666150099.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-6 d-flex  mt-5" data-aos="fade-left">
            <div className="charging-station-text">
              <h2>Thiết bị sạc di động</h2>
              <p className="py-3">
                VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử
                dụng của khách hàng một cách thuận tiện nhất.
              </p>
              <button className="btn btn-primary">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container guarantee-station mt-5 mb-5 "
        style={{ overflow: "hidden" }}
        data-aos="fade-up"
      >
        <div className=" mt-5 " style={{ width: "40%" }}>
          <div className="guarantee-station-content">
            <div>
              <h2 style={{ fontSize: "36px", fontWeight: "300" }}>
                Bảo hành & Dịch vụ
              </h2>
              <p style={{ fontSize: "14px", lineHeight: "24px" }}>
                VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
                Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối
                đa nhu cầu của Khách hàng.
              </p>
            </div>
            <div>
              <h3>Chính sách bảo hành</h3>
              <p>Bảo hành vượt trội lên đến 10 năm.</p>
              <button className="btn btn-outline-primary">Xem chi tiết</button>
            </div>
            <div>
              <h3>Đặt lịch bảo dưỡng</h3>
              <p>Lên lịch sửa chữa, bảo dưỡng cho xe</p>
              <button className="btn btn-primary">Đặt lịch và bảo dưỡng</button>
            </div>
          </div>
        </div>
      </div>
      <FooterCom />
    </>
  );
}

export default HomePage;
