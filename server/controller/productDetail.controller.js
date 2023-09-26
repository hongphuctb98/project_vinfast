const productDetailServices = require("../services/productDetail.services");
const db = require("../utils/database");
module.exports.findOneByColor = async (req, res) => {
  try {
    const { id, exteriorColor, roofColor, carType } = req.body;
    let result = await productDetailServices.findOneByColor(
      id,
      exteriorColor,
      roofColor,
      carType
    );
    let [rows] = result;
    res.json({
      message: "get one products",
      car: rows,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports.editCar = async (req, res) => {
  try {
    const {
      id,
      price,
      version,
      exteriorColor,
      roofColor,
      seat,
      airBag,
      guarantee,
      batteryCapacity,
      consumption,
      wattage,
      batteryPrice,
      depositPrice,
    } = req.body;

    let resultProductDetail = await db.execute(
      `SELECT * FROM  version as v  WHERE v.name="${version}" `
    );

    let updateVersion = await db.execute(
      `UPDATE version SET price = ${price}, battery_price = ${batteryPrice}, deposit_price = ${depositPrice} WHERE name = "${version}"
        `
    );
    let updateProduct = await db.execute(
      `update product set wattage = ${wattage}, seat= ${seat}, air_bag = ${airBag}, guarantee = ${guarantee}, battery_capacity = ${batteryCapacity}, consumption = ${consumption} where product_id = ${id}`
    );
    if (updateVersion[0].affectedRows && updateProduct[0].affectedRows) {
      res.json({
        message: "update car",
      });
    }

    console.log(resultProductDetail[0]);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
