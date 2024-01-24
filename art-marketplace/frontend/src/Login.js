import Nav from "./Nav";
import monaLisa from "./images/mona-lisa.jpeg";
import Footer from "./Footer";
import * as icons from "react-icons/bs";
import "./css/login.css";
function Login() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="image">
          <img src={monaLisa} alt="monalisa" />
        </div>
        <div className="create">
          <h1>Login into your account</h1>
          <h2>Welcome! Enter Your Details to login</h2>
          <form>
            <div className="input-container">
              <icons.BsEnvelope className="icon" />
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                name="mail"
              />
            </div>
            <div className="input-container">
              <icons.BsLock className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" className="submit">
              login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
