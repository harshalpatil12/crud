const express = require("express");
const cors = require('cors');
const sequelize = require('./config/database');
const Auth = require('./src/auth/model/authModel')
const Binated = require('./src/binated/model/binatedModel')
const Tenant = require('./src/tenant/model/tenantModel')
const dotenv = require("dotenv").config();

// const errorHandler = require("./middleware/errorHandler");

//sequelize.sync({force:true}).then(()=> console.log("db is ready"));
sequelize.sync().then(()=> console.log("db is ready"));

const app = express();

const port =  5005;
const host =  '127.0.0.1';

//Middleware
app.use(cors());
app.use(express.json());

app.use("/auths", require("./src/auth/routes/authRoute"))
app.use("/binated", require("./src/binated/routes/binatedRoute"))
app.use("/tenant", require("./src/tenant/routes/tenantRoute"))

// app.use(errorHandler);
app.listen(port, ()=>{
  console.log(`server is running on :${port}`)
});