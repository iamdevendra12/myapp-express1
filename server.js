const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const routerEmployee=require('./routes/employees')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json())
app.use('/emp',routerEmployee)
app.listen(9898,'0.0.0.0',()=>{
console.log('server started ....')
});