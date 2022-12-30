import { db } from "./firebaseControl";
import { getDoc, getDocs, query, collection } from "firebase/firestore";

const fetchRandomUser = async () => {
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);

  try {
    console.log(querySnapshot.size);
    const random = Math.floor(Math.random() * querySnapshot.size);
    console.log(random);
    const res = await getDoc(querySnapshot.docs[random].ref);
    if (!res.exists()) {
      res = await getDoc(querySnapshot.docs[0].ref);
    }
    console.log(res.data());

    return { isSuccess: true, uid: res.data().uid };
  } catch (err) {
    console.error(err);
    return { isSuccess: false, user: null };
  }
};

export default fetchRandomUser;
