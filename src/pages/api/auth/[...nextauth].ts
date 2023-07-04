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
    async signIn({ user, account }: any) {
      try {
        const data = await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup?email=${user.email}&provider=${account.provider}`
          )
        console.log("loginCallback: ", user.email, account.provider);
        return data;
        //privateToken = data.token // 내부 API 요청을 통해 받은 token 값을 전역 변수에 저장한다.
      } catch (error) {

      }
    },

    async jwt({token, account, user}: any) { // ccount 내 access_token을 참조 할 수 있다
      if (account) {
        token = {
          id: user.email,
          provider: account.provider,
          //accessToken: privateToken
          } // token 객체에 다시 담아서
      }
      return token // 반환해주면, session 콜백으로 전달된다.
    },

    async session({ session, token }: any) {
      //session.accessToken = privateToken; // 해당 전역 변수 값을 session 객체에 저장한다.
      session.user.email = token.id;
      session.provider = token.provider;

      return session;
    },

  }
}

export default NextAuth(authOptions)