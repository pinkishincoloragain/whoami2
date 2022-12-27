import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userIdState } from "./authRecoil";
import fetchUserLetters from "../firebase/fetchUserLetters";
import parseFeels from "../parseFeels";
const { persistAtom } = recoilPersist();

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
    return letters;
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
