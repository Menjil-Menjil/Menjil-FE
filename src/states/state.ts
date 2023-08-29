import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

interface IUser {
  name?: string;
  email: string;
  image?: any;
  school?: string;
  major?: string;
}

export const userState = atom<IUser>({
  // key 값 참고 자료: https://velog.io/@kyung-baa/Recoil-Duplicate-atom-key
  key: `userState/${uuidv4()}`,
  default: {
    name: '',
    email: '',
    image: '',
    school: '',
    major: '',
  }
});