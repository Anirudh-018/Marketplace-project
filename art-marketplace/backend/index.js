require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./dbConn");
const cookieParser = require("cookie-parser");
const { auth_route, art_route, user_route } = require("./routes");
connection();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 5000; // Fix: use 'PORT' instead of 'port'

// app.post("/signup", async (req, res) => {
//   const { username, email, password, confirmPassword } = req.body;
//   console.log(req.body);
//   if (password == confirmPassword) {
//     try {
//       const user = await UserModel.create({
//         userName: username,
//         email: email,
//         password: await bcrypt.hash(password, 10),
//       });

//       if (user) {
//         console.log(user);
//         res.status(201).send("User created successfully"); // Fix: use 'status' instead of 'sendStatus'
//       } else {
//         res.status(400).send("User not created");
//       }
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   } else {
//     console.log(confirmPassword);
//     res.status(400).send("Passwords do not match");
//   }
// });

// app.post("/login", async (req, res) => {
//   const { userName, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ userName: userName });
//     if (!user) {
//       res.status(400).send("user doesnt exist");
//     } else {
//       const pass = await bcrypt.compare(password, user.password);
//       if (pass) {
//         const accessToken=await JWT.createTokens(user);
//         res.cookie("JWT",accessToken,{
//             maxAge:60*60*1000
//         });
//         res.status(200).send(user);
//       }
//       else{
//         res.status(400).send("Incorrect password");
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     res.status(500).send("Internal server error");
//   }
// });

// app.get("/profile",JWT.validateToken,async(req,res)=>{
//     res.send("profile");
// });

app.use("/auth", auth_route);
app.use("/art", art_route);
app.use("/user", user_route);
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
