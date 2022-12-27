import { query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import { db } from "./firebaseControl";

const updateDefaultFeels = async (uid, feels) => {
  // const updateTargetRef = doc(db, "users", uid);
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const updateTargetRef = querySnapshot.docs[0].ref;

  try {
    const res = await updateDoc(updateTargetRef, {
      feels: feels,
    });
    console.log(res);
    
    return { isSuccess: true };
  } catch (err) {
    console.error(err);
    return { isSuccess: false };
  }
};

export default updateDefaultFeels;
