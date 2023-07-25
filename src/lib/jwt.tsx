import jwt, { JwtPayload } from "jsonwebtoken"
import axios from "axios";

interface SignOption {
  algorithm?: any;
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  algorithm: "HS512",
  expiresIn: "3m",
};

export const authedTokenAxios = (accessToken: any, refreshToken: any) => {
  return axios.create({
    // header를 여기서 설정해주면,
    // 인스턴스를 실행할 때마다 매번 이 헤더가 자동으로 요청을 보낼 때 포함됨
    headers: {
      Authorization: `Bearer ${accessToken} ${refreshToken}`
    }
  })
}

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  // const header = {
  //   "typ": "JWT",
  //   "alg": "HS512"
  // };
  // const encodedHeader = new Buffer(JSON.stringify(header))
  //   .toString('base64')
  //   .replaceAll('=', '');
  // const encodedPayload = new Buffer(JSON.stringify(payload))
  //   .toString('base64')
  //   .replaceAll('=', '');
  // const crypto = require('crypto');
  // const signature = crypto
  //   .createHmac('sha512', process.env.TOKEN_SECRET_KEY)
  //   .update(`${encodedHeader}.${encodedPayload}`)
  //   .digest('base64')
  //   .replaceAll('=', '');

  //return `${encodedHeader}.${encodedPayload}.${signature}`
  require('dotenv').config();
  const jwt = require("jsonwebtoken");
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