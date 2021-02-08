import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
var firebaseConfig = {
 apiKey: "AIzaSyAc0C-gkO3hO57reDGmtqBe_8n7iVfCdrs",
 authDomain: "firegram-66c93.firebaseapp.com",
 projectId: "firegram-66c93",
 storageBucket: "firegram-66c93.appspot.com",
 messagingSenderId: "489554712323",
 appId: "1:489554712323:web:f1a5e1f3e074e55f10bb36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectStorage, timestamp }