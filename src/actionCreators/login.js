import { auth, firestore } from "firebase";

// Configuring the auth
const provider = new auth.GoogleAuthProvider();

// Firestore
const fs = firestore();

export default history => async dispatch => {
  try {
    const result = await auth().getRedirectResult();
    if (result.credential) {
      var token = result.credential.accessToken;
    } else {
      // Initiating the login redirection if the result got
      // no user data
      auth().signInWithRedirect(provider);
    }
    // The signed-in user info.
    let user = result.user.providerData[0];

    // Sending the data to store
    dispatch({ type: "ADD_USER_DATA", data: user, token });

    // Initiating the database ref
    const dbRef = await fs.doc(`user/${user.uid}`);
    await dbRef.set({ user }, { merge: true });

    dispatch({ type: "FINALIZE_USER_DATA", data: user });

    // navigating to the "/"
    history.push("/");
  } catch (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  }
};
