//root file....
//import Express Library
const express = require('express'); // common node js module

const app = express(); //app object....

//create route handler "get"
// get, post, put.....
app.get('/', (req,res)=> {
    res.send({hi : "there"});
});


//port 5000 select;
app.listen(5000);