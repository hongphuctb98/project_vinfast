import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SelectCarType from "../components/SelectCarType";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import axios from "axios";
import { useSelector } from "react-redux";

function DepositDetail() {
  const [activeTab, setActiveTab] = useState("select-car-type");
  const [car, setCar] = useState({});
  const params = useParams();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const BASE_API = "http://localhost:3636/api/v1/products";
  const fetchOneCar = async () => {
    let carId = params.id;
    await axios
      .get(`${BASE_API}/${carId}`)
      .then((res) => {
        setCar(res.data.car);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOneCar();
  }, [params.id]);

  return (
    <>
      <div className="deposit-product-detail ">
        <div className="row">
          <SelectCarType activeTab={activeTab} />
          <div
            className="col-3 bg-white tab-right"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              minHeight: "100vh",
            }}
          >
            <>
              <ul className="nav select-car-step d-flex justify-content-around pt-4">
                <li
                  className={`nav-item ${
                    activeTab === "select-car-type" ? "active" : ""
                  }`}
                >
                  <div
                    data-bs-toggle="tab"
                    data-bs-target="#select-car-type"
                    aria-selected={activeTab === "select-car-type"}
                    onClick={() => handleTabClick("select-car-type")}
                    className="d-flex gap-1 align-items-center justify-content-center"
                  >
                    <p className="step">1</p>
                    Lựa chọn xe
                  </div>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "info-tab-pane" ? "active" : ""
                  }`}
                >
                  <div
                    data-bs-toggle="tab"
                    data-bs-target="#info-tab-pane"
                    aria-selected={activeTab === "info-tab-pane"}
                    onClick={() => handleTabClick("info-tab-pane")}
                    className="d-flex gap-1 align-items-center justify-content-center"
                  >
                    <p className="step">2</p>
                    Nhập thông tin
                  </div>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "deposit-tab-pane" ? "active" : ""
                  }`}
                >
                  <div
                    data-bs-toggle="tab"
                    data-bs-target="#deposit-tab-pane"
                    aria-selected={activeTab === "deposit-tab-pane"}
                    onClick={() => handleTabClick("deposit-tab-pane")}
                    className="d-flex gap-1 align-items-center justify-content-center"
                  >
                    <p className="step">3</p>
                    Đặt cọc
                  </div>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "select-car-type" ? "show active" : ""
                  } mt-4`}
                  id="select-car-type"
                >
                  <Step1 setActiveTab={setActiveTab} />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "info-tab-pane" ? "show active" : ""
                  } mt-4`}
                  id="info-tab-pane"
                >
                  <Step2 setActiveTab={setActiveTab} />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "deposit-tab-pane" ? "show active" : ""
                  } mt-4`}
                  id="deposit-tab-pane"
                >
                  <Step3 />
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepositDetail;
