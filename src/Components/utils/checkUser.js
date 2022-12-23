import { query, getDocs, collection, where } from "firebase/firestore";
import { db } from "./firebaseControl";

const checkUser = async user => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // console.log(uid);
    const qs = await getDocs(q);

    return { isSuccess: true, user: qs.docs[0].data(), isNewUser: qs.empty };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, user: null };
  }
};

export default checkUser;
