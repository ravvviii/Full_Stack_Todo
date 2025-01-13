const mongoose = require("mongoose")

const conn = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/todo_App").then(()=>{
          console.log("Database Connected");

      })
    } catch (err) {
      console.error("Connection failed", err);
    }
  };
  

  conn();