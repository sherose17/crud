
const db =require("./models/db")
var express =require("express")
const employeeController =require("./controller/controler")
var app =express();
const path = require("path")
const exphbs =require("express-handlebars")

app.set("views",path.join(__dirname,"/views/"));
app.engine("hbs",exphbs({ extname: "hbs", defaultLayout:"mainLayout",layoutDir:__dirname + "/views/layouts/"}))
app.set("view engine","hbs")

app.use("/",employeeController);


 
app.listen(9000, () => {
    console.log("server runing")
    console.log("http://localhost:9000/")
})