import { atom } from 'recoil';

interface IUser {
  name?: string;
  email: string;
  image?: any;
  school?: string;
  major?: string;
}

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    name: '',
    email: '',
    image: '',
    school: '',
    major: '',
  }
});