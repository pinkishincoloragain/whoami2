import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const userIdState = selector({
  key: "userIdSelector",
  get: ({ get }) => {
    const userInfo = get(userInfoState);
    return userInfo?.uid;
  },
});

const userInfoState = atom({
  key: "userInfoState",
  default: false,
  effects_UNSTABLE: [persistAtom],
  dangerouslyAllowMutability: true,
});

const isLoggedInState = atom({
  key: "isLoggedInState",
  effects_UNSTABLE: [persistAtom],
  default: false,
});

export { userIdState, userInfoState, isLoggedInState };
