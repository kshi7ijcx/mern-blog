import mongoose from "mongoose";

const schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
},{
    timestamps: true
});