import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userIdState } from "./authRecoil";
import fetchUserLetters from "../firebase/fetchUserLetters";

const lettersState = atom({
  key: "lettersState",
  default: [],
});

export { lettersState };
