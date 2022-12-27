import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const optionState = atom({
  key: "userInfoState",
  default: false,
  effects_UNSTABLE: [persistAtom],
  dangerouslyAllowMutability: true,
});

export { optionState };
