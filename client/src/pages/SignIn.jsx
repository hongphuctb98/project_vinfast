import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const schema = yup
  .object()
  .shape({
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
  })
  .required();

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3636/api/v1/auth/signin", data)
      .then((res) => {
        if (res.data.status == 200) {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          Swal.fire({ icon: "success", text: res.data.message }).then(
            (result) => {
              if (result.isConfirmed) {
                navigate("/");
              }
            }
          );
        } else {
          Swal.fire({ icon: "error", text: res.data.message });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {});

  return (
    <>
      <div className="signin mt-4 ps-4">
        <Link className="logo " to={"/"}>
          <img
            src="https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwc01e2061/images/vfast/logo.svg"
            alt=""
          />
        </Link>
        <div className="container mt-5" style={{ width: "400px" }}>
          <h3 className="fw-normal text-center mb-5">Đăng nhập tài khoản</h3>
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

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <button
                className="signin-btn btn btn-primary mb-5 "
                type="submit"
              >
                Đăng nhập
              </button>

              <Grid container>
                <Grid item xs>
                  <Link href="#">Quên mật khẩu</Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    Chưa có tài khoản
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
