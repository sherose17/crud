const mongoose= require("mongoose")
const employee = require("./employee")
mongoose.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("connected")
    }
})