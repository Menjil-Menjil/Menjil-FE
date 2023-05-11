// 참고: https://github.com/CLOUDoort/Movieinner-Frontend/blob/main/src/store/reducers/signupSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의
export interface RegisterState {
  component: string;
  user: {}
}

// initalState 생성
const initialState: RegisterState = {
  component: "RegisterBasic",
  user: {},
}

// 슬라이스 생성
export const registerSlice = createSlice({
  name: "register", // slice 이름
  initialState,
  reducers: {
    // 객체로 반환, 모두 함수로 구성
    setRegister: (state, action) => {
      state.component = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload.value
    },
  }
});

// 액션을 export 해준다.
export const { setRegister, setUser } = registerSlice.actions;

// 슬라이스를 export 해준다.
export default registerSlice.reducer;