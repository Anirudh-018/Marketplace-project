const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const UserController = {
  async getUser(req, res) {
    try {
      const user = await UserModel.findById(req.userId);
      if (user) {
        res.status(302).send(user);
      } else {
        res.status(401).send("user details not found");
      }
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  },
  async updateUser(req, res) {
    if (req.body.password) {
      req.body.password = bcrypt(req.body.password, 10);
    }
    try {
      const user = await UserModel.findById(req.userId);
      if (user) {
        const updatedUser = await UserModel.findOneAndUpdate(
          { _id: req.userId },
          req.body
        );
        if (updatedUser) {
          res.status(200).send(updatedUser);
        } else {
          res.status(400).send("couldn't delete");
        }
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal server error");
    }
  },
};
module.exports = UserController;
