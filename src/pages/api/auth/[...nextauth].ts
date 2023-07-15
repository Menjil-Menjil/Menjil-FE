import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

let loginMode = "";
let jwtTokenData = {};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  if (req.body.loginMode !== undefined) {
    loginMode = req.body.loginMode;
  }

  return await NextAuth(req, res, {
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        authorization: {
          params: {
            loginType: "login" || "register"
          },
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
          params: {
            loginType: "login" || "register"
          },
        }
      }),
    ],

    callbacks: {
      // 로그인 콜백 함수
      async signIn({ user, account }: any) {
        if (loginMode === "login") {
          try {
            const res = await axios
              .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
                email: user.email,
                provider: account.provider
              })
            jwtTokenData = res.data;
            return res?.data; // 필수
            // 서버 API 요청을 통해 받은 token(access, refresh) 저장
            // privateToken = data.token
          } catch (e: any) {
            throw new Error(JSON.stringify({message: e.message, provider: account.provider}));
          }
        } else if (loginMode === "register") {
          try {
            const res = await axios
              .get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup?email=${user.email}&provider=${account.provider}`
              )
            return res?.data; // 필수
            // 서버 API 요청을 통해 받은 token(access, refresh) 저장
            // privateToken = data.token
          } catch (e: any) {
            throw new Error(JSON.stringify({message: e.response.data.message, provider: account.provider}));
          }
        }
      },

      // jwt 콜백 함수, 토큰에 커스텀 정보(이메일, sns)를 담는다
      async jwt({token, account, user}: any) {
        if (account) {
          token = {
            id: user.email,
            provider: account.provider,
            data: jwtTokenData,
          }
        }
        return token // 반환해주면, session 콜백으로 전달된다.
      },

      // session 콜백 함수, 위의 토큰 정보를 세션 데이터에 업데이트한다.
      async session({ session, token }: any) {
        //session.accessToken = privateToken;
        session.user.email = token.id;
        session.provider = token.provider;
        session.accessToken = token.data.accessToken;
        session.refreshToken = token.data.refreshToken;

        return session;
      },
    },

    pages: {
      signIn: '/',
      signOut: '/',
      error: '/error',
    },

    secret: process.env.NEXTAUTH_SECRET,

  })
}