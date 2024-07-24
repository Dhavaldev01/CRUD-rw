const express = require('express');
const app = express();
const db = require("./db.js");


const Port = 4001

// Middleware 
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 

// Import Router file 
const Personeroutes = require('./Routes/userRoutes.js')
app.use("/person" ,Personeroutes);



app.get("/" , (req ,res)=>{
    res.send("Hello Dhaval...")

})

app.listen(Port, ()=>{
    console.log("Server Is Runing" , Port);
})