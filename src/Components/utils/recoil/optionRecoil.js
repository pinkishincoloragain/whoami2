import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const optionState = atom({
  key: "optionState",
  default: "0",
  effects_UNSTABLE: [persistAtom],
  dangerouslyAllowMutability: true,
});

export { optionState };
