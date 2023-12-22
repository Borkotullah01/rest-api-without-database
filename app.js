const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.routes");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});


module.exports = app;