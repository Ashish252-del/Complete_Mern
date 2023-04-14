const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const UserSchema = require("../Model/login");
const bcrypt = require("bcrypt");
const authenticate = require('../middleware/authenticate')
router.post("/user", async(req,res) => {
    try {
      const { name, username, email, phn, gender, pass } = req.body;
      if (!name || !username || !email || !phn || !gender || !pass) {
        return res.status(422).json({ error: "please fill all the fields" });
      }
      // note UserSchema.findOne will look in mongodb collection and here first email is from detabase and second one etered in postman or
      // frontend .findOne mehtode return document of that particular email id
      // means if you need to get uniquqe data
   
      const result = await UserSchema.findOne({ email: email });
      if (result) {
        res.status(422).json({ error: "user already exist" });
        throw new Error("User already exists!") // after throw new error it will go in error block
      }
      const encryptedpass = await bcrypt.hash(pass, 12); //code for encrypting
      const newUser = new UserSchema({
        name,
        username,
        email,
        phn,
        gender,
        pass: encryptedpass,
      });
       await newUser.save();
      res.json({ success: true, message: "new user is logged in" });
    } catch (error) {
      console.log("Getting an error");
        console.log(error );
        res.status(404).json({success:false, message:"user is not creates"})
    }
})

// login route
router.post('/signin', async (req, res) => {
   try {
     const { email, password } = req.body;
     if (!email || !password) {
       return res.status(400).json({ error: "Plz filled the data" });
     }
     const userLogin = await UserSchema.findOne({ email: email }); // in case email does not matched then null will be return by findOne
      // console.log(userLogin);
     // for checking password
     
     if (!userLogin) { return res.status(400).json({ error: "invalid email or password" }); }
   
     const isMatched = await bcrypt.compare(password, userLogin.pass);

     if ((!isMatched)) {
      return res.status(400).json({ error: "invalid email or password" });
     } else {
       // getting token
       let token = await userLogin.generateAuthToken();
       console.log("token mila kya");
       console.log(token);
       // now save token in the cookie
       // first parameter is cookie name and second is its value
       res.cookie("jwtoken", token, {
         expires: new Date(Date.now() + 25892000000), // after this time token will expire and user will log out Date.now()+25892000000 is in mili second wich is eqaul to 30 days
         httpOnly: true
         //secure:true  //it is applicable when we use https method
       });
       res.json({ success:true , message: "log in successfully" });
     }
   } catch (error) {
       console.log(error);
   }
})
 //About us ka page
router.get('/about', authenticate, (req, res) => {
  console.log(`hello my About`)
  res.json({success:true ,  data: req.rootUser })
});


// Log out ka page
router.get('/logout', (req, res) => {
  // we are clearing the cookie once cookie clear then user will log out
  res.clearCookie("jwtoken");
  res.status(200).json({message:'user logged out'})


})
module.exports = router;