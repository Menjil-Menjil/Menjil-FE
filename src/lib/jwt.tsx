import jwt, { JwtPayload } from "jsonwebtoken"
import axios from "axios";

export const authedTokenAxios = (accessToken: any, refreshToken: any) => {
  return axios.create({
    // header를 여기서 설정해주면,
    // 인스턴스를 실행할 때마다 매번 이 헤더가 자동으로 요청을 보낼 때 포함됨
    headers: {
      Authorization: `Bearer ${accessToken} ${refreshToken}`
    }
  })
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