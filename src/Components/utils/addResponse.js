import { db } from "./firebaseControl";
import { collection, addDoc } from "firebase/firestore/lite";

const usersCollectionRef = collection(db, "users");

const addResponse = async () => {
  try {
    const res = await addDoc(usersCollectionRef, {
      age: 29,
      name: "kyounghwan",
    });
    console.log(res); // res는 undefined입니다.
  } catch (e) {
    console.log(e);
  }
};

export default addResponse;
