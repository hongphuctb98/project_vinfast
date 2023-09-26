import React from "react";

import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import Slider from "react-slick";

function Introduce() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <>
      <NavbarComp />
      <div className="introduce">
        <div className="banner w-100">
          <video width="100%" playsinline autoPlay loop muted>
            <source src="../../public/video/VinFastcars.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="intro d-flex my-5 " style={{ paddingLeft: "100px" }}>
          <div className="title m-5" style={{ width: "42%" }}>
            <h1 style={{ fontWeight: "300" }}>
              Giới thiệu về <br />
              <span style={{ fontSize: "50px", lineHeight: "70px" }}>
                Công ty VinFast
              </span>
            </h1>
            <span>
              VinFast là công ty thành viên thuộc tập đoàn Vingroup, một trong
              những Tập đoàn Kinh tế tư nhân đa ngành lớn nhất Châu Á. Với triết
              lý “Đặt khách hàng làm trọng tâm”, VinFast không ngừng sáng tạo để
              tạo ra các sản phẩm đẳng cấp và trải nghiệm xuất sắc cho mọi
              người.
            </span>
          </div>
          <div className="background-card">
            <img
              src="https://storage.googleapis.com/vinfast-data-01/VF9NeptuneGray_1664352398.png"
              alt=""
              className="w-100"
            />
          </div>
        </div>

        <div className="vision container my-5 ">
          <div className="vision-img">
            <img
              src="https://storage.googleapis.com/vinfast-data-01/VinFast%20-%20Future%20of%20mobility%20-%20Vf8&9%20(1)%20(1)_1666170465.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="vision-content px-5">
            <div className="vision-item">
              <p>Tầm nhìn</p>
              <span>
                Trở thành thương hiệu xe điện thông minh thúc đẩy mạnh mẽ cuộc
                cách mạng xe điện toàn cầu.
              </span>
            </div>
            <div className="vision-item">
              <p>Sứ mệnh </p>
              <span>Vì một tương lai xanh cho mọi người</span>
            </div>
            <div className="vision-item">
              <p>Triết lý thương hiệu</p>
              <span>
                Đặt khách hàng làm trọng tâm, VinFast không ngừng sáng tạo để
                tạo ra các sản phẩm đẳng cấp và trải nghiệm xuất sắc cho mọi
                người.
              </span>
            </div>
            <div className="vision-item">
              <p>Giá trị cốt lõi</p>
              <span>Sản phẩm đẳng cấp, giá tốt, hậu mãi vượt trội.</span>
            </div>
          </div>
        </div>

        <div className="foot-print container my-5 ">
          <div className="foot-print-title text-center mb-5">
            <p style={{ fontSize: "56px" }}>Dấu chân toàn cầu</p>
            <p className=" m-auto" style={{ fontSize: "16px", width: "57%" }}>
              VinFast đã nhanh chóng thiết lập sự hiện diện toàn cầu, thu hút
              những tài năng tốt nhất từ khắp nơi trên thế giới và hợp tác với
              một số thương hiệu mang tính biểu tượng nhất trong ngành Ô tô.
            </p>
          </div>

          <div className="foot-print-images">
            <div className="row">
              <div className="col-lg-6  col-md-12 col-sm-12">
                <img
                  src="https://storage.googleapis.com/vinfast-data-01/dau-chan-vf8_1664352740.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6  col-md-12 col-sm-12">
                <img
                  src="https://storage.googleapis.com/vinfast-data-01/dau-chan-vf9_1664352768.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container history my-5 px-5">
          <h2>Lịch sử thương hiệu </h2>
          <div className="history-content">
            <Slider {...settings}>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="card" style={{ border: "none" }}>
                  <img
                    src="https://storage.googleapis.com/vinfast-data-01/vf9-full-size_1693250642.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">12.07.2021</h5>
                    <p className="card-text">
                      VinFast chính thức hoạt động tại 5 thị trường ở Bắc Mỹ và
                      Châu Âu.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="achievements container my-5 p-5 bg-white  ">
          <div className="row">
            <div className="col-7">
              <img
                src="https://storage.googleapis.com/vinfast-data-01/giai-thuong_1664353512.png"
                alt=""
              />
            </div>
            <div className="col-5 achievements-content">
              <div className="">
                <h2>Giải thưởng</h2>
                <p>2022</p>
                <span>
                  VinFast tiếp tục được vinh danh "Xe được yêu thích nhất phân
                  khúc" cho cả 4 dòng xe góm Fadil, Lux A2.0, Lux SA2.0, VF e34
                  tại bình chọn "Xe của năm 2022" bởi cộng đồng OTOFUN và
                  OTOSAIGON.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </>
  );
}

export default Introduce;
