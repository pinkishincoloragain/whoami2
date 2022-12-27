import { db } from "./firebaseControl";
import { doc, collection, addDoc } from "firebase/firestore";
import useIP from "../../../hooks/useIP";

const transformResponse = async response => {
  const { ip, city } = await useIP();
  const { name, description, selections, uid } = response;
  const timeStamp = new Date().toTimeString().slice(0, 8) + " " + new Date().toDateString();

  return {
    uid: uid,
    content: {
      from: name,
      description: description,
      feels: selections,
      timeStamp: timeStamp,
      ip: ip,
      city: city,
    },
  };
};

const addResponse = async response => {
  const formedResponse = await transformResponse(response);
  const lettersCollectionRef = collection(db, "letters");

  try {
    const docRef = await addDoc(lettersCollectionRef, {
      ...formedResponse,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addResponse;
