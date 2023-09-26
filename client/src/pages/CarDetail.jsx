import React, { useEffect, useState } from "react";

import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import "aos/dist/aos.css";
import AOS from "aos";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../helpers/index";

function CarDetail() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const params = useParams();
  const [car, setCar] = useState({});
  const [colorList, setColorList] = useState([]);
  const [deposit_price, setDeposit_price] = useState("");

  let images = colorList.map((item, index) => ({
    original: item.source,
    thumbnail: item.source,
  }));

  const fetchOneCar = async () => {
    let carId = params.id;
    await axios
      .get(`http://localhost:3636/api/v1/products/${carId}`)
      .then((res) => {
        console.log(res.data.car);
        setCar(res.data.car);
        setColorList(res.data.car.sources);
        setDeposit_price(
          formatCurrency(res.data.car.versions[0].deposit_price)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOneCar();
  }, [params.id]);
  return (
    <div>
      <NavbarComp />
      <div className="cardetail">
        <div className="top-main-bg">
          <img
            src={car?.main_source ? car.main_source : ""}
            alt=""
            className="w-100 "
          />
          <div className="top-main-content">
            <div className="top-car-logo m-auto">
              <img
                src={car?.logo_source ? car.logo_source : ""}
                alt=""
                className="w-100 "
              />
            </div>
            <div className="top-car-info">
              <p>Cùng bạn bứt phá mọi giới hạn </p>
              <Link
                className="deposit-btn m-auto text-decoration-none"
                to={`/deposit/${car?.product_id}`}
              >
                <span style={{ fontWeight: "400" }}>Đặt cọc</span>
                <span style={{ fontWeight: "500", fontSize: "16px" }}>
                  {deposit_price}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="container-fluid m-auto mb-5 bg-white"
          style={{ width: "95%" }}
        >
          <section className="car-info-setion pt-5">
            <div className="row gx-5">
              <div
                className="col-lg-4 car-info-box1 pt-5"
                data-aos="fade-right"
              >
                <h2 className="fs-1 fw-light">
                  Mẫu C-SUV với <br /> thiết kế tinh tế
                </h2>
                <p className="pt-3">
                  VinFast ra mắt VF e34, mẫu C-SUV với thiết kế tinh tế, thân
                  thiện với người dùng cùng loạt công nghệ thông minh hiện đại,
                  hứa hẹn nâng tầm trải nghiệm Khách hàng.
                </p>
                {car?.versions?.length > 0 &&
                  car?.versions.map((e, index) => (
                    <div>
                      <p className="fw-normal ps-3">{e.name}</p>
                      <div
                        className="d-flex justify-content-around  "
                        style={{ fontSize: "14px" }}
                      >
                        <p>
                          GIÁ XE KHÔNG GỒM PIN <br />
                          {formatCurrency(e.price)}
                        </p>
                        <p>
                          GIÁ XE GỒM PIN <br />
                          {formatCurrency(e.price + e.battery_price * 50)}
                        </p>
                      </div>
                    </div>
                  ))}

                <span style={{ fontSize: "12px" }}>
                  Đã bao gồm VAT, tặng gói ADAS và Smart Service giá 60 triệu.
                </span>
                <Link
                  className="deposit-btn mt-3  text-decoration-none"
                  to={`/deposit/${car?.product_id}`}
                >
                  <span style={{ fontWeight: "400" }}>Đặt cọc</span>
                  <span style={{ fontWeight: "500", fontSize: "16px" }}>
                    {deposit_price}
                  </span>
                </Link>
              </div>
              <div className="col-lg-4 car-info-box2">
                <div>
                  <img
                    src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw27386d10/images/PDP/vfe34/img-banner-top.webp"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-4 car-info-box3 pt-5" data-aos="fade-left">
                <ul className="car-info-list  list-unstyled text-center">
                  <li className="car-info-item">
                    <span>
                      {car?.wattage} kW - {(car?.wattage * 1.341).toFixed()} hp
                    </span>
                    <p>Công suất tối đa</p>
                  </li>
                  <li className="car-info-item">
                    <span>242 Nm</span>
                    <p>Mô-men xoắn cực đại</p>
                  </li>
                  <li className="car-info-item">
                    <span>
                      ~
                      {(
                        (car?.battery_capacity / car?.consumption) *
                        1000
                      ).toFixed(1)}{" "}
                      Km*
                    </span>
                    <p>Quãng đường di chuyển 1 lần sạc đầy (NEDC)</p>
                  </li>
                  <li className="car-info-item">
                    <span>{car?.air_bag}</span>
                    <p>Túi khí</p>
                  </li>
                  <li className="car-info-item">
                    <span>{car?.guarantee} năm</span>
                    <p>Bảo hành cao nhất tại Việt Nam</p>
                  </li>
                  <li className="car-info-item">
                    <span>{car?.seat} ghế</span>
                    <p>Số ghế ngồi</p>
                  </li>
                  <li className="car-info-item">
                    <span>{car?.consumption} Wh/km</span>
                    <p>Mức tiêu thụ nhiên liệu công khai</p>
                  </li>
                </ul>
                <div
                  className="car-info-des m-auto"
                  style={{
                    width: "90%",
                    fontSize: "12px",
                    color: "#8a8a8a",
                    lineHeight: "1.5",
                  }}
                >
                  Các thông tin sản phẩm có thể thay đổi mà không cần báo trước
                  <br />
                  * Xe sản xuất sau tháng 3, sẽ tự động được upgrade range mới
                  <br />* Xe sản xuất từ tháng 1 – tháng 3 (dùng pin LFP mới),
                  phải đến xưởng dịch vụ để update
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" color-setion  m-auto mb-5" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-3">
              <div className="title fs-2 ">
                Ngoại thất hiện đại <br /> thu hút mọi ánh nhìn
              </div>
              <div className="desc my-4">
                <p>
                  Ngôn ngữ thiết kế "Cân bằng động” giúp xe luôn nổi bật, hiện
                  đại và hướng tới tương lai. Các đường nét cân đối tạo nên sự
                  hài hoà, tượng trưng cho sự chuyển động tiến tới tương lai.
                </p>
                <p>
                  Thiết kế tăng cường tính khí động học cho khả năng vận hành
                  linh hoạt và tầm nhìn rộng mở. Ánh sáng toả ra từ logo VinFast
                  vuốt ra các góc tạo cảm giác phóng khoáng và sang trọng.
                </p>
              </div>
              <Link
                className="deposit-btn mt-3 text-decoration-none"
                to={`/deposit/${car?.product_id}`}
              >
                <span style={{ fontWeight: "400" }}>Đặt cọc</span>
                <span style={{ fontWeight: "500", fontSize: "16px" }}>
                  {deposit_price}
                </span>
              </Link>
            </div>
            <div className="col-9">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
              />
            </div>
          </div>
        </div>
        <div className="interior-section m-auto mb-5" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-3">
              <div className="title fs-2 ">
                Nội thất rộng rãi,
                <br /> tiện nghi và hiện đại
              </div>
              <div className="desc my-4">
                <p>
                  Không gian thoáng đãng nhờ động cơ điện và hệ thống pin tinh
                  giản đặt dưới sàn xe, đảm bảo sự thoải mái cho hành khách trên
                  xe.
                </p>
                <p>
                  Khoang lái được bố trí tối ưu với thiết kế hơi hướng tương
                  lai, giúp trải nghiệm lái hiệu quả và an toàn hơn.
                </p>
              </div>
              <div>
                <button
                  className="btn btn-outline-primary car-detail "
                  style={{ width: "282px", maxWidth: "100%" }}
                >
                  Khám phá nội thất
                </button>
              </div>
            </div>
            <div className="col-9">
              <div>
                <img
                  src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw261ff57f/images/PDP/vfe34/vfe34-preview.webp"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="technology-section m-auto mb-5"
          style={{ width: "95%" }}
        >
          <div className="d-flex align-items-end  ">
            <div className="title fs-2 mb-4 " style={{ width: "499px" }}>
              Tương tác thông minh, <br /> trải nghiệm thú vị.
            </div>
            <p>
              Trải nghiệm chiếc xe điện hiện đại và thông minh vượt trội cùng
              loạt tính năng hỗ trợ người lái về an toàn, điều hướng - dẫn
              đường, dịch vụ thông minh cùng trợ lý ảo hỗ trợ tương tác tự nhiên
              bằng Tiếng Việt đa vùng miền.
            </p>
          </div>
          <div>
            <>
              <ul
                className="nav nav-underline justify-content-around"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Trợ lý ảo
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Ứng dụng VinFast
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Dịch vụ thông minh
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#disabled-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="disabled-tab-pane"
                    aria-selected="false"
                    disabled=""
                  >
                    eSim
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  <div className="row mt-3">
                    <div className="col-4">
                      <ol className="list-group pt-3 ">
                        <li className="list-group-item ">
                          <span className=" me-auto">
                            1. Điều khiển xe thông minh
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span className=" me-auto">
                            2. Điều hướng - Dẫn đường
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span className=" me-auto">
                            3. Giải trí đa phương tiện
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span className=" me-auto">
                            4. Tác vụ với điện thoại
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span className=" me-auto">
                            5. Hỏi - Đáp trợ lý ảo
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span className=" me-auto">6. Thông tin xe</span>
                        </li>

                        <li className="list-group-item ">
                          <span className=" me-auto">
                            7. Trò chuyện ngẫu hứng
                          </span>
                        </li>
                        <li className="list-group-item ">
                          <span
                            className=" me-auto"
                            style={{
                              color: "#1464f4",
                              cursor: "pointer",
                              fontSize: "16px",
                            }}
                          >
                            <i className="fa-solid fa-file-lines"></i> Thông tin
                            thường thức
                          </span>
                        </li>
                      </ol>
                    </div>
                    <div className="col-8">
                      <div>
                        <img
                          src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw1e7d9b81/images/PDP/vfe34/application-mb.webp"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex={0}
                >
                  <div>
                    <video autoPlay controls loop className="w-100">
                      <source
                        src="https://static-bucket-sfcc.vinfastauto.com/01_Canh_bao_lech_lan.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex={0}
                >
                  <div>
                    <video autoPlay controls loop className="w-100">
                      <source
                        src="https://static-bucket-sfcc.vinfastauto.com/01_Canh_bao_lech_lan.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="disabled-tab-pane"
                  role="tabpanel"
                  aria-labelledby="disabled-tab"
                  tabIndex={0}
                >
                  <div>
                    <video autoPlay controls loop className="w-100">
                      <source
                        src="https://static-bucket-sfcc.vinfastauto.com/01_Canh_bao_lech_lan.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
        <div
          className="advanced-system-section m-auto mb-5"
          style={{ width: "95%" }}
        >
          <div className="row">
            <div className="col-7 tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex={0}
              >
                <div>
                  <video controls loop className="w-100">
                    <source
                      src="https://static-bucket-sfcc.vinfastauto.com/01_Canh_bao_lech_lan.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex={0}
              >
                <div>
                  <video controls loop className="w-100">
                    <source
                      src="https://static-bucket-sfcc.vinfastauto.com/02_Canh_bao_phat_hien_diem_mu.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-disabled"
                role="tabpanel"
                aria-labelledby="v-pills-disabled-tab"
                tabIndex={0}
              >
                <div>
                  <video controls loop className="w-100">
                    <source
                      src="https://static-bucket-sfcc.vinfastauto.com/03_Canh_bao_mo_xe_trim.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabIndex={0}
              >
                <div>
                  <video controls loop className="w-100">
                    <source
                      src="https://static-bucket-sfcc.vinfastauto.com/04_Canh_bao_giao_thong_phia_sau.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabIndex={0}
              >
                <div>
                  <video controls loop className="w-100">
                    <source
                      src="https://static-bucket-sfcc.vinfastauto.com/05_Ho_tro_do_xe.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            <div className="col-5 fs-5" style={{ paddingLeft: "100px" }}>
              <div className="fs-1">
                Hệ thống trợ lái <br /> nâng cao
              </div>
              <p className="desc my-3" style={{ fontSize: "15px" }}>
                Ứng dụng công nghệ và trang thiết bị hiện đại nhất, hệ thống trợ
                lái nâng cao VinFast đem lại trải nghiệm lái thư thái, dễ dàng
                để bạn an tâm tận hưởng cuộc sống.
              </p>
              <div
                className="nav nav-pills flex-column "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link text-left active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Cảnh báo chệch làn
                </button>
                <button
                  className="nav-link text-left"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Cảnh báo điểm mù
                </button>
                <button
                  className="nav-link text-left"
                  id="v-pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-disabled"
                  aria-selected="false"
                  disabled=""
                >
                  Cảnh báo luồng giao thông khi mở cửa
                </button>
                <button
                  className="nav-link text-left"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Cảnh báo phương tiện cắt ngang khi lùi
                </button>
                <button
                  className="nav-link text-left"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Hỗ trợ đỗ xe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="battery-section m-auto mb-5" style={{ width: "95%" }}>
          <div className="title fs-1" style={{ fontWeight: "400" }}>
            Trạm sạc và Pin
          </div>
          <p className="desc">
            VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng{" "}
            <br />
            của Khách hàng một cách thuận tiện nhất.
          </p>
          <div className="row ">
            <div className="col-4">
              <div className="mb-3">
                <img
                  src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwba5e1add/images/PDP/vfe34/charging-system.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="content px-2">
                <h3>Quy hoạch hệ thống trạm sạc</h3>
                <ul className="ps-4 " style={{ fontSize: "15px" }}>
                  <li>
                    Phủ khắp 63/63 tỉnh thành và 100% cao tốc, quốc lộ huyết
                    mạch.
                  </li>
                  <li>150.000 cổng sạc cho ô tô và xe máy điện.</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <img
                  src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwba5e1add/images/PDP/vfe34/charging-system.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="content px-2">
                <h3>Quy hoạch hệ thống trạm sạc</h3>
                <ul className="ps-4 " style={{ fontSize: "15px" }}>
                  <li>
                    Phủ khắp 63/63 tỉnh thành và 100% cao tốc, quốc lộ huyết
                    mạch.
                  </li>
                  <li>150.000 cổng sạc cho ô tô và xe máy điện.</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <img
                  src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwba5e1add/images/PDP/vfe34/charging-system.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="content px-2">
                <h3>Quy hoạch hệ thống trạm sạc</h3>
                <ul className="ps-4 " style={{ fontSize: "15px" }}>
                  <li>
                    Phủ khắp 63/63 tỉnh thành và 100% cao tốc, quốc lộ huyết
                    mạch.
                  </li>
                  <li>150.000 cổng sạc cho ô tô và xe máy điện.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}

export default CarDetail;
