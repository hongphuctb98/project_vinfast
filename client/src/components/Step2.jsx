import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../helpers";
const schema = yup
  .object()
  .shape({
    fullName: yup.string().required("Họ và tên là trường bắt buộc"),
    phoneNumber: yup
      .string()
      .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số")
      .required("Vui lòng nhập số điện thoại"),
    email: yup
      .string()
      .required("Email không được để trống")
      .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, "Email không hợp lệ")
      .max(100, "Email không dài quá 100 ký tự"),
    city: yup.string().nullable().required("Thành phố không được để trống"),
    showroom: yup
      .object()
      .shape({
        name: yup.string(),
      })
      .nullable()
      .required("Showroom không được để trống"),
  })
  .required();

function Step2({ setActiveTab }) {
  const [selectedCity, setSelectedCity] = useState(null);

  const order = useSelector((state) => state.order);
  const [showrooms, setShowrooms] = useState({});
  const [car, setCar] = useState({});
  const [isNextSetp, setIsNextSetp] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: "CHANGE_USER_INFO", payload: data });
    dispatch({ type: "ADD_TO_ORDER", payload: data });
  };
  const handleNext = () => {
    const isFormValid =
      !!getValues("fullName") &&
      !!getValues("phoneNumber") &&
      !!getValues("email") &&
      !!getValues("city") &&
      !!getValues("showroom") &&
      selectedCity;

    const hasErrors =
      !!errors.fullName ||
      !!errors.phoneNumber ||
      !!errors.email ||
      !!errors.city ||
      !!errors.showroom;

    if (!hasErrors && isFormValid) {
      setActiveTab("deposit-tab-pane");
      setIsNextSetp(true);
    }
  };
  const BASE_API = "http://localhost:3636/api/v1";
  // const fetchOneCar = async () => {
  //   let carId = params.id;
  //   await axios
  //     .get(`http://localhost:3636/api/v1/products/${carId}`)
  //     .then((res) => {
  //       setCar(res.data.car);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const fetchOneCaryType = async () => {
    let { id } = params;
    await axios
      .post(`${BASE_API}/productdetail`, { id, ...order })
      .then((res) => {
        console.log(res.data.car);
      })
      .catch((err) => console.log(err));
  };

  const fetchShowooms = async () => {
    await axios
      .get("http://localhost:3636/api/v1/showrooms")
      .then((res) => setShowrooms(res.data.showrooms))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // fetchOneCar();
    fetchShowooms();
  }, [params.id, order]);

  return (
    <div className="step-content">
      <span style={{ fontSize: "14px" }}>
        Quý khách chưa hoàn thiện thông tin xe tại bước 1 - Chọn xe, vui lòng
        quay lại và hoàn thiện thông tin.
      </span>

      <div className="user-info">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%" }}>
          <p className="fs-5 pt-3">Thông tin chủ xe</p>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                {...register("fullName")}
                id="fullName"
                label="Họ và tên"
                variant="outlined"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                sx={{ width: "100%" }}
              />
            </div>
            <div>
              <TextField
                {...register("phoneNumber")}
                id="phoneNumber"
                label="Số điện thoại"
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
                sx={{ width: "100%" }}
              />
            </div>
            <div>
              <TextField
                {...register("email")}
                id="email"
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ width: "100%" }}
              />
            </div>

            <p className="fs-5 pt-4 pb-3">Showroom nhận xe</p>

            <Controller
              name="city"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  id="city-select"
                  options={showrooms ? Object.keys(showrooms) : []}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    field.onChange(newValue);
                    setSelectedCity(newValue);
                  }}
                  classes={{ option: "custom-autocomplete-option" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chọn thành phố"
                      variant="outlined"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="showroom"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  id="showroom-select"
                  options={selectedCity ? showrooms[selectedCity] : []}
                  getOptionLabel={(option) => option.showroom_name}
                  onChange={(event, newValue) => {
                    field.onChange(newValue);
                  }}
                  classes={{ option: "custom-autocomplete-option" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chọn showroom"
                      variant="outlined"
                      error={!!errors.showroom}
                      helperText={errors.showroom?.message}
                    />
                  )}
                />
              )}
            />

            {order?.batteryPrice !== 0 ? (
              <div className="total-price price-wrap mt-3">
                <div>
                  <span className="title">Thuê pin</span>
                  <span className="price">
                    {formatCurrency(order.batteryPrice)}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="total-price price-wrap">
              <div>
                <span className="title">Giá xe</span>
                <span className="price">
                  {order?.carPrice !== 0 && formatCurrency(order.carPrice)}
                </span>
              </div>
              <span>Giá xe đã bao gồm VAT</span>
            </div>
            <button
              className="signin-btn btn btn-primary mb-5 py-3"
              type="submit"
              onClick={handleNext}
              style={{
                textTransform: "capitalize",
                fontSize: "22px",
                fontWeight: "500",
                // backgroundColor: !isNextSetp ? "#ccc" : "",
              }}
            >
              Bước tiếp theo
            </button>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Step2;
