import { useEffect, useState, version } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { formatCurrency } from "../helpers";
import Swal from "sweetalert2";
import Modal from "./Modal";
import axios from "axios";
import FileUpload from "./FileUpload";

const schema = yup.object().shape({
  batteryCapacity: yup
    .number()
    .typeError("Vui lòng chỉ nhập số.")
    .positive("Dung lượng pin phải là số dương.")
    .required("Dung lượng pin là trường bắt buộc."),
  consumption: yup
    .number()
    .typeError("Vui lòng chỉ nhập số.")
    .positive("Mức tiêu thụ phải là số dương.")
    .required("Mức tiêu thụ là trường bắt buộc."),
});
const CreateProduct = () => {
  const [product, setProduct] = useState({});
  const [roofColors, setRoofColors] = useState([]);
  const [productId, setProductId] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [version, setServion] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [roofColor, setRoofColor] = useState("");
  const [carSource, setCarSource] = useState("");
  const [batteryPrice, setBatteryPrice] = useState("");
  const [depositPrice, setDepositPrice] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [consumption, setConsumption] = useState();
  const [wattage, setWattage] = useState("");
  const [airBag, setAirBag] = useState("");
  const [seat, setSeat] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [length, setLength] = useState("");

  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  //
  let BASE_API = "http://localhost:3636/api/v1";

  useEffect(() => {}, []);

  useEffect(() => {}, [version, exteriorColor, roofColor]);
  const handleBack = () => {
    navigate("/admin/products");
  };

  useEffect(() => {
    if (count > 0) {
      setIsEdit(true);
    }
  }, [
    price,
    version,
    exteriorColor,
    roofColor,
    seat,
    airBag,
    guarantee,
    batteryCapacity,
    consumption,
    wattage,
    batteryPrice,
    depositPrice,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      name,
      wattage,
      seat,
      length,
      airBag,
      batteryCapacity,
      guarantee,
      consumption
    );
    await axios
      .post("http://localhost:3636/api/v1/products", {
        name,
        wattage,
        seat,
        length,
        airBag,
        batteryCapacity,
        guarantee,
        consumption,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res.data.message,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/admin/products");
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col py-3">
      <div className="d-flex justify-content-between">
        <h3>Tạo mới xe </h3>
        <button className="btn btn-primary" onClick={handleBack}>
          <i class="fa-solid fa-rotate-left"></i>Back
        </button>
      </div>
      <hr />
      <div className="container mb-3">
        <div className="row">
          <h5>Product Overview</h5>
        </div>
        <div className="row"></div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <form className="container" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="productName"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <label className="form-label">Version</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setServion(e.target.value)}
                >
                  <option value="" selected>
                    Select version
                  </option>
                  {/* {product?.versions?.length > 0 &&
                    product.versions.map((e) => (
                      <option key={e.version_id} value={e.name}>
                        {e.name}
                      </option>
                    ))} */}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="batteryPrice" className="form-label">
                  Battery price
                </label>
                <input
                  value={batteryPrice}
                  onChange={(e) => {
                    setBatteryPrice(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="batteryPrice"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="depositPrice" className="form-label">
                  Deposit price
                </label>
                <input
                  value={depositPrice}
                  onChange={(e) => {
                    setDepositPrice(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="depositPrice"
                />
              </div>
            </div>
            <div className="col-4">
              <label htmlFor="price" className="form-label">
                Car price
              </label>
              <input
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  setCount((pre) => (pre = pre + 1));
                }}
                type="text"
                className="form-control"
                id="price"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="batteryCapacity" className="form-label">
                  Dung lượng pin (wh)
                </label>
                <input
                  value={batteryCapacity}
                  onChange={(e) => {
                    setBatteryCapacity(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="batteryCapacity"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="consumption" className="form-label">
                  Mức tiêu thụ (wh/km)
                </label>
                <input
                  value={consumption}
                  onChange={(e) => {
                    setConsumption(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="consumption"
                />
              </div>
            </div>
            <div className="col-4">
              <label htmlFor="wattage" className="form-label">
                Công suất (hW)
              </label>
              <input
                value={wattage}
                onChange={(e) => {
                  setWattage(e.target.value);
                  setCount((pre) => (pre = pre + 1));
                }}
                type="text"
                className="form-control"
                id="wattage"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="airBag" className="form-label">
                  Túi khí (Wh)
                </label>
                <input
                  value={airBag}
                  onChange={(e) => {
                    setAirBag(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="airBag"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="seat" className="form-label">
                  Số ghế
                </label>
                <input
                  value={seat}
                  onChange={(e) => {
                    setSeat(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                  type="text"
                  className="form-control"
                  id="seat"
                />
              </div>
            </div>
            <div className="col-4">
              <label htmlFor="guarantee" className="form-label">
                Bảo hành
              </label>
              <input
                value={guarantee}
                onChange={(e) => {
                  setGuarantee(e.target.value);
                  setCount((pre) => (pre = pre + 1));
                }}
                type="text"
                className="form-control"
                id="guarantee"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="row pt-3"></div>
              <div className="row pt-3">
                <label className="form-label">Chọn màu ngoại thất</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setExteriorColor(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                >
                  <option value="" selected>
                    select color
                  </option>
                  {product?.exterior_colors?.length > 0 &&
                    product.exterior_colors.map((color) => (
                      <option
                        key={color.exterior_color_id}
                        value={color.exterior_name}
                      >
                        {color.exterior_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="row pt-3">
                <label className="form-label">Chọn màu nóc xe</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setRoofColor(e.target.value);
                    setCount((pre) => (pre = pre + 1));
                  }}
                >
                  <option value="" selected>
                    select color
                  </option>
                  {/* {roofColors?.length > 0 &&
                    roofColors.map((color, i) => (
                      <option key={i} value={color}>
                        {color}
                      </option>
                    ))} */}
                </select>
              </div>
              <div className="row">
                <FileUpload />
              </div>
            </div>
            <div className="col-8">
              <img src={carSource} alt="" className="w-100" />
            </div>
          </div>

          {!isEdit ? (
            <button disabled type="submit" className="btn btn-primary me-3">
              Create
            </button>
          ) : (
            <button type="submit" className="btn btn-primary me-3">
              Create
            </button>
          )}
          <Link className="btn btn-danger" to="/admin/products">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
