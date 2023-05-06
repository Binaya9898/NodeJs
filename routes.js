const express=require("express");
const createNewPost = require("./function");
const router =express.Router();
// sending params
// router.get("/hi",function(req,res){
//     console.log("Request Found");
//     if(req.query.name !=undefined){
//         res.send("Hi, "+ req.query.name);
//     }
//     else 
//   {  res.send("Hello");}
// })
// router.post("/bye",function(req,res){
//     console.log(req.body);
//     res.send("BYE");
// })

// router.get("/byebye",function(req,res){
//     console.log(req.body.height); 
//     res.send("Hello from post request");
// })

router.post("/",(req,res)=>{
    createNewPost(req.body.postContent, req.body.postCreatedBy)
    .then(function (post) {
      res.send("Post Created successfully");
    })
    .catch(function (error) {
      res.send("Error Creating Post");
    });




})

module.exports=router;
