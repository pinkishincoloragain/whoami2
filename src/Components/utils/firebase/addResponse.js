import { db } from "./firebaseControl";
import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import useIP from "../../../hooks/useIP";

const transformResponse = async response => {
  const { ip, city } = await useIP();
  const { name, description, selections, uid } = response;
  const timeStamp = new Date().toTimeString().slice(0, 8) + " " + new Date().toDateString();
  const timeToNumber = new Date().getTime();

  return {
    uid: uid,
    content: {
      from: name,
      description: description,
      feels: selections,
      ip: ip,
      city: city,
      timeStamp: timeStamp,
      timeToNumber: timeToNumber,
    },
  };
};

const addResponse = async response => {
  const formedResponse = await transformResponse(response);
  const lettersCollectionRef = collection(db, `letters/${formedResponse.uid}/letters`);

  console.log(formedResponse);

  try {
    const docRef = await addDoc(lettersCollectionRef, {
      ...formedResponse,
      createdAt: serverTimestamp(),
    });

    console.log(formedResponse);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addResponse;
