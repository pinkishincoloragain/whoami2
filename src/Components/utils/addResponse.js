import { db } from "./firebaseControl";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import { getUserLog } from "./getUserLog";

const usersCollectionRef = collection(db, "users");

const transformResponse = async response => {
  // const userLog = await getUserLog();
  const { name, instagram, description, selections } = response;
  const timeStamp = new Date().toTimeString().slice(0, 8) + " " + new Date().toDateString();

  return {
    to: instagram,
    from: name,
    description: description,
    feels: selections,
    timeStamp: timeStamp,
    // ip: userLog.ip,
    // city: userLog.city,
  };
};

const addResponse = async response => {
  const formedResponse = await transformResponse(response);
  try {
    const docRef = await addDoc(usersCollectionRef, {
      ...formedResponse,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addResponse;
