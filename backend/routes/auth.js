const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'JWTmynotebook$sign';


//Create User Using : Post "/api/auth/createuser". No login required
router.post('/createuser',[
   body('name', 'Enter a valid name').isLength({ min: 3 }),
   body('email', 'Enter a valid Email').isEmail(),
   body('password', 'Password must be 3 characters').isLength({ min: 3 }),
], async(req, res)=>{

  // if there are errors, return Bad request and the errors
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({ error: errors.array()})
   }

// check whether the user with this email already

try{
   let user = await User.findOne({email:req.body.email});
   if(user){
      return res.status(400).json({error : 'Sorry this User already exits'})
   }
   
   const salt = await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password, salt)

   // Create New User
   user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
   });
   
   const data = {
      user:{
         id:user.id
      }
   }
   const authtowken = jwt.sign(data, JWT_SECRET)
   //console.log(authtowken)

   res.json({authtowken})
}
//catch error
catch (error) {
   console.error(error.message);
   res.status(500).send("Some Error Occured");
}

})


//Authenticate User Using : Post "/api/auth/login". No login required

router.post('/login', [
   body('email', 'Enter a valid Email').isEmail(),
   body('password', 'Password connot be blank').exists(),
], async (req, res) => {

   // if there are errors, return Bad request and the errors
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({ error: errors.array()})
   }

   const{email, password} = req.body;
   try {
      let user = await User.findOne({email});
      if(!user){
         return res.status(400).json({error: "Please try to login with correct credentials"})
      }

      const passwordcompare = await bcrypt.compare(password, user.password)
      if(!passwordcompare){
         return res.status(400).json({error: "Please try to login with correct credentials"})
      }

      const data = {
         user:{
            id:user.id
         }
      }

      const authtoken = jwt.sign(data, JWT_SECRET)
      res.json({authtoken})
   }
   
   //catch error
   catch (error) {
      console.error(error.message);
      res.status(500).send("Inernal sever error");
   }


})


module.exports = router