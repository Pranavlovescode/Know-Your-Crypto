import { React, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import Login from "./Login";

const auth = getAuth(app);

function LoginSuccess() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Login Sucessfull
        console.log("Login succssfull", user);
        setLogin(user);
      } else {
        // User not login
        console.log("you are logged out");
        setLogin(null);
      }
    });
  }, []);
  if (login === null) {
    return (
        <Login />
    );
  }
  return (
    <>
      <div>Welcome {login.email}</div>
    </>
  );
}

export default LoginSuccess;
