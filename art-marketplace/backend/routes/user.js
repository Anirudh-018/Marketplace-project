const express = require("express");
const router = express.Router();
const JWT = require("../strategies/JWT");
const UserController = require("../controllers/UserController");
router.get("/getDetails", JWT.validateToken, UserController.getUser);
router.patch("/updateUser", JWT.validateToken, UserController.updateUser);
module.exports = router;
