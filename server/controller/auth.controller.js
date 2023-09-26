const authServices = require("../services/auth.services");
const userServices = require("../services/user.services");

const yup = require("yup");

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
module.exports.signup = async (req, res) => {
  let { email, password, fullName, phoneNumber } = req.body;

  try {
    await schema.validate(req.body);
    let findEmail = await userServices.findOneByEmail(email);
    if (findEmail[0].length > 0) {
      res.json({
        status: 400,
        message: "Email đã tồn tại",
      });
    } else {
      await authServices.signup(email, password, fullName, phoneNumber);
      res.json({
        status: 200,
        message: "signup successfully",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports.signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let resutl = await authServices.signin(email, password);
    res.json(resutl);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
