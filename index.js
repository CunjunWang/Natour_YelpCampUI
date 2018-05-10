const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, process.env.IP, function(){
    console.log("server started ...");
});