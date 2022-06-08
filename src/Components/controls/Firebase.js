import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5RgFIHakgCeDH6an2pbNHczcdtc3Ofos",
  authDomain: "myportfolio-44f25.firebaseapp.com",
  projectId: "myportfolio-44f25",
  storageBucket: "myportfolio-44f25.appspot.com",
  messagingSenderId: "802146914555",
  appId: "1:802146914555:web:cfcca4fff0ffd07554605e",
  measurementId: "G-KD9RYS8091",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
