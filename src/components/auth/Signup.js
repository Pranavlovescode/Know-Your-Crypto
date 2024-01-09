import { React, useState } from "react";
// import { getDatabase, set, ref } from "firebase/database";
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
  const navigate = useNavigate();
  
  const signupData = async (e) => {
    e.preventDefault();
    console.log("Signing Up the user");
    const result = await createUserWithEmailAndPassword(
      signup,
      email,
      pass
    ).then(async (res) => {
      alert("Signup Successfull");
      const user = res.user;
      await updateProfile(user, {
        displayName: name,
      });
      console.log("result", res);
      try {
        const response = await fetch(
          "https://know-your-crypto-5b150-default-rtdb.firebaseio.com/Users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(res),
          }
        );
        if (response) {
          alert("Data stored successfully");
        } else {
          alert("Some error occured");
        }
      } catch (error) {
        console.error(error);
      }
    });
    navigate("/");
    console.log("Successful", result);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="container my-5 p-4">
            <h2>Signup Form</h2>
            <form>
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
              <button
                onClick={signupData}
                type="submit"
                className="btn btn-primary text-center"
              >
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
