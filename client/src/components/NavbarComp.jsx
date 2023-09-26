import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import axios from "axios";

function HeaderComp() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [activeBikeIndex, setActiveBikeIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [carList, setCarList] = useState([]);

  const fetchCars = async () => {
    await axios
      .get("http://localhost:3636/api/v1/products")
      .then((res) => {
        setCarList(res.data.cars);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false);

    fetchCars();
  }, [isLogin]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid">
          <div style={{ paddingLeft: "32px", width: "35%" }}>
            <Link className="navbar-brand" to="/">
              <img
                src="https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg"
                alt=""
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/introduce">
                  <button
                    type="button"
                    className="btn btn-outline-dark border border-0"
                  >
                    Giới thiệu
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-dark border border-0"
                >
                  Ô tô
                </button>

                <div className="sub-menu p-4">
                  <div className="sub-menu-title d-flex justify-content-center gap-5">
                    {["Động cơ điện", "Động cơ xăng"].map((item, index) => (
                      <span
                        key={index}
                        onClick={() => setActiveCarIndex(index)}
                        className={index === activeCarIndex ? "active" : ""}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="row d-flex justify-content-center pt-4">
                    {carList?.length > 0 &&
                      carList.map((car, index) => (
                        <Link
                          className="col-md-2 sub-menu-item "
                          to={`/car/${car.product_id}`}
                        >
                          <div className="sub-menu-img">
                            <img
                              src={car.source}
                              alt=""
                              style={{ width: "100%", height: "68px" }}
                            />
                            <p>{car.product_name}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-outline-dark border border-0 "
                  role="button"
                >
                  Xe máy điện
                </button>
                <div className="sub-menu p-4">
                  <div className="sub-menu-title d-flex justify-content-center gap-5">
                    {[
                      "XE MÁY ĐIỆN CAO CẤP",

                      "XE MÁY ĐIỆN TRUNG CẤP",

                      "XE MÁY ĐIỆN PHỔ THÔNG",
                    ].map((item, index) => (
                      <span
                        key={index}
                        onClick={() => setActiveBikeIndex(index)}
                        className={index === activeBikeIndex ? "active" : ""}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="row d-flex justify-content-center pt-4">
                    <div className="col-md-2 sub-menu-item">
                      <div className="sub-menu-img">
                        <img
                          src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
                          alt=""
                        />
                        <p>VF e34</p>
                      </div>
                    </div>
                    <div className="col-md-2 sub-menu-item">
                      <div className="sub-menu-img">
                        <img
                          src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
                          alt=""
                        />
                        <p>VF e34</p>
                      </div>
                    </div>
                    <div className="col-md-2 sub-menu-item">
                      <div className="sub-menu-img">
                        <img
                          src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
                          alt=""
                        />
                        <p>VF e34</p>
                      </div>
                    </div>
                    <div className="col-md-2 sub-menu-item">
                      <div className="sub-menu-img">
                        <img
                          src="https://storage.googleapis.com/vinfast-data-01/Vento_1656326077.png"
                          alt=""
                        />
                        <p>VF e34</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-dark border border-0"
                >
                  Dịch vụ hậu mãi
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-dark border border-0"
                >
                  Pin và trạm sạc
                </button>
              </li>
            </ul>
            <ul
              className="navbar-nav mb-2 mb-lg-0 "
              style={{ paddingRight: "32px" }}
            >
              <li>
                <a className="nav-link" href="#">
                  <i
                    className="fa-regular fa-circle-question"
                    style={{
                      fontSize: "22px",

                      fontWeight: "900",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <i
                    className="fa-solid fa-globe"
                    style={{
                      fontSize: "22px",

                      fontWeight: "900",
                    }}
                  ></i>
                </a>
              </li>

              {!isLogin ? (
                <li className="header-account">
                  <Link className="nav-link " to="/signin">
                    <i
                      className="fa-regular fa-circle-user"
                      style={{
                        fontSize: "22px",
                        fontWeight: "900",
                      }}
                    ></i>
                  </Link>
                </li>
              ) : (
                <li className="header-account">
                  <Link className="nav-link user-icon">
                    <i
                      className="fa-regular fa-circle-user"
                      style={{
                        fontSize: "22px",
                        fontWeight: "900",
                      }}
                    ></i>
                  </Link>
                  <HeaderMenu />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderComp;
