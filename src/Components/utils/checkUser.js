import { query, getDocs, collection, where } from "firebase/firestore";
import { db } from "./firebaseControl";

const checkUser = async user => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const matchingUsersNum = docs.docs.length;

    return { isSuccess: true, isNewUser: matchingUsersNum === 0 };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, user: null };
  }
};

export default checkUser;
