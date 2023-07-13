
const express = require("express"); // goto "https://express-validator.github.io/docs/" for validator documentation
const { body, validationResult } = require("express-validator"); // use "npm install --save express-validator"
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../module/User");
require('dotenv').config();
const bycrypt = require("bcrypt");

// for JWT authetication
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// route 1 for creating user

router.post(
  "/createuser",
  // this part is to check wether user has given correct input or not
  [
    // here after email a msg is there which shown with the error for a particular value
    body("name", "enter the valide email").isLength({ min: 3 }), // check naem lenght atleat 4 char long
    body("email", "enter the valide email").isLength({ min: 7 }), // check naem lenght atleat 4 char long
    body("password", "Enter the correct password").isLength({ min: 5 }), //password of minimum lenght 5
  ],
  // below we have to make this function as async because we are using asyncronus function
  async (req, res) => {
    // if there  are errors, return Bad request and the errors
    // Finds the validation errors in this request and wraps them in an object with handy functions
    let Success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({"success":Success,errors: errors.array() });
    }

    try {
      // check whaether the user with the email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({"success":Success, error: "user already exists" });
      }
      // geting salt from the function
      const salt = await bycrypt.genSalt(10);
      // adding the password and creting hash of it
      const secpass = await bycrypt.hash(req.body.password, salt);
      // adding data to the collection
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      // for jwt authentication taking id of the user
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken);a
      // this is call header and only use one time in a flow
      
      Success=true;
      res.json({"success":Success,authtoken });

    } catch (error) {
      // this is used to catch error which is in the try block
      console.error(error.messsage);
      res.status(500).json({"success":Success, error: "some error occured" });
    }
  }
);

//  In vedio no. 50 : send authtoken
// creating endpoint for login authentication

// route 2 authenticate user No login require
router.post(
  "/login",
  [
    body("email", "enter the valide email").isLength({ min: 4 }),
    body("password", "enter the password").exists(),
  ],
  async (req, res) => {
    let Success = false;
    const errors = validationResult(req); // to check weather email is valide or not
    if (!errors.isEmpty()) {
      return res.status(400).json({"success":Success, errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({"success":Success, error: "invalid credential" });
      }
      // compare password and hash and return bool value
      const comppass = await bycrypt.compare(password, user.password);

      if (!comppass) {
        return res.status(400).json({"success":Success,error: "invalid credential" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      // this is call header and only use one time in a flow
      Success=true;
      res.json({"success":Success,authtoken });

      // this is used to catch error which is in the try block
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("some internal error");
    }
  }
);



// here comes the concept of middleware
router.post("/getuser", fetchuser, async (req, res) => {
  let Success = false;
  try {
    let userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    Success=true;
    res.json({"success":Success,user:user});
  } catch (error) {
    console.error(error);
    res.status(500).json({"success":Success,error:"some internal error in get"});
  }
});

module.exports = router;


