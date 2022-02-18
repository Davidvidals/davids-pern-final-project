// DEPENDENCIES
const express = require("express");
const funkoController = require("./controllers/funkoController.js")

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use('/funkos',funkoController)
// ROUTES
app.get('/', (req,res)=>{
  res.send("Welcome to Funko World")
});

app.get('*',(req,res)=>{
  req.status(404).send('Page Not Found')
})

// EXPORT
module.exports = app;
