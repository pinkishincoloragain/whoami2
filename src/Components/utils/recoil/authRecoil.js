import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const userInfoState = atom({
  key: "userInfoState", // unique ID
  default: false, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
  dangerouslyAllowMutability: true,
});

const isLoggedInState = atom({
  key: "isLoggedInState", // unique ID (with respect to other atoms/selectors),
  effects_UNSTABLE: [persistAtom],
  default: false, // default value (aka initial value)
});

export { userInfoState, isLoggedInState };
