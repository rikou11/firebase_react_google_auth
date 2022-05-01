import "./sass/App.css";
import { signInWithGoogle } from "./firebase/Firebase";
import { useState } from "react";
function App() {
  const [Disable, setDisable] = useState(false);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const photo = localStorage.getItem("profilePic");
  return (
    <div className="App">
      {!name && !email && !photo ? (
        <button
          type="button"
          onClick={() => {
            signInWithGoogle();
          }}
          className="login-with-google-btn"
          disabled={Disable}
        >
          Sign in with Google
        </button>
      ) : (
        console.log("first")
      )}

      <button
        className="signout"
        onClick={() => {
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("profilePic");
          window.location.reload();
        }}
      >
        Signout
      </button>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <img src={photo} alt="" />
    </div>
  );
}

export default App;
