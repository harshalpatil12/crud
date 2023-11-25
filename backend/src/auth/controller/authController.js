const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../model/authModel");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//@desc Create a user
//@route POST /users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, username, password, role, mobno } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Username and password are required." });
      return;
    }
  
    // Check if the user already exists
    const userAvailable = await Auth.findOne({ raw: true, where: { username: username } });
    if (userAvailable) {
      res.status(400).json({ message: "User already registered!" });
      return;
    }
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password: ", hashedPassword);
      
      // Create the user
      const auth = await Auth.create({
        firstname,
        lastname,
        username,
        password: hashedPassword,
        role,
        mobno,
      });
  
      console.log(`User created ${auth}`);
  
      // Exclude the 'password' field from the response
      const responseUser = { ...auth.toJSON() };
      delete responseUser.password;
  
      res.status(201).json(responseUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  //@desc Login user
//@route POST /users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required." });
    return;
  }
  const user = await Auth.findOne({raw: true, where: {username: username} });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.user_id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
    
      { expiresIn: "7d" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message:"username or password is not valid"});
  }
});


//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

  
  module.exports = { 
    registerUser,
    loginUser,
    currentUser
  };
  