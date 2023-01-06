import { db } from "../Components/utils/firebase/firebaseControl";
import { getDoc, getDocs, query, collection, collectionGroup } from "firebase/firestore";
import { useEffect } from "react";
import fetchUserLetters from "../Components/utils/firebase/fetchUserLetters";

export default function Admin() {
  const fetchAllLetters = async () => {
    const uids = [];
    const letters = [];

    const userQuery = query(collection(db, "users"));
    const userQuerySnapshot = await getDocs(userQuery);

    userQuerySnapshot.forEach(doc => {
      uids.push(doc.data().uid);
    });

    for (let i = 0; i < uids.length; i++) {
      const letter = await fetchUserLetters(uids[i]);
      console.log(letter);
      letters.push(letter.letters);
    }

    console.log(letters);
  };

  useEffect(() => {
    fetchAllLetters();
  });

  return <div></div>;
}
