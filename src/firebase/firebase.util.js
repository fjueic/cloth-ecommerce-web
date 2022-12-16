import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyADhHwK6hOndOqem4mFFwS6dtIdz9LLfjw",
  authDomain: "ecom-db-21717.firebaseapp.com",
  projectId: "ecom-db-21717",
  storageBucket: "ecom-db-21717.appspot.com",
  messagingSenderId: "95328111886",
  appId: "1:95328111886:web:2a33793cf5adbebf235b5f",
  measurementId: "G-HRPFSRG95H",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
