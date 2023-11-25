const express = require("express");
const router = express.Router();

const {
    createOrder,
    getallOrder
} = require("../controller/binatedController");


router.route("/").post(createOrder).get(getallOrder);


module.exports = router;
