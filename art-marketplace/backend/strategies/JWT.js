const { sign, verify } = require("jsonwebtoken");
const createTokens = (user) => {
  const accessToken = sign(
    { username: user.userName, id: user._id },
    process.env.JWTsecret,
    {expiresIn:'1hr'}
  );
  const refreshToken=sign(
    {username:user.userName,id:user._id},
    process.env.JWTsecret,
    {expiresIn:'1hr'}
    );
  return {accessToken,refreshToken};
};
const validateToken=async (req,res,next)=>{
    const header=req.headers.authorization;
    if(!header) {
        return res.status(401).send("un authorized")
    }
    try{
        const auth=req.headers.authorization.split(" ")[1];
        const validToken=verify(auth,process.env.JWTsecret);
        if(validToken){
            req.authenticated=true;
            req.userId=validToken.id;
            return next();
        }
    }catch(e){
        return res.status(400).send({error:e});
    }
}
module.exports={createTokens,validateToken};
