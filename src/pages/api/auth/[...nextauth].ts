import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import axios from "axios";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    // 로그인 콜백 함수
    async signIn({ user, account }: any) {
      try {
        const res = await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup?email=${user.email}&provider=${account.provider}`
          );
        console.log(res?.data);
        return res?.data;
        // 서버 API 요청을 통해 받은 token(access, refresh) 저장
        // privateToken = data.token
      } catch (e: any) {
        console.log(e.response);
        throw new Error(e.response.data);
      }
    },

    // jwt 콜백 함수, 토큰에 커스텀 정보(이메일, sns)를 담는다
    async jwt({token, account, user}: any) {
      if (account) {
        token = {
          id: user.email,
          provider: account.provider,
          //accessToken: privateToken
          }
      }
      return token // 반환해주면, session 콜백으로 전달된다.
    },

    // session 콜백 함수, 위의 토큰 정보를 세션 데이터에 업데이트한다.
    async session({ session, token }: any) {
      //session.accessToken = privateToken;
      session.user.email = token.id;
      session.provider = token.provider;

      return session;
    },

  }
}

export default NextAuth(authOptions)