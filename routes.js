const express=require("express");
const router =express.Router();

router.get("/",function(req,res){
    console.log("Request Found");
    res.send("I am BInaya");
})

router.post("/",function(req,res){
    console.log("Request Found");
    res.send("Hello from post request");
})

module.exports=router;
