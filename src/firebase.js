import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDLxNI6QaZh1q8Yr1x8vOH7dw0AmR_ISmA",
    authDomain: "slack-react-app-ae494.firebaseapp.com",
    projectId: "slack-react-app-ae494",
    storageBucket: "slack-react-app-ae494.appspot.com",
    messagingSenderId: "1057927072420",
    appId: "1:1057927072420:web:b54f3d7e5366ba696f7431",
    measurementId: "G-TTRXPHNLGJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //database instance acceess to the db from any 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider}; // explicit exports 
  export default db;