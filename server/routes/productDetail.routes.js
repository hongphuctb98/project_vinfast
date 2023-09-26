const express = require("express");
const router = express.Router();

const {
  findOneByColor,
  editCar,
} = require("../controller/productDetail.controller");

router.post("/", findOneByColor);
router.patch("/edit", editCar);
module.exports = router;
