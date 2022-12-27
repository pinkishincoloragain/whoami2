import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseControl";

const addUser = async (user, nickName) => {
  try {
    const res = await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: nickName,
      email: user.email,
      createdAt: user.metadata.creationTime,
      lastLoginAt: user.metadata.lastSignInTime,
    });

    return { isSuccess: true, newUserDocRef: res };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, newUserDocRef: null };
  }
};

export default addUser;
