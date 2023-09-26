import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../helpers";
import { useNavigate } from "react-router-dom";
// import { formatMoney } from "../helpers";
// import Pagination from "../shared/admin/Pagination";

function ProductList() {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const BASE_API = "http://localhost:3636/api/v1";

  const fetchProduct = async () => {
    try {
      axios
        .get(BASE_API + "/products")
        .then((res) => {
          setProduct(res.data.cars);
          // setTotal(res.data.length);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/products/edit/" + id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_API}/products/${id}`).then((res) => {
      if (res.data.status == 200) {
        Swal.fire({
          icon: "success",
          text: "Xóa thành công",
        }).then(() => {
          navigate("/admin/products");
          fetchProduct();
        });
      }
    });
  };
  const handleCreate = () => {
    navigate("/admin/products/create");
  };

  return (
    <>
      <div className="col py-3">
        <div className="d-flex justify-content-between container">
          <h3>ProductList</h3>
          <button className="btn btn-success" onClick={handleCreate}>
            <i class="fa-regular fa-square-plus me-2"></i>Create
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col ">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {product?.length > 0 ? (
                product.map((e, index) => (
                  <tr key={index}>
                    <th>{e.product_id}</th>
                    <td>{e.product_name}</td>
                    <td>{formatCurrency(e.price)}</td>
                    <td className="d-flex justify-content-evenly">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(e.product_id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
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

export default ProductList;
