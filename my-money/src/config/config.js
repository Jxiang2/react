import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNoEUWuQT0FpSgPtxEe5URxsWlhTKZeJ8",
    authDomain: "mymoney-a0c88.firebaseapp.com",
    projectId: "mymoney-a0c88",
    storageBucket: "mymoney-a0c88.appspot.com",
    messagingSenderId: "245085525982",
    appId: "1:245085525982:web:8ad4d61d2da16cf01a6f4f"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth}