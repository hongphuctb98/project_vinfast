const db = require("../utils/database");

module.exports.update = (price, batteryPrice, depositPrice, version) => {
  return db.execute(
    `UPDATE version SET price = ${price}, battery_price = ${batteryPrice}, deposit_price = ${depositPrice} WHERE name = "${version}"`
  );
};
