require('dotenv').config();
require('express-async-errors');
const express = require("express");
const app = express();

//displayed html
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

//middleware
app.use(express.static("public"));
app.use(express.json());
// app.use()

//route
const mainRoute = require("./routes/router");
app.use('/api/v1', mainRoute);


//to start the server
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();