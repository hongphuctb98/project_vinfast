const showroomServices = require("../services/showroom.services");
const _ = require("lodash");

module.exports.findAll = async (req, res) => {
  try {
    let result = await showroomServices.findAll();
    let [rows] = result;
    let showrooms = _.groupBy(rows, "city");
    res.json({
      message: "get all showroom",
      showrooms,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
