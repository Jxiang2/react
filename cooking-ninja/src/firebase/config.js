import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArewb71ncQp_fS8klJf3Ys85A_ZnIHImM",
    authDomain: "cookin-ninja-site.firebaseapp.com",
    projectId: "cookin-ninja-site",
    storageBucket: "cookin-ninja-site.appspot.com",
    messagingSenderId: "363053666698",
    appId: "1:363053666698:web:7a3210c9820cd01069f873",
    measurementId: "G-QV2VYFXC68"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }