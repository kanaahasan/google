
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4qMYNb5FCPSMSbwTjrmmCsF9H1JaNrnA",
  authDomain: "clone-a74f4.firebaseapp.com",
  projectId: "clone-a74f4",
  storageBucket: "clone-a74f4.appspot.com",
  messagingSenderId: "604073006886",
  appId: "1:604073006886:web:39efef397130bdf46f13e7"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
  export const googleProvider=new GoogleAuthProvider(app);
 export const database=getFirestore(app)