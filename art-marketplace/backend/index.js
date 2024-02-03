require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./dbConn");
const cookieParser = require("cookie-parser");
const { auth_route, art_route, user_route } = require("./routes");
connection();

app.use(express.json());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
const port = process.env.PORT || 5000; 
app.use("/auth", auth_route);
app.use("/art", art_route);
app.use("/user", user_route);
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
