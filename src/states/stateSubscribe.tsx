import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export interface ISubscribe {
  roomId: string;
  imgUrl: any;
  nickname: any;
  lastMessage: string;
  lastMessageTime: string;
}

export interface messageInfo {
  message: string;
  messageType: string;
  messageList: messageList;
  order: number;
  roomId: any;
  senderNickname: string;
  senderType: string;
  time: any;
  _id: any;
}

interface messageList {
  answer: string;
  question_summary: string;
  similarity_percent: Number;
}

interface ai_question {
  questionId: any;
  index: any;
  AI_SUMMARY: string;
  AI_SUMMARY_ANSWER: string;
}

export const subscribeState = atom<ISubscribe[]>({
  // key 값 참고 자료: https://velog.io/@kyung-baa/Recoil-Duplicate-atom-key
  key: `subscribeState/${uuidv4()}`,
  default: [],
});

export const nowSubscribeState = atom<ISubscribe>({
  key: `nowSubscribeState/${uuidv4()}`,
  default: {
    roomId: "",
    imgUrl: "",
    nickname: "",
    lastMessage: "",
    lastMessageTime: "",
  },
});

export const chatMessagesState = atom<messageInfo[]>({
  key: `chatMessagesState/${uuidv4()}`,
  default: [],
});

export const pubMessageState = atom<any>({
  key: `pubMessageState/${uuidv4()}`,
  default: "",
});

export const aiQuestionState = atom<ai_question>({
  key: `aiQuestionState/${uuidv4()}`,
  default: {
    questionId: "",
    index: "",
    AI_SUMMARY: "",
    AI_SUMMARY_ANSWER: "",
  },
});

export const ratingState = atom<any>({
  key: `ratingState/${uuidv4()}`,
  default: { questionId: "", likeStatus: "" },
});
