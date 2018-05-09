const express = require("express");

const app = express();


app.get("/", function(req, res){
    res.render("index.html");
});

const port = process.env.PORT || 8080;
app.listen(port, process.env.IP, function(){
    console.log("server started ...");
});