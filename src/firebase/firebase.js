import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDoSP_SsfZ9EnX_sp_1JCavQJAZ8SKa7_U",
    authDomain: "ewaste-storage.firebaseapp.com",
    projectId: "ewaste-storage",
    storageBucket: "ewaste-storage.appspot.com",
    messagingSenderId: "315614219745",
    appId: "1:315614219745:web:0ba58183d920ef30c8d6a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage,
    firebase as
    default
}