import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";
import {JWT} from "next-auth/jwt";
import {authedTokenAxios, refreshingTokenAxios, verifyTokenExp, verifyTokenUserId} from "@/lib/jwt";

let loginMode: string;

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
            const response = await axios
              .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
                email: user.email,
                provider: account.provider
              })
            const resToken = response.data?.data;

            account.access_token = resToken.accessToken;
            account.refresh_token = resToken.refreshToken;

            user.id = verifyTokenUserId(resToken.accessToken);
            user.name = resToken.nickname;
            user.school = resToken.school;
            user.major = resToken.major;
            user.image = resToken.imgUrl;

            return response.data; // 필수
            // 서버 API 요청을 통해 받은 token(access, refresh) 저장
            // privateToken = data.token
          } catch (e: any) {
            throw new Error(JSON.stringify({message: e.message, provider: account.provider}));
          }
        } else if (loginMode === "register") {
          try {
            const response = await axios
              .get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup?email=${user.email}&provider=${account.provider}`)

            account.access_token = undefined;
            user.name = ""

            return response?.data; // 필수
          } catch (e: any) {
            throw new Error(JSON.stringify({message: e.message, provider: account.provider}));
          }
        }
      },

      // jwt 콜백 함수, 토큰에 커스텀 정보(이메일, sns)를 담는다
      async jwt({token, account, user, trigger, session}: any) {
        if (account) {
          token = {
            user,
            provider: account.provider,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
          }
        }
        if (account?.access_token) {
          try {
            const test_url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/token-test`
            const response = await authedTokenAxios(token.accessToken).post(test_url, "None")
            console.log(response?.data.message)
            return token
          } catch (e: any) {
            console.log(e.response.data.message);
            return refreshAccessToken(token)
          }
        }

        if(trigger === 'update') {
          if(session?.newToken) token.accessToken = session.newToken
          if(session?.error) token.error = session.error
        }
        return token;
      },

      // session 콜백 함수, 위의 토큰 정보를 세션 데이터에 업데이트한다.
      async session({ session, token }: any) {
        // session.user.id = token.user.id;
        // session.user.email = token.user.email;
        // session.provider = token.provider;
        // session.accessToken = token.accessToken;
        // session.accessTokenExpires = verifyTokenExp(token?.accessToken);
        // session.refreshToken = token.refreshToken;
        // session.error = token.error;

        return {...token,
          accessTokenExpires: verifyTokenExp(token?.accessToken)};
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

// AccessToken이 만료되면 refreshToken을 사용해서 다시 받아오는 함수
const refreshAccessToken = async (token: JWT) => {
  try {
    const test_url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/token-test`

    const res = await refreshingTokenAxios(token.accessToken, token.refreshToken).post(test_url, "None")
    const refreshedAccessToken = res.data.data.accessToken
    console.log(res.data.message)

    return {
      ...token,
      accessToken: refreshedAccessToken,
      accessTokenExpires: verifyTokenExp(refreshedAccessToken),
    }

  } catch (err: any) {
    return {
      ...token,
      error: `${err.response.data?.code}: ${err.response.data?.message}`
    }
  }
}