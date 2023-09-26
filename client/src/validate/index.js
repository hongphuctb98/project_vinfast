import * as yup from "yup";

export const schema = yup
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
    city: yup
      .object()
      .shape({
        value: yup.string(),
        label: yup.string(),
      })
      .nullable()
      .required("Thành phố không được để trống"),
    showroom: yup
      .object()
      .shape({
        name: yup.string(),
      })
      .nullable()
      .required("Showroom không được để trống"),
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
