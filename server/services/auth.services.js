const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userServices = require("../services/user.services");

module.exports.signup = async (email, password, fullName, phoneNumber) => {
  let salt = bcrypt.genSaltSync(10);
  let hasPassord = bcrypt.hashSync(password, salt);
  return userServices.create(email, hasPassord, fullName, phoneNumber);
};

module.exports.signin = async (email, password) => {
  try {
    let findUser = await userServices.findOneByEmail(email);
    let [rows] = findUser;
    if (rows.length === 0) {
      return {
        status: 401,
        message: "Email không tồn tại",
      };
    } else {
      let hasPassord = rows[0].password;
      let compare = bcrypt.compareSync(password, hasPassord);
      if (compare) {
        let accessToken = jwt.sign(
          { data: { id: rows[0].user_id, email: rows[0].email } },
          process.env.TOKEN_SECRET,
          { expiresIn: 60 * 600 }
        );
        return {
          status: 200,
          message: "đăng nhập thành công",
          access_token: accessToken,
          user: rows[0],
        };
      } else {
        return {
          status: 403,
          message: "mật khẩu không chính xác",
        };
      }
    }
  } catch (err) {
    return {
      message: err.message,
    };
  }
};
