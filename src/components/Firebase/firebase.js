import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGgxjkB4q4PdF20_EAMUZ0T4lbU2qrd-I",
  authDomain: "place-maps-331023.firebaseapp.com",
  projectId: "place-maps-331023",
  storageBucket: "place-maps-331023.appspot.com",
  messagingSenderId: "35249651976",
  appId: "1:35249651976:web:c2fdde1237d30f6958acbd",
  measurementId: "G-DCJ39099V8"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
