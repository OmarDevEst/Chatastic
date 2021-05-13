import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const {REACT_APP_APIKEY,
        REACT_APP_AUTDOMAIN,
        REACT_APP_PROJECTID,
        REACT_APP_STORAGEBUCKET,
        REACT_APP_MESSAGINSENDERID,
        REACT_APP_APPID,
        REACT_APP_MEASURENTID
}=process.env;

firebase.initializeApp({
        apiKey: REACT_APP_APIKEY,
        authDomain: REACT_APP_AUTDOMAIN,
        projectId:REACT_APP_PROJECTID,
        storageBucket:REACT_APP_STORAGEBUCKET,
        messagingSenderId: REACT_APP_MESSAGINSENDERID,
        appId: REACT_APP_APPID,
        measurementId: REACT_APP_MEASURENTID
});

const auth = firebase.auth();
const firestore =firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export{auth,firestore,googleProvider,firebase};