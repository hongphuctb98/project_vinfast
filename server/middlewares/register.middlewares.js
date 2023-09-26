const userServices = require("../services/user.services");
module.exports.registerForm = async (email, fullName, password, userName) => {
  const passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const validationErrors = {};

  //email
  if (!email) {
    validationErrors.emailErr = "Email không được để trống";
  } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
    validationErrors.emailErr = "Email không đúng định dạng";
  }
  //name
  if (!fullName) {
    validationErrors.fullNameErr = "Vui lòng nhập họ tên";
  }

  //username
  if (!userName) {
    validationErrors.userNameErr = "Vui lòng nhập username";
  } else {
    try {
      let result = await userServices.findOneByUserName(userName);
      if (result[0].length > 0)
        validationErrors.userNameErr = "userName đã tồn tại";
    } catch (error) {
      console.log(error);
    }
  }

  //password
  if (!password) {
    validationErrors.passwordError = "Vui lòng nhập mật khẩu";
  } else if (!passRegex.test(password)) {
    validationErrors.passwordError =
      "Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt";
  }

  return validationErrors;
};
