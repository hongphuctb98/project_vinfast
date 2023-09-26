const orderServices = require("../services/order.services");

module.exports.findAll = async (req, res) => {
  try {
    let data = await orderServices.findAll();
    let [rows] = data;
    res.json({
      message: "get all orders",
      order: rows,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

module.exports.createOrder = async (req, res) => {
  try {
    let data = await orderServices.createOrder(req.body);
    let [rows] = data;

    let data2 = await orderServices.createOrderDetail(
      req.body.product_detail_id,
      rows.insertId
    );
    if (data2[0].affectedRows > 0) {
      res.json({
        status: 200,
        message: "create order success",
      });
    } else {
      res.json({
        status: 500,
        message: "create order",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
