const express= require("express");
const routes=require("./routes")
// console.log(express);
const httpServer=express();
httpServer.use(express.json());
httpServer.use(routes);

const mongoose = require("mongoose");

mongoose
  .connect(
    // "mongodb+srv://cfc-demo-user:asdfasdf1@cluster0.i35rvgk.mongodb.net/cfc-db",
    "mongodb://127.0.0.1:27017/db-name"
    ,
  )
  .then(function () {
    httpServer.listen(5000,function(){
        console.log("Server listening on dnjd port 5000")
    });  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });

// httpServer.listen(5000,function(){
//     console.log("Server listening on dnjd port 5000")
// });