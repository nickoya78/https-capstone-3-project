import React, { useState } from "react";
import "../Styles/Login.scss";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => {
        alert("Error: user not found");
        console.log(error);
      });
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => {
        alert("Error: email and password required");
        console.log(error);
      });
  };

  return (
    <div className="div">
      <h1 className="h1">Sign-in for access</h1>
      <label className="emailLable">E-mail</label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="off"
        type="email"
        placeholder="email"
      />
      <label className="passwordLable">Password</label>
      <input
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="off"
        type="password"
        placeholder="password"
      />
      <button data-testid="signUp-button" onClick={signIn} className="button-1">
        Sign In
      </button>
      <p>
        By creating an account you agree to conditions of use and privacy notice
      </p>
      <button
        data-testid="create-button"
        onClick={register}
        className="button-2"
      >
        Create Your Account
      </button>
    </div>
  );
}

export default Login;
