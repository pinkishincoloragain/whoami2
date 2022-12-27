import {
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  browserSessionPersistence,
} from "firebase/auth";
import checkUserWithUid from "./checkUserWithUid";
import addUser from "./addUser";

import anniversary from "../../../assets/data/anniversary.json";

import { auth } from "./firebaseControl";

const signInWithEmail = async (newAccount, email, password, nickName) => {
  try {
    setPersistence(auth, browserSessionPersistence);
    if (newAccount) {
      // create account
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      // const { isSuccess, isNewUser } = await checkUserWithUid(user?.uid);
      await addUser(user, nickName);

      return { isSuccess: true, user: user };
    } else {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      return { isSuccess: true, user: user };
    }
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert(anniversary.errors["email-already-in-use"]);
    } else if (error.code === "auth/invalid-email") {
      alert(anniversary.errors["invalid-email"]);
    } else if (error.code === "auth/weak-password") {
      alert(anniversary.errors["weak-password"]);
    } else if (error.code === "auth/user-not-found") {
      alert("존재하지 않는 이메일입니다.");
    } else if (error.code === "auth/wrong-password") {
      alert("비밀번호가 틀렸습니다.");
    } else {
      console.log(error);
      alert(anniversary.errors["default"]);
    }

    return { isSuccess: false, user: null };
  }
};
const logout = () => {
  signOut(auth);
};

export { logout, signInWithEmail };
