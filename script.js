const express= require("express");
const routes=require("./routes")
// console.log(express);
const httpServer=express();
httpServer.use(routes);
httpServer.listen(5000,function(){
    console.log("Server listening on dnjd port 5000")
});