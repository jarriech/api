var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var routes = require("./routes/index");
require("./db")

// configuracion del servidor

var server = express()

server.name= "API"

// Middlewares

server.use(express.json())  // para dar formato json(body)
server.use(express.urlencoded({ extended: false }));
server.use(cors())
server.use(morgan("tiny"));
//server.use("/", (req,res,next) =>{
   // console.log("mi moddleware");
 //   next();
//});

//  conexion

server.use("/api", routes);

// Error 
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;