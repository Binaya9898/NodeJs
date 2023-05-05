const express=require("express");
const router =express.Router();

router.get("/hi",function(req,res){
    console.log("Request Found");
    res.send("HI");
})
router.get("/bye",function(req,res){
    console.log("Request Found");
    res.send("BYE");
})

router.post("/",function(req,res){
    console.log("Request Found");
    res.send("Hello from post request");
})

module.exports=router;
