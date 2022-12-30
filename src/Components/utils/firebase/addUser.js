import { collection, addDoc } from "firebase/firestore";
import addResponse from "./addResponse";
import { db } from "./firebaseControl";
import adminLetter from "../../../assets/data/adminLetter.json";

const addUser = async (user, nickName) => {
  try {
    const res = await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: nickName,
      email: user.email,
      createdAt: user.metadata.creationTime,
      lastLoginAt: user.metadata.lastSignInTime,
      feels: user.feels,
    });

    // const adminExampleLetter = adminLetter.example;
    // adminExampleLetter.uid = user.uid;

    // addResponse(adminExampleLetter);

    return { isSuccess: true, newUserDocRef: res };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, newUserDocRef: null };
  }
};

export default addUser;
