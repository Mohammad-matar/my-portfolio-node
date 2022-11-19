const { Schema, model } = require("mongoose");

const ExperienceSchema=new Schema({

    name:{
       type:String,
       required:true 
    },

    info:{
        type:String,
        required:true
    },

    details:{
        type:String,
        required:true
    },
},
{
 timestamps:true,
 collection:"Experiences"   
})
const Experience=model("Experiences",ExperienceSchema);
module.exports=Experience;
