import { query, collection, getDocs, where, documentId, updateDoc } from "firebase/firestore";
import { db } from "./firebaseControl";

const updateDefaultFeels = async (uid, feels) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  // doc id is uid
  // const q = query(collection(db, "users"), where(documentId(), "==", uid));
  const querySnapshot = await getDocs(q);
  const updateTargetRef = querySnapshot.docs[0].ref;

  try {
    const res = await updateDoc(updateTargetRef, {
      feels: feels,
    });

    return { isSuccess: true };
  } catch (err) {
    console.error(err);
    return { isSuccess: false };
  }
};

export default updateDefaultFeels;
