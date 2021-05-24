import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBD4EUVkcFxMTv8wIAFMLc6032vWqdAP0",
  authDomain: "linkin-clone-2fe0a.firebaseapp.com",
  projectId: "linkin-clone-2fe0a",
  storageBucket: "linkin-clone-2fe0a.appspot.com",
  messagingSenderId: "824550717857",
  appId: "1:824550717857:web:0a1b8bf7ebb0c15a4333e0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
