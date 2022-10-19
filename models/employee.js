const mongoose =require("mongoose")

var schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
} )

mongoose.model("details",schema)
