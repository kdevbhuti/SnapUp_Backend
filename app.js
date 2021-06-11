const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mainrouter = require("./src/router/MainRoute")

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.set("port", process.env.PORT || 4000);

app.use("/", mainrouter)

app.listen(app.get("port"), ()=>{
    console.log("Application running in port: " + app.get("port"));
})