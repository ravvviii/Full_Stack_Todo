const router = require("express").Router();
const listModel = require("../models/list");
const userModel = require("../models/user");



// Creating task
router.post("/addTask", async(req, res)=>{
    try {
        const {title, body, email} = req.body;
    const existingUser = await userModel.findOne({email})
    // console.log(existingUser);
    // res.send(existingUser)
    
    if(existingUser){
        const task = await listModel.create({
            title,
            body,
            user:existingUser._id
        })
        existingUser.list.push(task._id);
        await existingUser.save();
        
        res.status(200).send(task); 
    }
    else{
        res.status(401).send({message:"You are not login"})
    }


        
    } catch (error) {
        res.status(500).send({message:"Internal Server error"})
    }
})





// Update Task



router.put("/updateTask/:id", async(req, res)=>{
    try {
        const {title, body, email} = req.body;
    const existingUser = await userModel.findOne({email})
    // console.log(existingUser);
    // res.send(existingUser)
    
    if(existingUser){
        const updatedList =  await listModel.findByIdAndUpdate(req.params.id, {title, body});
        await updatedList.save();
        const list = await listModel.findOne({_id:req.params.id})
       res.send(list)
    }
    else{
        res.status(401).send({message:"You are not login"})
    }


        
    } catch (error) {
        res.status(500).send({message:"Internal Server error"})
    }
})






// Delete Task



router.put("/deleteTask/:id", async(req, res)=>{
    try {
        const {email} = req.body;
    const existingUser = await userModel.findOneAndUpdate({email}, {$pull:{list:req.params.id}})
    const existingTask = await listModel.findOne({_id:req.params.id})
    // console.log(existingUser);
    // res.send(existingUser)
    
    if(existingUser){
        await listModel.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.status(200).json({message:"Task deleted"})
        })
        
    }
    else{
        res.status(401).send({message:"Unable to delete"})
    }


        
    } catch (error) {
        res.status(500).send({message:"Internal Server error"})
    }
})



// Get all Task

router.get("/getTask/:id",async(req, res)=>{
    try {
        const list = await listModel.find({user:req.params.id}).sort({createdAt:-1});
       if(list.length>0){
        res.status(200).json({list:list})
       }
       else{
        res.status(200).send({message:"No task added yet"})
       }
        
    } catch (error) {
        console.log("Server Error");
                
    }
})





module.exports = router;