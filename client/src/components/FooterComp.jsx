import React from "react";

function FooterCom() {
  return (
    <div className="footer-com p-4">
      <div className="row">
        <div className="col-5">
          <div className="logo">
            <img
              src="https://vinfastauto.com/themes/porto/img/logo-footer.svg"
              alt="CÔNG TY TNHH KINH DOANH THƯƠNG MẠI VÀ DỊCH VỤ VINFAST"
              className=""
            />
          </div>
          <div className="info mt-4" style={{ maxWidth: "500px" }}>
            <p>CÔNG TY TNHH KINH DOANH THƯƠNG MẠI VÀ DỊCH VỤ VINFAST</p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "150%",
                letterSpacing: "-.02em",
                color: "#3c3c3c",
              }}
            >
              <b>MST/MSDN</b>: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
              01/10/2019 và các lần thay đổi tiếp theo.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "150%",
                letterSpacing: "-.02em",
                color: "#3c3c3c",
              }}
            >
              <b>Địa chỉ trụ sở chính</b>: Số 7, đường Bằng Lăng 1, Khu đô thị
              Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà
              Nội, Việt Nam
            </p>
          </div>
        </div>
        <div className="col-7 d-flex flex-column">
          <div className="row">
            <div className="col-3">
              <ul className="list-unstyled d-flex flex-column footer-menu">
                <li>Về VIFAST</li>
                <li>Về VINGROUP</li>
                <li>Cộng đồng VINFAST toàn cầu</li>
                <li>Tin tức</li>
                <li>Ưu đãi</li>
                <li>Showroom & đại lý</li>
                <li>Điều khoản chính sách</li>
              </ul>
            </div>
            <div className="col-4">
              <div>
                <p>Hotline</p>
                <ul className="list-unstyled footer-menu">
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <span style={{ color: "#1464f4", fontSize: "15px" }}>
                      0369042128
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <span style={{ color: "#1464f4", fontSize: "15px" }}>
                      GcF5Y@example.com
                    </span>
                  </li>
                </ul>
                <p>Liên hệ </p>
              </div>
              <div>
                <span>Kết nối với VINFAST</span>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ marginRight: "10px" }}>
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-5 communication-preference">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: " -.02em",
                }}
              >
                Đăng ký nhận thông tin
              </p>
              <p>
                ĐĂNG KÝ NHẬN THÔNG TIN CHƯƠNG TRÌNH KHUYẾN MÃI, DỊCH VỤ VINFAST.
              </p>
              <div
                className="p-2 bg-white d-flex"
                style={{ marginBottom: "24px" }}
              >
                <input
                  type="text"
                  style={{ border: "none", fontSize: "12px", flex: "1" }}
                  placeholder="Nhập Email của bạn"
                />
                <button
                  className="btn btn-primary"
                  style={{ width: "30%", fontSize: "12px" }}
                >
                  Đăng ký
                </button>
              </div>
              <p>
                BẰNG CÁCH ĐĂNG KÝ, QUÝ KHÁCH XÁC NHẬN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý VỚI
                <a href=""> CHÍNH SÁCH QUYỀN RIÊNG TƯ</a> CỦA VINFAST.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex ecosystem justify-content-between">
              <div className="d-flex gap-3 align-items-center">
                <b>Hệ sinh thái </b>
                <div className="d-flex gap-2  ">
                  <span className="ecosystem-item">Vinhomes</span>
                  <span className="ecosystem-item">Vinmec</span>
                  <span className="ecosystem-item">Vsmart</span>
                  <span className="ecosystem-item">Vinpearl</span>
                </div>
              </div>

              <dir className="d-flex gap-3">
                <div>
                  <img
                    src="https://vinfastauto.com/themes/porto/img/bct.svg"
                    alt=""
                  />
                </div>
                <div
                  className="copy-right d-flex flex-column align-items-end pt-2 "
                  style={{ fontSize: "12px" }}
                >
                  <span>VinFast. All rights reserved. </span>
                  <span>© Copyright 2020</span>
                </div>
              </dir>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCom;
