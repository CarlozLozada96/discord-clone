import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxCCyz3ZaqDlIuaPLnAig4paxvm0qVt74",
    authDomain: "discord-clone-26356.firebaseapp.com",
    projectId: "discord-clone-26356",
    storageBucket: "discord-clone-26356.appspot.com",
    messagingSenderId: "629735355896",
    appId: "1:629735355896:web:8e996196cda7e99954120d",
    measurementId: "G-Q6W0TX47DV"
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;