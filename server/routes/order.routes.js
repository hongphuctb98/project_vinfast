const express = require("express");
const router = express.Router();

const { findAll, createOrder } = require("../controller/order.controller");

router.get("/", findAll);
router.post("/", createOrder);

module.exports = router;
