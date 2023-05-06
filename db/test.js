const mongoose = require("mongoose");
const createNewPost = require("../function");

mongoose
  .connect(
    // "mongodb+srv://cfc-demo-user:asdfasdf1@cluster0.i35rvgk.mongodb.net/cfc-db",
    "mongodb://127.0.0.1:27017/db-name"
    ,
  )
  .then(function () {
    console.log("Connected!!");
    // const Post = require("./posts");
    // Post.create({
    //   content: "My Test Post",
    //   createdAt: Date.now(),
    //   createdBy: "Test Person",
    // }).then(function(post){
    //   console.log("Post Created")
    // }).catch(function(error){
    //   console.log("Error creating post: "+ error)
    // })

    createNewPost("New Post Created","Binaya");
    
  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });