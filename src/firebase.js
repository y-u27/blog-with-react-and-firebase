import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeB4Ami_1G1abRPWSdbUHnYAdcxJR3PCg",
  authDomain: "blog-655ae.firebaseapp.com",
  projectId: "blog-655ae",
  storageBucket: "blog-655ae.appspot.com",
  messagingSenderId: "153783851372",
  appId: "1:153783851372:web:868e78f3ecf31c220b3b49"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };