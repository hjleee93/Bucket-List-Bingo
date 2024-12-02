import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase";

const auth = getAuth(firebaseApp);

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider)

    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential === null) {
      throw new Error("credential is null");
    }
    const token = credential.accessToken;
    const user = result.user;

    console.log(token, user)

  } catch (error: any) {
    //  Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error signing in with Google", error);
  }
}
