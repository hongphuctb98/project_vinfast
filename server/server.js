const express = require("express");
const server = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const productDetailRoutes = require("./routes/productDetail.routes");
const showroomRoutes = require("./routes/showroom.routes");
const orderRoutes = require("./routes/order.routes");
const versionRoutes = require("./routes/version.routes");
const mediaRoutes = require("./routes/media.routes");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(cors());

server.use("/api/v1/user", userRoutes);
server.use("/api/v1/auth", authRoutes);
server.use("/api/v1/products", productRoutes);
server.use("/api/v1/productdetail", productDetailRoutes);
server.use("/api/v1/showrooms", showroomRoutes);
server.use("/api/v1/order", orderRoutes);
server.use("/api/v1/version", versionRoutes);
server.use("/api/v1/media", mediaRoutes);
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.json("Hello from server");
});

server.listen(3636, () => {
  console.log("server is running on port http://localhost:3636");
});
