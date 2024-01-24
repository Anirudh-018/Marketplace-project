require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const connection=require('./dbConn');
const UserModel=require('./models/user');

connection();

app.use(express.json);
app.use(cors());
const port=process.env.port||5000;

app.post('/signup',(req,res)=>{
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
