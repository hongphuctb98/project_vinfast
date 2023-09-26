import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/signin");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <div className="header-menu">
      <ul className="list-unstyled ">
        <li>Thông tin tài khoản</li>
        <li>Lịch sử đơn hàng</li>
        <li>Bảo dưỡng - Sửa chữa</li>
        <li>Thuê pin</li>
        <li>Lịch sử sạc pin</li>
        <li>Xe của tôi</li>
        <li onClick={handleLogout} style={{ color: "#838383" }}>
          Đăng xuất
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
