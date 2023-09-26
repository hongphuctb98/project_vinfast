const db = require("../utils/database");

module.exports.findAll = () => {
  return db.execute(`SELECT od.*, o.*, s.showroom_name, p.product_name FROM vinfast_db.order_detail as od 
  inner join vinfast_db.order as o on od.order_id= o.order_id
  inner join user as u on u.user_id = o.user_id
  inner join product_detail as pd on pd.product_detail_id = od.product_detail_id
  inner join product as p on pd.product_id = p.product_id
  inner join showroom as s on s.showroom_id= o.showroom_id`);
};

module.exports.createOrder = (data) => {
  let date = new Date();
  let createAt = date.toISOString().split("T")[0];
  return db.execute(
    `INSERT INTO vinfast_db.order (status, user_id, has_battery, showroom_id, payment_method_name, create_At, order_user_name, order_user_phone, order_user_email) VALUES ("pendding", ${data.userId}, "${data.batteryType}", ${data.showroom.showroom_id}, "${data.paymentType}", "${createAt}", "${data.fullName}", "${data.phoneNumber}", "${data.email}")`
  );
};

module.exports.createOrderDetail = (product_detail_id, order_id) => {
  console.log();
  return db.execute(
    `INSERT INTO order_detail ( product_detail_id, order_id, number) VALUES (${product_detail_id}, ${order_id}, 1)
    `
  );
};
