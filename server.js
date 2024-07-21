
const express = require("express");
const { dbconnect } = require("./config/database");
const allJobs = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
//create object of the express
const app = express();

//config dotenv file
require("dotenv").config();

//import the database and connect call the function
dbconnect();

//port addresss
port = process.env.PORT;
console.log(port);

//body to parser to pass the client req data into json object
app.use(express.json()); 

//mount the api

app.use("/api/v1" , allJobs);
app.use("/api/v1" , userRoutes);


//listen at port 3000
app.listen(port , ()=> {
    console.log(`server is running successfully on port ${port}`);
});