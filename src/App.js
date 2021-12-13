// import react from "react"
// import {db} from "./firebase_config"



// function App() {

//   // function firebasefunc(){
//   //   db.collection("users").doc("Abhishek").collection("details").doc("ps").set({
//   //     name: "Abhishek Agrawal",
//   //     age: 19,
//   //     College: "IIT KGP",
//   //     interests: {
//   //         core: "Aero",
//   //         noncore: "ML"
//   //     }
//   //     }).then(function(){
//   //     console.log("Abhishek created");
//   //     });
  
//   // }

//   // function retrieve(){
    
//   // }

//   var firebase = require('firebase');
//   var firebaseui = require('firebaseui');
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());

//   return (
//     <div>
//       <button>Click Me!</button>
//       <button>retrieve</button>
//     </div>

//   );
// }

// export default App;



// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAFFSyz-qBllBjBu3WmA6LVBMLvynq60xg",
  authDomain: "todo-fee4d.firebaseapp.com",
  projectId: "todo-fee4d",
  storageBucket: "todo-fee4d.appspot.com",
  messagingSenderId: "15857449880",
  appId: "1:15857449880:web:361274de2ab4651aaf89ed"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen;

