import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1uNQrogqTLpSzdRzR_7Vo5CNGAIhBm08",
    authDomain: "teslaclone2022.firebaseapp.com",
    projectId: "teslaclone2022",
    storageBucket: "teslaclone2022.appspot.com",
    messagingSenderId: "408260648464",
    appId: "1:408260648464:web:d6be852a87eb83d43bf495",
    measurementId: "G-2BWXFSMPTH"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;