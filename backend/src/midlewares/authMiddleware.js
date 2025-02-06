import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = async (req, res, next) =>{
    try {
        const auth = req.headers.authorization;
        if(auth){
            res.status(401).json({msg:"Invalid authorization "})
        }
        const token = auth.split(' ')[1]
        if(token){
            res.status(200).json({msg:"token is not valid"})
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decodedToken
        next()
    } catch (error) {
         res.status(400).send("Invalid token");
    }
}
export default authMiddleware