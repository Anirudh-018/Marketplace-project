import classes from "./css/signup.module.css";
import * as icons from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import video from "./images/back.mp4";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cPwd, setcPwd] = useState("");
  const [isEmail, setValidEmail] = useState(true);
  const [isPwd, setValidPwd] = useState(true);
  const [iscPwd, setValidcPwd] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setValidPwd(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setValidcPwd(value === pwd);
  };

  const handleSignup = () => {
    if (data.userName === "" || data.password === "") {
      setErrorMessage("Please fill in all required fields.");
      return;
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }

    validateEmail(email);
    validatePassword(pwd);
    validateConfirmPassword(cPwd);

    if (!isEmail || !isPwd || !iscPwd) {
      setErrorMessage("Please check the fields for errors.");
      return;
    }
    // Continue with signup logic if validation passes
    axios
      .post("http://localhost:5000/auth/signup", data)
      .then((res) => {
        if (res.status === 201) {
          alert(`Hi ${name}! Signup successful! Redirecting to login...`);
          navigate("/");
        } else {
          alert("Unexpected response status: " + res.status);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 403) {
          alert(
            "Duplicate entry. Please choose a different username or email."
          );
        } else {
          console.log(err);
        }
      });
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.image}>
          <div className={classes.videoContainer}>
            <video autoPlay muted loop className={classes.video}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={classes.create}>
          <h1>Create Account</h1>
          <h2>
            Welcome! Enter Your Details And Start <br />
            Creating, Collecting And Selling Art Works
          </h2>
          <form>
            <div className={classes.inputContainer}>
              <icons.BsPerson className={classes.icon} />
              <input
                className={classes.inputField}
                type="text"
                placeholder="Username"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value }); // Example validation: Name is not empty
                }}
              />
            </div>

            <div className={classes.inputContainer}>
              <icons.BsEnvelope className={classes.icon} />
              <input
                // className={`input-field ${!isEmail ? "invalid" : ""}`}
                className={classes.inputField}
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setMail(e.target.value);
                  validateEmail(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            {!isEmail && (
              <span className={classes.errorMessage}>
                Please enter a valid email
              </span>
            )}
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
                  validatePassword(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            {!isPwd && (
              <span className={classes.errorMessage}>
                Please enter a valid password
              </span>
            )}
            <div className={classes.inputContainer}>
              <icons.BsLock className={classes.icon} />
              <input
                className={classes.inputField}
                type="password"
                placeholder="Confirm Password"
                name="confirm"
                value={cPwd}
                onChange={(e) => {
                  setcPwd(e.target.value);
                  validateConfirmPassword(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            {!iscPwd && (
              <span className={classes.errorMessage}>Password dont match</span>
            )}
            <button type="button" className="submit" onClick={handleSignup}>
              Create Account
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

export default SignUp;
