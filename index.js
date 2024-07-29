const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    res.send("Welcome to the app!"); 
})
app.get("/api",(req,res)=>{
    res.send("Welcome to the api service");
})


// port
app.listen(8090, () => {

    console.log("server listening on port  8090");
})
