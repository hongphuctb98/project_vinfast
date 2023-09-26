const jwt = require("jsonwebtoken");
const userServices = require("../services/user.services");
module.exports.isAuth = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1].trim();
    let result = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id } = result.data;

    const user = await userServices.findOne(id);

    if (user) {
      req.currentUser = user;
      next();
    } else {
      res.json({ message: "not auth" });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
