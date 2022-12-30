import { collection, query, where, getDocs, documentId, orderBy } from "firebase/firestore";
import { db } from "./firebaseControl";

const fetchUserLetters = async uid => {
  try {
    if (!uid) return { isSuccess: false, letters: [] };
    const q = query(collection(db, `letters/${uid}/letters`));
    const qs = await getDocs(q);
    const res = [];
    qs.docs.forEach(doc => {
      res.push(doc.data()?.content);
    });

    console.log(res);

    return { isSuccess: true, letters: res };
  } catch (err) {
    console.log(err);
    return { isSuccess: false, letters: [] };
  }
};

export default fetchUserLetters;
