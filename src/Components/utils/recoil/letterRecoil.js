import { atom } from "recoil";

const lettersState = atom({
  key: "lettersState",
  default: [],
  dangerouslyAllowMutability: true,
});

export { lettersState };
