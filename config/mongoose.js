const mongoose = require('mongoose');

//const URL = process.env.URL;

mongoose.connect(process.env.URL)
.then(()=>console.log('MongoDb Is Up and Connected'))
.catch((err)=>console.log('Error connected To MongoDb',err));