const db = require("../utils/database");

module.exports.findAll = () => {
  return db.execute(`SELECT p.*, pd.*, v.* FROM vinfast_db.product as p
  inner join product_detail as pd on p.product_id = pd.product_id inner join version as v on v.version_id= pd.version_id where pd.exterior_color_id = 2 and pd.roof_color_id =2 group by p.product_id`);
};

module.exports.findOne = (id) => {
  const sql = `SELECT p.*, pd.source, v.*, rc.*, ec.* FROM vinfast_db.product as p
  inner join product_detail as pd on p.product_id = pd.product_id 
  inner join version as v on v.product_id = p.product_id
  inner join roof_color as rc on rc.roof_color_id = pd.roof_color_id
  inner join exterior_color as ec on ec.exterior_color_id = pd.exterior_color_id
  where p.product_id = ${id} `;
  return db.execute(sql);
};

module.exports.remove = (id) => {
  return db.execute(`DELETE FROM vinfast_db.product WHERE product_id = ${id}`);
};

module.exports.create = (
  product_name,
  wattage,
  seat,

  airBag,
  batteryCapacity,
  guarantee,
  consumption,
  main_source
) => {
  return db.execute(
    `INSERT INTO vinfast_db.product ( product_name, wattage, seat , air_bag, battery_capacity, guarantee, consumption, main_source ) VALUES ( '${product_name}', '${wattage}', '${seat}',  '${airBag}', '${batteryCapacity}', '${guarantee}', '${consumption}', '${main_source}' )`
  );
};
