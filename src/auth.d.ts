// 참고: https://velog.io/@dosomething/Next-auth-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84
// 타입스크립트를 사용한다면 Session 타입을 확장해 주어야 한다.
// src 폴더 하위에 두는 건, src 폴더가 빌드 대상이 되기 때문에 웹팩에게 해당 타입에 대해 알려주는 것이다.
import NextAuth, { DefaultSession , User } from 'next-auth';

// 세션 객체
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id?: string;
      email?: string; // 이메일 정보
    } & DefaultSession['user'];
    accessToken: string;
    accessTokenExpires: any;
    refreshToken: string;
    provider: string; // sns 정보
  }
}