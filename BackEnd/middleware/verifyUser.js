// to verify user token
const JWt = require("jsonwebtoken");

// access env var
const JWT_SEC = process.env.JWT_SEC;

const verifyUser = async (req, res, next) => {

    // Get user from jwt token and append it to the request
  let token = await req.headers.token;
  if(!token){
    return res.status(401).json({msg:'token not found'});
  }
  try {
    // console.log(token);
    let x = await JWt.verify(token, JWT_SEC);
    req.user=x;
    // console.log(x);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({msg: 'Access denied'});
  }
//   res.send('heoolo')
};

module.exports = verifyUser;
