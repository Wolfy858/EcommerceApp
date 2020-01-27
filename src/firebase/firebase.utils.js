import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNQNH4ovksTrZut0jEAAx0Bwf6d9DwwQw",
    authDomain: "ecommercedb-a3b08.firebaseapp.com",
    databaseURL: "https://ecommercedb-a3b08.firebaseio.com",
    projectId: "ecommercedb-a3b08",
    storageBucket: "ecommercedb-a3b08.appspot.com",
    messagingSenderId: "452271109689",
    appId: "1:452271109689:web:0a6d42e0becee775a1ffe8"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
