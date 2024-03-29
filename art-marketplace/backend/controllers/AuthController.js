const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("../strategies/JWT");
const axios = require("axios");
const Authcontroller = {
  async signup(req, res) {
    const data = req.body;
    if (data.password === data.confirm) {
      try {
        const image = await axios.get("https://randomuser.me/api");
        if (!(await UserModel.findOne({ userName: data.name }))) {
          const user = await UserModel.create({
            userName: data.name,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
            imageUrl: image.data.results[0].picture.large,
          });
          console.log(user);
          if (user) {
            res.status(201).send("User created successfully"); // Fix: use 'status' instead of 'sendStatus'
          } else {
            res.status(424).send("User not created");
          }
        } else {
          res.status(403).send("already exixting");
        }
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.status(400).send("Passwords do not match");
    }
  },

  async login(req, res) {
    console.log("hit");
    const { userName, password } = req.body;
    try {
      const user = await UserModel.findOne({ userName: userName });
      if (!user) {
        res.status(204).send("user doesnt exist");
      } else {
        const pass = await bcrypt.compare(password, user.password);
        if (pass) {
          const { accessToken, refreshToken } = await JWT.createTokens(user);
          res.cookie("JWT", accessToken, {
            maxAge: 60 * 60 * 1000,
          });
          res.cookie("refresh", refreshToken, {
            maxAge: 60 * 60 * 1000,
          });
          res.status(200).send({ userId: user._id });
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
    try {
      const user = await UserModel.findById(req.userId);
      console.log(user);
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send("Internal serval error");
    }
  },
  async logout(req, res) {
    try {
      res.clearCookie("JWT");
      console.log("logged out");
      res.status(200).send("logged out");
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  },
};
module.exports = Authcontroller;
