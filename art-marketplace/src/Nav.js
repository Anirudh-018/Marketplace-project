import { Link } from "react-router-dom";
import "./css/Nav.css";
import { CiShop } from "react-icons/ci";
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <CiShop className="iconMarket"/>
        <b className="item">Art Marketplace</b>
      </div>
      <div className="links">
        <div className="item">Marketpace</div>
        <div className="item">Rankings</div>
        <Link to='/login' className="item">Connect a Wallet</Link>
        <a className="item" href="Login.html">
          <div className="signup">
            <button><CiShop className="iconSignup"/><b>Hello</b></button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
