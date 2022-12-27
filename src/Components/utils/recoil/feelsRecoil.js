import { atom, selector } from "recoil";
import fetchDefaultFeels from "../firebase/fetchDefaultFeels";
import updateDefaultFeels from "../firebase/updateDefaultFeels";
import { userIdState } from "./authRecoil";

const userAskFeelsState = atom({
  key: "userAskFeelsState",
  default: [],
});

const userAskFeelsSelector = selector({
  key: "userAskFeelsSelector",
  get: async ({ get }) => {
    const uid = get(userIdState);
    const userAskFeels = get(userAskFeelsState);
    if (userAskFeels.length > 0) return userAskFeels;
    const { feels, isSuccess } = await fetchDefaultFeels(uid);
    console.log(feels, isSuccess);

    return feels;
  },
});

export { userAskFeelsState, userAskFeelsSelector };
