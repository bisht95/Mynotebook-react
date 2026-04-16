const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

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
   })
   
   res.json(user)
}
//catch error
catch (error) {
   console.error(error.message);
   res.status(500).send("Some Error Occured");
}

})

module.exports = router