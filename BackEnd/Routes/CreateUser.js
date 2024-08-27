// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const StatusCodes = ("http-status-codes");
//import { DELETE_SUCCESS, ERROR_MESSAGE, USER_NOT_FOUND, UPDATE_SUCCESS } from '../constants/constants.js';

//import bcrypt from "bcryptjs";
//import { User } from '../models/User.js';
//import { DELETE_SUCCESS, ERROR_MESSAGE, USER_NOT_FOUND, UPDATE_SUCCESS } from '../constants/constants.js'
//import { StatusCodes } from 'http-status-codes';
//import jwt from 'jsonwebtoken';


// to verify token , to protected particular routes
// function verifyToken(request,response,next){
//   const header=request.get('Authorization');   //header->authorization, get function used to get data from http request header
//   if (header) {
//       const token=header.split(" ")[1];      //for to get token fron bearer gdgdfwhihvshvssj,  after space
//       jwt.verify(token,"hemant123",(error,payload)=>{
//           if (error) {
//               response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid token"});  
//           }
//           else{
//               next();   //if token verify then send to next
//           }
//       });
//   } else {
//       response.status(StatusCodes.UNAUTHORIZED).send({message:"Please login first"});      //if user not exist
//   }
// }

// //api for insert user data (sign up )
// app.post("/User", async (request, response) => {
//   try {
//       const reqData = request.body;
//       reqData['password'] = bcrypt.hashSync(reqData.password, 10);
//       // reqData['confirmpassword'] = bcrypt.hashSync(reqData.confirmpassword, 10);
//       const userDetails = new User(reqData);
//       await userDetails.save();
//       response.send({ message: "User Inserted" });
//   } catch (error) {
//       console.error(error);
//       response.status(500).send({ message: "Something Went wrong" });
//   }
// });


// // login API(it check given crediential from database compare and do login)
// app.post("/User/login", async(request, response) => {
//   try {
//       const user= await User.findOne({ email: request.body.email });
//       if (user) {
//           if (bcrypt.compareSync(request.body.password, user.password))
//            {
//               // Generate and send a token (uncomment if needed)
//               const token=jwt.sign({email:user.email},"hemant123");
//               response.status(200).send({ message: "Login successful", token: token });

//               // response.status(StatusCodes.OK).send({ message: "Login successful" });
//           }
//      else {
//           response.status(500).send({ message: "Invalid email or password !" });
//       }
//   } else {
//       response.status(500).send({ message: "Invalid email or password........" });
//   }
// } catch (error) {
//   console.error(error);
//   response.status(500).send({ message: "Something went wrong" });
// }
// });






const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "mynameisganeshiamfrompune";



//signup
router.post(

  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
    body("location").isLength({ min: 5 }),
    body("address").isLength({ min: 15 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
        address: req.body.address,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
  
);



//login user:

router.post(
  "/loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    let password = req.body.password;

    try {
      let userData = await User.findOne({ email: email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials." });
      }
      const pwdcompare = await bcrypt.compare(password, userData.password);
      if (!pwdcompare) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials." });
      }
      const data = { user: { id: userData.id } };
      const authToken = jwt.sign(data, jwtsecret);
      return res.json({ success: true, authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);




module.exports = router;
