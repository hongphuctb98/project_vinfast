import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../helpers";
import { useNavigate } from "react-router-dom";
// import { formatMoney } from "../helpers";
// import Pagination from "../shared/admin/Pagination";

function OrdertList() {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const BASE_API = "http://localhost:3636/api/v1";

  const fetchOrder = async () => {
    try {
      axios
        .get(BASE_API + "/order")
        .then((res) => {
          console.log(res.data);
          setOrders(res.data.order);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/products/edit/" + id);
  };

  return (
    <>
      <div className="col py-3">
        <h3>OrdertList</h3>

        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Showroom</th>
                <th scope="col ">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {orders?.length > 0 ? (
                orders.map((e, index) => (
                  <tr key={index}>
                    <th>{e.order_id}</th>
                    <td>{e.order_user_name}</td>
                    <td>{e.order_user_phone}</td>
                    <td>{e.order_user_email}</td>
                    <td>{e.showroom_name}</td>
                    <td className="d-flex justify-content-evenly">
                      <button
                        className="btn btn-info"
                        onClick={() => handleEdit(e.product_id)}
                      >
                        <i class="fa-solid fa-wrench"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="d-flex align-items-center">
                  <strong role="status">Loading...</strong>
                  <div
                    className="spinner-border ms-auto"
                    aria-hidden="true"
                  ></div>
                </div>
              )}
            </tbody>
          </table>
        </div>
        {/* <Pagination
          total={total}
          pageNumber={3}
          handleChangePage={handleChangePage}
          currentPage={currentPage}
        /> */}
      </div>
    </>
  );
}

export default OrdertList;
