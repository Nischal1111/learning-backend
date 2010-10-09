const mongoose = require("mongoose")

const blogSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    }
})

const blogs=mongoose.model("blogs",blogSchema)

module.exports=blogs