import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseControl";

const addUser = async user => {
  try {
    const res = await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
    });

    return { isSuccess: true, newUserDocRef: res };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, newUserDocRef: null };
  }
};

export default addUser;