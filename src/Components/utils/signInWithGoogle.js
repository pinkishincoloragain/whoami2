import {
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  signOut,
  browserSessionPersistence,
} from "firebase/auth";
import checkUser from "./checkUser";
import addUser from "./addUser";

import { auth } from "./firebaseControl";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    setPersistence(auth, browserSessionPersistence);
    const { user } = await signInWithPopup(auth, googleProvider);
    const { isSuccess, isNewUser } = await checkUser(user);
    if (isNewUser) {
      await addUser(user);
    }

    return { isSuccess: true, user: user };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, user: null };
  }
};
const logout = () => {
  signOut(auth);
};

export { logout, signInWithGoogle };
