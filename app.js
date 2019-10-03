const express=require('express');
const app=express();
const jobRoute=require('./JobPortal/Routes/jobPortalRoute');
const mongoose=require('mongoose');
require('dotenv/config');

app.use('/jobPortal',jobRoute);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('connected to db');
});
app.listen(3000);