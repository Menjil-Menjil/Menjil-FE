// *** store.ts 파일
// 참고: https://curryyou.tistory.com/501
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore } from '@reduxjs/toolkit';
import registerComponentReducer from './registerSlice'
import userReducer from './registerSlice'

// 리덕스 store 생성함수
export const store = configureStore({
  reducer: {
    register: registerComponentReducer,
    user: userReducer,
    /*
    token: tokenReducer,
    nickname: nicknameReducer,
    email : emailReducer,
    socialEmail: socialEmailReducer,
    idx: idxReducer
    */
  },
  devTools: process.env.NODE_ENV === 'development' // 개발자도구 설정
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// 아래와 같이 간단하게 store를 생성해도 된다.
/*
const store = configureStore({
  reducer: {
    counter: registerSlice,
  },
  middleware: [...getDefaultMiddleware(), logger]
  devTools: process.env.NODE_ENV === 'development'
});
*/