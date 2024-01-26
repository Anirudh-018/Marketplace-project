const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("../strategies/JWT");
const Authcontroller = {
  async signup(req, res,next) {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body);
    if (password == confirmPassword) {
      try {
        const user = await UserModel.create({
          userName: username,
          email: email,
          password: await bcrypt.hash(password, 10),
        });

        if (user) {
          console.log(user);
          res.status(201).send("User created successfully"); // Fix: use 'status' instead of 'sendStatus'
        } else {
          res.status(400).send("User not created");
        }
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
      }
    } else {
      console.log(confirmPassword);
      res.status(400).send("Passwords do not match");
    }
  },

  async login(req, res) {
    const { userName, password } = req.body;
    try {
      const user = await UserModel.findOne({ userName: userName });
      if (!user) {
        res.status(400).send("user doesnt exist");
      } else {
        const pass = await bcrypt.compare(password, user.password);
        if (pass) {
          const accessToken = await JWT.createTokens(user);
          res.cookie("JWT", accessToken, {
            maxAge: 60 * 60 * 1000,
          });
          res.status(200).send(user);
        } else {
          res.status(400).send("Incorrect password");
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal server error");
    }
  },
  async profile(req, res) {
    try{
        const user=await UserModel.findById(req.userId);
        console.log(user);
        res.status(200).send(user);
    }
    catch(e){
        res.status(500).send("Internal serval error");
    }
  },
};
module.exports = Authcontroller;