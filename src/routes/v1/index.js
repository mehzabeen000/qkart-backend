const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");
const { route } = require("./auth.route");
const router = express.Router();

router.use('/users', userRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute)

module.exports = router;
