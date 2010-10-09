const mongoose = require("mongoose")



const connection=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URI)
        console.log("database connected")
    }catch(err){
        console.log(err)
    }
}

module.exports=connection