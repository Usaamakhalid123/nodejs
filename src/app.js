import express from "express";  //import express from Express
// object               //packege

import studentRouter from "./router/student.js";

const app=express();
//storing an instance of express(object) in app variable
//it gives us get
app.use(studentRouter);

//get takes path and call back function and gives response  res= Response & req=Request
app.get("/",(req,res)=>{
    return res.json({message:"Fist API of me in Class"}); // becuase API works in json
});

app.listen(3300,()=>{
    console.log("Listening on 3300!");
});


// Server(app.js)->Router(if present)->Controller->Model-> same way back