import { React, useState } from "react";
import { getDatabase, set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../db/firebase";

const signup = getAuth(app);

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const signupData = async (e) => {
    e.preventDefault();

    const userData = { name, email, pass };
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      setErr(null);
      console.log(result);
    } else {
      setErr(result.err);
    }

    console.log("Signing Up the user");
    await createUserWithEmailAndPassword(signup, email, pass).then(
      async (res) => {
        alert("Signup Successfull");
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        console.log("result", res);
      }
    );
    navigate("/");
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="container my-5 p-4">
            <h2>Signup Form</h2>
            <form onSubmit={signupData}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </div>
              <button type="submit" className="btn btn-primary text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
