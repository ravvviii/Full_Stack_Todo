const router = require("express").Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");





// Signup

router.post("/register", async (req, res) => {
    let { userName, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User already Exist!");

    try {


        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = await userModel.create({
                    userName,
                    email,
                    password: hash
                });

                let token = jwt.sign({ email: email, userid: user._id }, "abcsdygf");
                res.cookie("token", token);
                res.send(user)
            })
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({message:"Something went wrong"})
        

    }
});





// SignIn

router.post("/login", async (req, res) => {
    let { email,password } = req.body;
    let user =  await userModel.findOne({email});
    if(!user) return res.status(500).send("Something went wrong");

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
            let token =  jwt.sign({email:email, userid:user._id}, "abcsdygf");
                res.cookie("token", token);
                const {password, ...other} = user._doc;

            res.status(200).send(other);
        } 
            
            else res.status(500).send({message:"Invalid credentials"})
    })
    
});






module.exports = router;