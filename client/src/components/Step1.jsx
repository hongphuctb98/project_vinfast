import axios from "axios";
import React, { useEffect, useRef, useState, version } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../helpers";
import { set } from "react-hook-form";

function Step1({ setActiveTab }) {
  const handleChange = (group, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [group]: value,
    }));
  };

  const [car, setCar] = useState({});
  const [car2, setCar2] = useState({});
  const params = useParams();
  const [roofColors, setRoofColors] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedValues, setSelectedValues] = useState({
    carType: "",
    batteryType: "",
    exteriorColor: "",
    roofColor: "",
    carPrice: 0,
    batteryPrice: 0,
  });
  const dispatch = useDispatch();

  const BASE_API = "http://localhost:3636/api/v1";

  const fetchOneCar = async () => {
    let carId = params.id;
    await axios
      .get(`${BASE_API}/products/${carId}`)
      .then((res) => {
        setCar(res.data.car);
      })
      .catch((err) => console.log(err));
  };

  const fetchOneCaryType = async () => {
    let { id } = params;
    await axios
      .post(`${BASE_API}/productdetail`, { id, ...selectedValues })
      .then((res) => {
        selectedValues.depositPrice = res.data.car[0].deposit_price;
        selectedValues.product_detail_id = res.data.car[0].product_detail_id;
        setCar2(res.data.car);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOneCar();
    fetchOneCaryType();
    dispatch({ type: "ADD_TO_ORDER", payload: selectedValues });

    if (car?.sources?.length > 0) {
      let findRoofColors = car.sources.filter(
        (e) => e.exterior_color_name == selectedValues.exteriorColor
      );
      let result = car.roof_colors.filter((e) =>
        findRoofColors.some((element) => element.roof_color_name == e.roof_name)
      );
      setRoofColors(result);
    }

    if (car2?.length > 0) {
      if (
        selectedValues.batteryType == "" ||
        selectedValues.batteryType == "non-battery"
      ) {
        setTotalPrice(car2[0].price);
        selectedValues.batteryPrice = car2[0].battery_price;
        selectedValues.carPrice = car2[0].price;
        dispatch({ type: "ADD_TO_ORDER", payload: selectedValues });
      } else {
        setTotalPrice(car2[0].battery_price * 50 + car2[0].price);
        selectedValues.carPrice = car2[0].price + car2[0].battery_price * 50;
        selectedValues.batteryPrice = 0;
        dispatch({ type: "ADD_TO_ORDER", payload: selectedValues });
      }
    }
  }, [, selectedValues]);

  useEffect(() => {
    setSelectedValues({
      carType: "",
      batteryType: "",
      exteriorColor: "",
      roofColor: "",
      carPrice: 0,
      batteryPrice: 0,
    });
  }, [params.id]);
  useEffect(() => {
    setSelectedValues({ ...selectedValues, roofColor: "" });
  }, [selectedValues.exteriorColor]);

  const isAllFieldsFilled = () => {
    return (
      selectedValues.carType !== "" &&
      selectedValues.batteryType !== "" &&
      selectedValues.exteriorColor !== "" &&
      selectedValues.roofColor !== ""
    );
  };
  const handleNextStep = () => {
    if (isAllFieldsFilled()) {
      setActiveTab("info-tab-pane");
    }
  };
  return (
    <div className="step-content p-1">
      <span className="desc" style={{ fontSize: "14px" }}>
        Xin mời Quý khách vui lòng chọn phiên bản, nội thất và ngoại thất xe.
      </span>
      <div className="car-type-list ">
        <p className="fs-5 mt-4">Phiên bản xe</p>
        {car?.versions &&
          car.versions.map((e, i) => (
            <div
              key={i}
              className={`car-type-item ${
                selectedValues.carType === e.name ? "checked" : ""
              }`}
            >
              <input
                type="radio"
                name="car-type"
                id={e.name}
                value={e.name}
                checked={selectedValues.carType === e.name}
                onChange={() => handleChange("carType", e.name)}
              />
              <label htmlFor={e.name} className="ms-2">
                {e.name}
              </label>
            </div>
          ))}
      </div>

      <div className="car-type-list">
        <p className="fs-5 mt-4">Loại pin</p>
        <div
          className={`car-type-item ${
            selectedValues.batteryType === "battery" ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="battery-type"
            id="battery"
            value="battery"
            checked={selectedValues.batteryType === "battery"}
            onChange={() => handleChange("batteryType", "battery")}
          />
          <label htmlFor="battery" className="ms-2">
            Bao gồm pin
          </label>
        </div>
        <div
          className={`car-type-item ${
            selectedValues.batteryType === "non-battery" ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="battery-type"
            id="non-battery"
            value="non-battery"
            checked={selectedValues.batteryType === "non-battery"}
            onChange={() => handleChange("batteryType", "non-battery")}
          />
          <label htmlFor="non-battery" className="ms-2">
            Không bao gồm pin
          </label>
        </div>
      </div>

      <div className="car-type-list">
        <p className="fs-5 mt-4">Ngoại thất </p>
        <ul className="color-item-list list-unstyled d-flex gap-3 flex-wrap">
          {car?.exterior_colors?.length > 0 &&
            car.exterior_colors.map((e, i) => (
              <li
                key={i}
                className={`color-item ${
                  selectedValues.exteriorColor === e.exterior_name
                    ? "checked"
                    : ""
                }`}
                onClick={() => {
                  handleChange("exteriorColor", e.exterior_name);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={e.exterior_source} alt={e.exterior_name} />
              </li>
            ))}
        </ul>
      </div>

      <div className="car-type-list">
        <p className="fs-5 mt-4"> Nóc xe </p>
        <ul className="color-item-list list-unstyled d-flex gap-3 flex-wrap">
          {roofColors?.length > 0 &&
            roofColors.map((e, i) => (
              <li
                key={i}
                className={`color-item ${
                  selectedValues.roofColor === e.roof_name ? "checked" : ""
                }`}
                onClick={() => {
                  handleChange("roofColor", e.roof_name);
                }}
              >
                <img src={e.roof_source} alt={e.roof_name} />
              </li>
            ))}
        </ul>
      </div>

      <div className="estimates mt-4">
        <span>Dự toán phải trả góp</span>
        <a href="">chi tiết</a>
      </div>
      <div className="estimates">
        <span>Dự toán phải trả góp</span> <a href=""> chi tiết</a>
      </div>

      <hr />
      {selectedValues.batteryType === "non-battery" && (
        <div className="battery-price price-wrap">
          <div>
            <span className="title">Thuê pin</span>
            <span className="price">
              {car2.length > 0 && formatCurrency(car2[0].battery_price)}
              /tháng
            </span>
          </div>
          <span>Giới hạn 1.500 Km/tháng và Phí phụ trội 1.070 VNĐ/Km.</span>
        </div>
      )}

      <div className="total-price price-wrap">
        <div>
          <span className="title">Giá xe</span>
          <span className="price">{formatCurrency(totalPrice)}</span>
        </div>
        <span>Giá xe đã bao gồm VAT</span>
      </div>
      <div
        className="continue-btn mb-5"
        style={{ backgroundColor: isAllFieldsFilled() ? "" : "#ccc" }}
        onClick={handleNextStep}
      >
        Bước tiếp theo
      </div>
    </div>
  );
}

export default Step1;
