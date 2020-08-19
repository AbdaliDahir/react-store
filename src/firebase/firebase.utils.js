import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA3jPgKhuuGry7Cyi6swv2rxppk5w3XooM",
  authDomain: "master-react-store.firebaseapp.com",
  databaseURL: "https://master-react-store.firebaseio.com",
  projectId: "master-react-store",
  storageBucket: "master-react-store.appspot.com",
  messagingSenderId: "935644620902",
  appId: "1:935644620902:web:0515a073728bc1a10f65a7",
  measurementId: "G-V0S66SF4WN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;