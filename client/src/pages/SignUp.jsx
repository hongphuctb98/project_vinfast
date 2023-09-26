import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Mật khẩu gồm ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt"
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
  })
  .required();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:3636/api/v1/auth/signup", data)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({ icon: "success", text: "Đăng ký thành công" }).then(
            navigate("/signin")
          );
        } else {
          Swal.fire({ icon: "error", text: res.data.message });
        }
      })
      .catch((err) => Swal.fire({ icon: "error", text: err.message }));
  };

  return (
    <>
      <div className="signin mt-4 ps-4">
        <Link className="logo " to={"/"}>
          <img
            src="https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwc01e2061/images/vfast/logo.svg"
            alt=""
          />
        </Link>
        <div className="container " style={{ width: "400px" }}>
          <h3 className="fw-normal text-center mb-5">Đăng ký tài khoản</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              component="div"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="pt-2">
                <TextField
                  {...register("fullName")}
                  id="fullName"
                  label="Họ và tên"
                  variant="outlined"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  size="small"
                  sx={{ width: "100%" }}
                />
              </div>
              <div className="pt-2">
                <TextField
                  {...register("email")}
                  id="email"
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  size="small"
                  sx={{ width: "100%" }}
                />
              </div>
              <div className="pt-2">
                <TextField
                  {...register("phoneNumber")}
                  id="phoneNumber"
                  label="Số điện thoại"
                  variant="outlined"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  size="small"
                  sx={{ width: "100%" }}
                />
              </div>

              <div className="pt-2">
                <TextField
                  {...register("password")}
                  id="password"
                  label="Mật khẩu"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  size="small"
                  sx={{ width: "100%" }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="pt-2 pb-3">
                <TextField
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  label="Xác nhận mật khẩu"
                  variant="outlined"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  size="small"
                  sx={{ width: "100%" }}
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>

              <button
                className="signin-btn btn btn-primary mb-3 "
                type="submit"
              >
                Đăng ký
              </button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>

          <div className="mt-5">
            <Copyright sx={{ mt: "2rem" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
