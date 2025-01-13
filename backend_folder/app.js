const express = require("express")
const app = express();
require("./connection/conn");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth");
const list = require("./routes/list");

// Middleware

// Json me data ko convert karne ke liye
app.use(express.json());

// Cookies set karne ke liye
app.use(cookieParser());

// Base Url
app.get("/", (req, res)=>{
    res.send("Ola")
})

// Saree authentication route yaha se jayenge
app.use("/auth", auth);

// Saree todo ke CRUD route yaha se jayenge 
app.use("/task", list);

// Express ka server start karne ke liye 
app.listen(1000,()=>{
    console.log(`Server has started on http://localhost:1000`);
    
})









