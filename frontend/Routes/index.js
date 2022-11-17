const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const UserSchema = require("../Model/login");
const bcrypt = require("bcrypt");
router.post("/user", async(req,res) => {
    try {
      const { name, contact, email, address, password } = req.body;
      if (!name || !contact || !email || !address || !password) {
        return res.status(422).json({ error: "please fill all the fields" });
      }
      // note UserSchema.findOne will look in mongodb collection and here first email is from detabase and second one etered in postman or
      // frontend .findOne mehtode return document of that particular email id
      // means if you need to get uniquqe data
      UserSchema.findOne({ email: email }).then((userExist) => {
        if (userExist)
          return res.status(422).json({ error: "user already exist" });
      });
      const encryptedpass = await bcrypt.hash(password, 12); //code for encrypting
      const newUser = new UserSchema({
        name,
        contact,
        email,
        address,
        password: encryptedpass,
      });
      await newUser.save();
      res.json({ success: true, message: "new user is logged in" });
    } catch (error) {
        console.log(error);
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
     const isMatched = await bcrypt.compare(password, userLogin.password);

     if ((!userLogin)||(!isMatched)) {
       res.json({ error: "invalid email or password" });
     } else {
       // getting token
       let token = await userLogin.generateAuthToken();
       console.log("token mila kya");
       console.log(token);
       // now save token in the cookie
       // first parameter is cookie name and second is its value
       res.cookie("jwtoken", token, {
         expires: new Date(Date.now() + 25892000000), // after this time token will expire and user will log out Date.now()+25892000000 is in mili second wich is eqaul to 30 days
       });
       res.json({ message: "log in successfully" });
     }
   } catch (error) {
       console.log(error);
   }
 })
module.exports= router;