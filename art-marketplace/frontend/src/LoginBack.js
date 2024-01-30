import * as icons from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./css/login.module.css";
import axios from "axios";
import video from './images/back.mp4'

function LoginBack() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleSignup = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirm === ""
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }
    console.log(data);
    axios
      .post("http://localhost:5000/auth/login", data)
      .then((res) => {
        if (res.status === 200) {
          alert(`Hi ${name}! login successful! Redirecting to home...`);
          navigate("/");
        } else {
          alert("Unexpected response status: " + res.status);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setErrorMessage("invalid credentials");
          return;
        } else {
          console.log(err);
          return;
        }
      });
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.image}>
          {/* Video background container */}
          <div className={classes.videoContainer}>
            <video autoPlay muted loop className={classes.video}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={classes.create}>
          <h1>Login into your account</h1>
          <h2>Welcome! Enter Your Details to login</h2>
          <form>
            <div className={classes.inputContainer}>
              <icons.BsEnvelope className={classes.icon} />
              <input
                className={classes.inputField}
                type="text"
                placeholder="username"
                name="userName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className={classes.inputContainer}>
              <icons.BsLock className={classes.icon} />
              <input
                className={classes.inputField}
                type="password"
                placeholder="Password"
                name="password"
                value={pwd}
                onChange={(e) => {
                  setPwd(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button
              type="button"
              className={classes.submit}
              onClick={handleSignup}
            >
              login
            </button>
            {errorMessage && (
              <p className={classes.errorMessage}>{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginBack;
