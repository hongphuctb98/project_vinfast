import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../helpers";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Step3() {
  const [paymentType, setPaymentType] = useState(null);
  const [commit, setCommit] = useState(false);
  const order = useSelector((state) => state.order);
  const [isNextSetp, setIsNextSetp] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const createOrder = async () => {
    await axios
      .post("http://localhost:3636/api/v1/order", {
        ...order,
        paymentType,
        userId: currentUser.user_id,
      })
      .then((res) => {
        if ((res.data.status = 200)) {
          Swal.fire({ icon: "success", text: "Đặt hàng thành công" }).then(
            () => {
              navigate("/");
            }
          );
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (paymentType !== null && commit) {
      setIsNextSetp(true);
    } else {
      setIsNextSetp(false);
    }
  }, [paymentType, commit]);
  return (
    <div className="step-content step-3">
      <span style={{ fontSize: "14px" }}>
        Quý khách chưa hoàn thiện thông tin khách hàng tại bước 2 - Nhập thông
        tin, vui lòng quay lại và hoàn thiện thông tin.
      </span>
      <div className="car-info pt-3">
        <p style={{ fontSize: "22px", fontWeight: "400" }}>Thông tin xe</p>
        <ul className="car-info-list list-unstyled">
          <li className="car-info-item">
            <span>{order?.carType}</span>
            <p>{formatCurrency(order?.carPrice)}</p>
          </li>
          {order?.batteryPrice != 0 && (
            <li className="car-info-item">
              <span>Thuê pin</span>
              <p>{formatCurrency(order?.batteryPrice)}/tháng</p>
            </li>
          )}
          <li className="car-info-item">
            <span>Ngoại thất</span>
            <p>{order?.exteriorColor}</p>
          </li>
          <li className="car-info-item">
            <span>Nóc xe</span>
            <p>{order?.roofColor}</p>
          </li>
          <li className="car-info-item">
            <span>Nội thất</span>
            <p>Granite Black</p>
          </li>
        </ul>
      </div>
      <hr />

      <div className="user-info pt-3">
        <p style={{ fontSize: "22px", fontWeight: "400" }}>Thông tin chủ xe</p>
        <ul className="user-info-list list-unstyled">
          <li className="user-info-item">
            <span>Chủ xe</span>
            <p>{order?.fullName}</p>
          </li>
          <li className="user-info-item">
            <span>Email</span>
            <p>{order?.email}</p>
          </li>
          <li className="user-info-item">
            <span>Số điện thoại</span>
            <p>{order?.phoneNumber}</p>
          </li>

          <li className="user-info-item">
            <span>Showroom nhận xe</span>
            <p>{order?.showroom?.showroom_name}</p>
          </li>
        </ul>
      </div>
      <p style={{ fontSize: "22px", fontWeight: "400" }}>
        Hình thức thanh toán
      </p>
      <div className="payment-type">
        <div>
          <input
            type="radio"
            name="international"
            id="international"
            value="international"
            checked={paymentType === "international"}
            onChange={() => setPaymentType("international")}
          />
          <label htmlFor="international" className="ms-2">
            Thẻ thanh toán quốc tế
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="domestic"
            id="domestic"
            value="domestic"
            checked={paymentType === "domestic"}
            onChange={() => setPaymentType("domestic")}
          />
          <label htmlFor="domestic" className="ms-2">
            Thẻ ATM nội địa/ Internet Banking
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="bank"
            id="bank"
            value="bank"
            checked={paymentType === "bank"}
            onChange={() => setPaymentType("bank")}
          />
          <label htmlFor="bank" className="ms-2">
            Chuyển khoản ngân hàng
          </label>
        </div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="commit"
          onClick={() => setCommit(!commit)}
        />
        <label className="form-check-label" htmlFor="commit">
          Tôi cam kết các thông tin đã cung cấp tại đây hoàn toàn chính xác.
        </label>
      </div>
      <div className="total-price price-wrap">
        <div>
          <span className="title">Số tiền đặt cọc</span>
          <span className="price">
            {order?.depositPrice && formatCurrency(order.depositPrice)}
          </span>
        </div>
      </div>
      <div
        className="continue-btn mb-5"
        style={{ backgroundColor: !isNextSetp ? "#ccc" : "" }}
        onClick={() => createOrder()}
      >
        Thanh toán đặt cọc
      </div>
    </div>
  );
}

export default Step3;
