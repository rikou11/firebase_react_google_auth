import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfxShYMAyuRzxcFUl1P3KG-tGrTYZ6U1A",
  authDomain: "reactauth-8d07a.firebaseapp.com",
  projectId: "reactauth-8d07a",
  storageBucket: "reactauth-8d07a.appspot.com",
  messagingSenderId: "107709268287",
  appId: "1:107709268287:web:aa9a0ddd5a150a9ada938a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((results) => {
      const name = results.user.displayName;
      const email = results.user.email;
      const profilePic = results.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};
