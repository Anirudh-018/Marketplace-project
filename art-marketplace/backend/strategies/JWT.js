const { sign, verify } = require("jsonwebtoken");
const createTokens = (user) => {
  const accessToken = sign(
    { username: user.userName, id: user._id },
    process.env.JWTsecret,
    {expiresIn:'1hr'}
  );
  return accessToken;
};
const validateToken=async (req,res,next)=>{
    const token=req.cookies["JWT"];
    if(!token) 
        return res.status(401).send("un authorized")
    try{
        const validToken=verify(token,process.env.JWTsecret);
        console.log(validToken);
        if(validToken){
            req.authenticated=true;
            console.log("next");
            return next();
        }
    }catch(e){
        return res.status(400).send({error:e});
    }
}
module.exports={createTokens,validateToken};
