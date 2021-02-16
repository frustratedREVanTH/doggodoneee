import firebase from "firebase"
require("@firebase/firestore")




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAiZZulYF6-B7gw0I75R70G7Q4jD9yT0lo",
    authDomain: "doggo-done.firebaseapp.com",
    projectId: "doggo-done",
    storageBucket: "doggo-done.appspot.com",
    messagingSenderId: "549915831105",
    appId: "1:549915831105:web:867a29fceb798931bbcfc0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()