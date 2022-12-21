import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

import { auth, db } from "./firebaseControl";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }

    console.log(res.operationType);

    return { result: true, user: user };
  } catch (err) {
    console.error(err);
    return { result: false, user: null };
  }
};
const logout = () => {
  signOut(auth);
};

export { logout, signInWithGoogle };
