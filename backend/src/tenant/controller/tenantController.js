const asyncHandler = require("express-async-handler");
const Tenant = require("../model/tenantModel");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

  
  //@desc Create a orders
  //@route POST /users
  //@access public
  const createOrder = asyncHandler(async (req, res) => {
    const { order, instruction, design_color, background_color, image_path } = req.body;
    try {    
      // Create the orders
      const orders = await Tenant.create({
        order,
        instruction,
        design_color,
        background_color,
        image_path,
      });
  
      console.log(`Order created ${orders}`);
  
      res.status(201).json(orders);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  //@desc Create a order
//@route POST /orders
//@access public
const getallOrder = asyncHandler(async (req, res) => {


    try {
  
  
      // Create the order
      const order = await Tenant.findAll();
  
      console.log(`Order created ${order}`);
  
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  module.exports = { 
    createOrder,
    getallOrder
  };
  