const express = require("express");
const router = express.Router();

const { update } = require("../controller/version.controller");

router.patch("/:id", update);

module.exports = router;
