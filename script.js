const express= require("express");
// console.log(express);
const httpServer=express();
httpServer.get("/",function(req,res){
    console.log("Request Found");
    res.send("I am BInaya");
})
httpServer.listen(5000,function(){
    console.log("Server listening on port 3000")
});