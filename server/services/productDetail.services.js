const db = require("../utils/database");
module.exports.findOneByColor = (id, exteriorColor, roofColor, carType) => {
  let sql = `SELECT * FROM product_detail as pd
  inner join roof_color as r on r.roof_color_id = pd.roof_color_id
  inner join exterior_color as e on e.exterior_color_id = pd.exterior_color_id
  inner join version as v on v.version_id = pd.version_id
  where pd.product_id=${id} `;
  if (exteriorColor) {
    sql += `and e.exterior_color_name="${exteriorColor}"`;
  }
  if (roofColor) {
    sql += `and r.roof_color_name="${roofColor}"`;
  }
  if (carType) {
    sql += `and v.name="${carType}"`;
  }
  return db.query(sql);
};

module.exports.findOneById = (id) => {
  return db.execute(`SELECT * FROM product_detail WHERE product_id=${id}`);
};
