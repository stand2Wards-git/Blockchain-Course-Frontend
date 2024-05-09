import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";



export async function signinEmail(email, password) {
  if(!checkUserExists(email)) return;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("auth user: ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export async function addNewUserToDoc(username, email, password, img) {
  try {
    // Create a new document in the "users" collection
    const userRef = await addDoc(collection(db, "users"), {
      name: username,
      email: email,
      password: password,
      img: img,
    });

    console.log("User created with ID:", userRef.email); // Log the generated user ID (optional)
    return userRef.id; // Return the user ID for potential future use
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

export async function checkUserExists(email) {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("email", "==", email))
    );

    if (querySnapshot.size > 0) {
      // **Fetch and return the first user's data:**
      const firstDoc = querySnapshot.docs[0];
      return firstDoc.exists ? firstDoc.data() : null; // Return data or null if document doesn't exist
    } else {
      console.log("User not found.");
      return null; // Indicate user not found
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return null; // Indicate an error occurred
  }
}

export async function signInWithGoogle() {
  const provider =  new GoogleAuthProvider();
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential =  GoogleAuthProvider.credentialFromResult(result);
       user = result.user;
    })
    .catch((error) => {
    console.log(error);
    });
    let temp = await checkUserExists(user.email);
    if(temp != null) {
      return user;
    }
    await addNewUserToDoc(user.displayName, user.email, "", user.photoURL)
    const response = await fetch(`http://localhost:5000/insertmodule/${user.email}`);
    const data = await response.json();
    console.log(data)
    return user;
}






