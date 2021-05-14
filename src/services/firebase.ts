import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/*const{  REACT_APP_APPIKEY,
        REACT_APP_AUTDOMAIN,
        REACT_APP_PROJECTID,
        REACT_APP_STORAGEBUCKET,
        REACT_APP_MESSAGINSENDERID,
        REACT_APP_APPID,
        REACT_APP_MEASURENTID,
}=process.env; Proceso por seguridad*/

firebase.initializeApp({
        apiKey: "AIzaSyCp4LKDFSoJRHaexG-hNZTVRemcrSGuHVk",
        //apiKey:REACT_APP_APPIKEY
        authDomain: "chat-9aa67.firebaseapp.com",
        //authDomain:REACT_APP_AUTDOMAIN
        projectId: "chat-9aa67",
        //projectId:REACT_APP_PROJECTID
        storageBucket: "chat-9aa67.appspot.com",
        //storageBucket: REACT_APP_STORAGEBUCKET
        messagingSenderId: "1035068824341",
        //messagingSenderId: REACT_APP_MESSAGINSENDERID,
        appId: "1:1035068824341:web:95e6c5fd3cdef24129271c",
        //appId:REACT_APP_APPID,
        measurementId: "G-WQ866YN7T6"
        //measurementId:REACT_APP_MEASURENTID,
});

const auth = firebase.auth();
const firestore =firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export{auth,firestore,googleProvider,firebase};