const productServices = require("../services/product.services");

module.exports.findAll = async (req, res) => {
  try {
    let data = await productServices.findAll();
    let [rows] = data;
    res.json({
      message: "get all products",
      cars: rows,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

module.exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await productServices.findOne(id);
    let [rows] = data;

    let sources = [];
    let versions = [];
    let roof_colors = [];
    let exterior_colors = [];
    let product = {};

    rows.forEach((row) => {
      if (!sources.includes(row.source)) {
        sources.push({
          source: row.source,
          roof_color_name: row.roof_color_name,
          exterior_color_name: row.exterior_color_name,
        });
      }

      const existingVersion = versions.find(
        (v) => v.version_id === row.version_id
      );

      if (!existingVersion) {
        versions.push({
          version_id: row.version_id,
          name: row.name,
          price: row.price,
          battery_price: row.battery_price,
          deposit_price: row.deposit_price,
        });
      }
      const existingRoofColor = roof_colors.find(
        (rc) => rc.roof_color_id === row.roof_color_id
      );
      if (!existingRoofColor) {
        roof_colors.push({
          roof_color_id: row.roof_color_id,
          roof_name: row.roof_color_name,
          roof_source: row.roof_source,
        });
      }

      const existingExteriorColor = exterior_colors.find(
        (ec) => ec.exterior_color_id === row.exterior_color_id
      );
      if (!existingExteriorColor) {
        exterior_colors.push({
          exterior_color_id: row.exterior_color_id,
          exterior_name: row.exterior_color_name,
          exterior_source: row.exterior_source,
        });
      }
      const {
        source,
        version_id,
        name,
        price,
        battery_price,
        deposit_price,
        roof_color_id,
        exterior_color_id,
        roof_color_name,
        exterior_color_name,
        roof_source,
        exterior_source,
        ...rest
      } = row;

      product = { ...product, ...rest };
    });

    product.sources = sources;
    product.versions = versions;
    product.roof_colors = roof_colors;
    product.exterior_colors = exterior_colors;
    res.json({
      message: "get one car",
      car: product,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports.create = async (req, res) => {
  let {
    product_name,
    wattage,
    seat,
    airBag,
    batteryCapacity,
    guarantee,
    consumption,
    main_source,
  } = req.body;
  try {
    console.log(req.body);
    let data = await productServices.create(
      product_name,
      wattage,
      seat,
      airBag,
      batteryCapacity,
      guarantee,
      consumption,
      main_source
    );

    if (data[0].affectedRows > 0) {
      res.json({
        status: 200,
        message: "create success",
      });
    } else {
      res.json({
        status: 500,
        message: "create fail",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await productServices.remove(id);
    if (data[0].affectedRows > 0) {
      res.json({
        status: 200,
        message: "delete success",
      });
    } else {
      res.json({
        status: 500,
        message: "delete fail",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// module.exports.search = async (req, res) => {
//   try {
//     const { keyword } = req.params;
//     let data = await userServices.search(keyword);
//     let [rows] = data;
//     res.json({
//       message: "search success",
//       users: rows,
//     });
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };
// module.exports.follow = async (req, res) => {
//   try {
//     const { followerId, followingId } = req.body;

//     let data = await userServices.follow(followerId, followingId);
//     if (data[0].affectedRows > 0) {
//       res.json({
//         message: "follow success",
//       });
//     } else {
//       res.json({
//         message: "follow fail",
//       });
//     }
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// };

// module.exports.getFollowers = async (req, res) => {
//   try {
//     let data = await userServices.getFollowers();
//     let [rows] = data;
//     res.json({
//       message: "get followers success",
//       followers: rows,
//     });
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// };
