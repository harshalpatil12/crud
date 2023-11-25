const express = require("express");
const router = express.Router();

const {
    createOrder,
    getallOrder
} = require("../controller/tenantController");


router.route("/").post(createOrder).get(getallOrder);


module.exports = router;
