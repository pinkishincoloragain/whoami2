import { query, collection, getDoc, getDocs, where, updateDoc } from "firebase/firestore";
import { db } from "./firebaseControl";

const fetchDefaultFeels = async uid => {
  console.log(uid);
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  try {
    const res = await getDoc(querySnapshot.docs[0].ref);
    const feels = res.data().feels;

    return { feels: feels, isSuccess: true };
  } catch (err) {
    console.error(err);
    return { feels: [], isSuccess: false };
  }
};

export default fetchDefaultFeels;
