const express=require('express');
const router=express.Router();

//routes
router.get('/',(req,res)=>{
    res.send("home page with the input boxes");
});

router.get('/jobDetails',(req,res)=>{
    res.send("get all the job details");
}); 

module.exports=router;