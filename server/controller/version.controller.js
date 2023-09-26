const versionServices = require("../services/version.services");

module.exports.update = async (req, res) => {
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

    if (price || batteryPrice || depositPrice) {
      let updateVersion = await versionServices.update(
        price,
        batteryPrice,
        depositPrice,
        version
      );
      if (updateVersion[0].affectedRows) {
        res.json({
          message: "update car",
        });
      }
    }
  } catch (error) {
    res.json({
      message: "faile",
    });
  }
};
