import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const accessToken = (id) =>{
  console.log(id ,'id')
   const payload = { id } ;
    const accessTokenID = process.env.ACCESS_TOKEN_SECRET;
    if (!accessTokenID) {
      throw new Error("ACCESS_TOKEN_SECRET is not defined");
    }

    const accessToken = jwt.sign(payload, accessTokenID, {
      expiresIn: "5m",
    });
    return accessToken
}

export const refreshToken = (id) => {
  const payload = { id };
  const refreshTokenID = process.env.REFRESH_TOKEN_SECRET;

  if (!refreshTokenID) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }

  const refreshToken = jwt.sign(payload, refreshTokenID, { expiresIn: "5d" });
  return refreshToken;
};

export const verifyToken = (token , secret) =>{
try {
      const decoded = jwt.verify(token, secret);
      return { payload: decoded, error: null };
    } catch (error) {
      if (error ) {
        console.error("Token verification failed: Token expired at", 
          error.expiredAt);
        return { payload: null, error: "TokenExpiredError" };
      }
      console.error("Token verification failed:", error);
      return { payload: null, error: "InvalidTokenError" };
    }
}

