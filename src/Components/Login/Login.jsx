import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.int";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("error", error);
        setUser(null);
      });
  };
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/*  <button className="btn bg-red-500" onClick={handleGoogleSignIn}>
        Login with Google
      </button>
      <button onClick={HandleSignOut}>Sign out</button> */}
      {user ? (
        <button onClick={HandleSignOut}>Sign out</button>
      ) : (
        <button className="btn bg-red-500" onClick={handleGoogleSignIn}>
          Login with Google
        </button>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <h4>{user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}
