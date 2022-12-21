import { atom } from "recoil";

const userInfoState = atom({
  key: "userInfoState", // unique ID
  default: false, // default value (aka initial value)
  dangerouslyAllowMutability: true,
});

const isLoggedInState = atom({
  key: "isLoggedInState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export { userInfoState, isLoggedInState };
