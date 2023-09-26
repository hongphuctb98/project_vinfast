import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function SelectCarType({ activeTab }) {
  const [active, setActive] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [carList, setCarList] = useState([]);
  const [car, setCar] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const BASE_API = "http://localhost:3636/api/v1";
  let order = useSelector((state) => state.order);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false);
  }, [isLogin]);

  const fetchCars = async () => {
    await axios
      .get(`${BASE_API}/products`)
      .then((res) => {
        setCarList(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchOneCar = async () => {
    let { id } = params;
    await axios
      .post(`${BASE_API}/productdetail`, { id, ...order })
      .then((res) => {
        setCar(res.data.car[0]);
      })
      .catch((err) => console.log(err));
  };

  const handleCarType = (id) => {
    navigate(`/deposit/${id}`);
  };

  useEffect(() => {
    fetchCars();
    fetchOneCar();
  }, [params.id, order]);

  return (
    <>
      <div
        className="col-9 tab-left"
        style={{ height: "100vh", position: "fixed" }}
      >
        <div
          className="header d-flex justify-content-between align-items-center ps-5 pe-3 "
          style={{ height: "84px" }}
        >
          <Link className="logo" to="/">
            <img
              src="https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwc01e2061/images/vfast/logo.svg"
              alt=""
            />
          </Link>
          {!isLogin ? (
            <Link
              className="text-decoration-none "
              style={{ color: "black", fontSize: "20px" }}
              to="/signin"
            >
              <span>Tài khoản</span>
            </Link>
          ) : (
            <div className="header-account ">
              <span className="user-icon" style={{ fontSize: "24px" }}>
                <i className="fa-solid fa-circle-user"></i>
              </span>

              <HeaderMenu />
            </div>
          )}
        </div>
        <div className="content ps-2">
          <div className="row justify-content-center">
            {activeTab === "select-car-type" && (
              <div className="col-2 car-asset">
                <ul className="list-unstyled car-deposit-list pt-4">
                  {carList?.length > 0 &&
                    carList.map((car, index) => (
                      <div
                        className="text-decoration-none "
                        style={{ color: "black" }}
                        onClick={() => handleCarType(car.product_id)}
                      >
                        <li className="mx-3 text-center car-deposit-item">
                          <img src={car.source} alt="" className="w-100" />
                          <p>{car?.product_name}</p>
                        </li>
                      </div>
                    ))}
                </ul>
              </div>
            )}

            <div className={` car-select col-10  `}>
              <div
                className="car-select-nav d-flex justify-content-center "
                style={{ fontSize: "20px" }}
              >
                {["Nội thất", "Ngoại thất"].map((item, index) => (
                  <p
                    onClick={() => setActive(index)}
                    className={active === index ? "active" : ""}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="pt-5">
                <img src={car && car.source} alt="" className="w-100" />
              </div>
              <div className="car-info d-flex justify-content-around pt-5">
                <div className="car-info-item">
                  <span>134 HP/100 kW</span>
                  <p>Công suất tối đa</p>
                </div>
                <div className="car-info-item">
                  <span>&gt; 300 km</span>
                  <p>Quãng đường di chuyển 1 lần sạc đầy</p>
                </div>
                <div className="car-info-item">
                  <span>2.514 mm</span>
                  <p>Chiều dài cơ sở</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectCarType;
