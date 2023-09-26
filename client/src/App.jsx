import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetail";
import BikeDetail from "./pages/BikeDetail";
import Introduce from "./pages/Introduce";
import DepositDetail from "./pages/DepositDetail";

import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import AdminPage from "./Admin.jsx/AdminPage";
import Dashboard from "./Admin.jsx/Dashboard";
import ProductList from "./Admin.jsx/ProductList";
import OrderList from "./Admin.jsx/OrderList";
import Customers from "./Admin.jsx/Customers";
import ProductDetail from "./Admin.jsx/ProductDetail";
import CreateProduct from "./Admin.jsx/CreateProduct";
/* Đối với Slick Carousel */

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/bike/:id" element={<BikeDetail />} />
        <Route path="/deposit/:id" element={<DepositDetail />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="edit/:id" element={<ProductDetail />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>
          <Route path="orders" element={<OrderList />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
