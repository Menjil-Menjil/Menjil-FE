import jwt, { JwtPayload } from "jsonwebtoken"

interface SignOption {
  algorithm?: any;
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  algorithm: "HS512",
  expiresIn: "3m",
};

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.TOKEN_SECRET_KEY;
  return jwt.sign(payload, secret_key!, options);
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.TOKEN_SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}