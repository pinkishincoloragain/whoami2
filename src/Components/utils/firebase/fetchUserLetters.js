import React from "react";

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "./firebaseControl";

const fetchUserLetters = async uid => {
  try {
    if (!uid) return { isSuccess: false, letters: [] };
    const q = query(collection(db, "letters"), where("uid", "==", uid));
    const qs = await getDocs(q);
    const res = [];
    qs.docs.forEach(doc => {
      res.push(doc.data()?.content);
    });

    return { isSuccess: true, letters: res };
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchUserLetters;
