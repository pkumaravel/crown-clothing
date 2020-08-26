import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVzZ2Wew-tPR_HxhY475NTnfhBKgzo9tU",
  authDomain: "crown-db-b0618.firebaseapp.com",
  databaseURL: "https://crown-db-b0618.firebaseio.com",
  projectId: "crown-db-b0618",
  storageBucket: "crown-db-b0618.appspot.com",
  messagingSenderId: "34124078114",
  appId: "1:34124078114:web:cb0e631715c0db33747e7b",
  measurementId: "G-C2E3ZBN4CB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
