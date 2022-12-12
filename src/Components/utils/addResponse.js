import { db } from "./firebaseControl";
import { collection, getDocs, addDoc } from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

const transformResponse = response => {
  const { name, instagram, description, selections } = response;
  return {
    to: instagram,
    from: name,
    description: description,
    feels: selections,
  };
};

const addResponse = async response => {
  const formedResponse = transformResponse(response);
  try {
    const docRef = await addDoc(usersCollectionRef, {
      ...formedResponse,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

addResponse();

export default addResponse;
