const mongoose =require('mongoose');

const jobPortalSchema=mongoose.Schema({
    companyName :{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('jobPortal',jobPortalSchema);