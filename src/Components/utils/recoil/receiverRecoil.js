import { atom, selector, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
import checkUserWithUid from "../firebase/checkUserWithUid";
const { persistAtom } = recoilPersist();

const receiverUidState = atom({
  key: "receiverUidState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const receiveUserState = selector({
  key: "receiveUserSelector",
  get: async ({ get }) => {
    const receiverUid = get(receiverUidState);
    const { user, isSuccess } = await checkUserWithUid(receiverUid);
    return user;
  },
});

const receiverNameState = selector({
  key: "receiverNameSelector",
  get: ({ get }) => {
    const user = get(receiveUserState);
    return user?.name;
  },
});

const receiverDefaultAskOptionsState = selector({
  key: "receiverDefaultAskOptionsSelector",
  get: ({ get }) => {
    const user = get(receiveUserState);
    return user?.feels;
  },
});

export { receiverUidState, receiverNameState, receiverDefaultAskOptionsState };
