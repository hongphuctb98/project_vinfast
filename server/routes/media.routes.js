const express = require("express");
const router = express.Router();
const db = require("../utils/database");
const multer = require("multer");

const storageMulti = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/images`);
  },
  filename: function (req, file, cb) {
    let extArr = file.originalname.split(".");
    let ext = extArr[extArr.length - 1];
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploadMulti = multer({ storage: storageMulti }).array("images", 5);

router.post("/", (req, res) => {
  uploadMulti(req, res, async function (err) {
    try {
      if (err instanceof multer.MulterError) {
        Promise.reject(err);
      } else if (err) {
        Promise.reject(err);
      } else {
        let { files } = req;
        let result = [];
        console.log(files);
        for await (let file of files) {
          let response = db.execute(
            "INSERT INTO media(type, source) VALUES(?, ?)",
            ["image", `http://localhost:3636/images/${file.filename}`]
          );
          result.push(response);
        }
        let response = await Promise.all(result);
        let returnData = [];
        files.forEach((e, i) => {
          returnData.push({
            media_id: response[i][0].insertId,
            source: `http://localhost:3636/images/${e.filename}`,
          });
        });
        res.json({
          uploadedData: returnData.sort((a, b) => a.media_id - b.media_id),
          message: "Upload successfully",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
    // Everything went fine.
  });
});

module.exports = router;
