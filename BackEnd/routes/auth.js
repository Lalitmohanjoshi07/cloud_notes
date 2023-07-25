const express = require("express");
const User = require("../models/Users");
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const verifyUser= require('../middleware/verifyUser')


// access env var
const JWT_SEC = process.env.JWT_SEC;

//initializing router
const router = express.Router();

//PORT 1:  create user using: Post "/api/auth/signup". Dosen't require auth
router.post(
  "/signup",
  [
    check("email", "Please enter valid email")
      .isEmail()
      .isLength({ min: 10, max: 30 }),
    check("name", "Name length should be 5 to 20 characters").isLength({
      min: 5,
      max: 20,
    }),
    check(
      "password",
      "Password length should be atleast 8 to 10 characters"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    let success=false;
    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req);

    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
      res.status(400).json({success,errors});
      return;
    }

    try {
      // checking weather email already exist or not
      let x = await User.findOne({ email: req.body.email });
      if (x) {
        res.json({success:success,error:"email already registered"});
        return;
      }

      //creation of hash
      let password = req.body.password;
      const salt = await bcrypt.genSaltSync(10);
      password = await bcrypt.hashSync(password, salt);

      // if user dosen't exists then store it in database
      let user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        date: req.body.date,
      })
      
      let data={
        user:{
          id: user._id
        }
      }
      let token=await JWT.sign(data,JWT_SEC);
      success=true;
      res.json({success,token});

    } catch (err) {
      res.status(500).send({success,error:'server error'});
      console.log(err);
    }
  }
);


//PORT 2:  UserLogin using: Post "/api/auth/login".No authentication required.
router.post('/login', [
  check("email", "Please enter valid email")
    .isEmail()
    .isLength({ min: 10, max: 30 }),
  check('password', 'password cannot be empty').isLength({ min: 1 })
], async (req, res) => {
  let success=false;
  // validationResult function checks whether
  // any occurs or not and return an object
  const errors = validationResult(req);

  // If some error occurs, then this
  // block of code will run
  if (!errors.isEmpty()) {
    res.status(400).json({success,errors});
    return;
  }
  try {
    //checking if the user exists or not
    const x = await User.findOne({ email: req.body.email });
    if (!x) {//if user dosen't exists
      return res.json({success, msg: "invalid credentials" });
    }
    //if user exists
    //validating password
    const validate = await bcrypt.compareSync(req.body.password, x.password);
    if (validate) {
      //generating token
      var token = JWT.sign({ id: x._id }, JWT_SEC);
      success=true;
      res.json({success,token});
    }
    else
      res.status(400).json({success,error:"invalid credentials"});
  } catch (error) {
    console.log(error)
    return res.status(500).send({success,error:'server error'});
  }
});


//PORT 3:  verify user using: Post "/api/auth/verify".Authentication required.
router.post('/verify',verifyUser,async (req,res)=>{
  try{
  let user = await User.findOne({_id: req.user.id},'-password');
  res.send(user);
  }catch(err){
    return res.status(500).send('server error');
  }
});


module.exports = router;
