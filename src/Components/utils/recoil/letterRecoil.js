import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userIdState } from "./authRecoil";
import fetchUserLetters from "../firebase/fetchUserLetters";
import parseFeels from "../parseFeels";
const { persistAtom } = recoilPersist();

const adminLetter = {
  from: "관리자 흑토끼🐰",
  description: "관리자 흑토끼 올림",
  city: "Daegu",
  ip: "211.54.173.229",
  timeStamp: "20:13:27 Wed Dec 28 2022",
  feels: [
    "😊 재미있었던 한 해입니다.",
    "😌 하고싶은 게 많았던 한 해입니다.",
    "🥰 연하장 작성하는 건 재밌군요",
  ],
};

const lettersState = selector({
  key: "lettersState",
  get: ({ get }) => {
    const letters = get(lettersState);
    return letters;
  },
});

const userLettersState = selector({
  key: "userLettersState",
  get: async ({ get }) => {
    const uid = get(userIdState);
    const { letters, isSuccess } = await fetchUserLetters(uid);

    return [adminLetter, ...letters.sort((a, b) => +a.timeToNumber - +b.timeToNumber)];
  },
});

const userLettersStatisticsState = selector({
  key: "userLettersStatisticsState",
  get: async ({ get }) => {
    const letters = get(userLettersState);
    const statistics = parseFeels(letters);

    return statistics;
  },
});

export { lettersState, userLettersState, userLettersStatisticsState };
