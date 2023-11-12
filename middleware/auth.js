import jwt from "jsonwebtoken";


const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //  const isCustomAuth = token.length < 500;
// console.log(token)
    let decodedData;
    // && isCustomAuth
    if (token) {      
      decodedData = jwt.verify(token, process.env.SECRET_KEY);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
