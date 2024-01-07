import "./Nav.css";
import * as icons from "react-icons/bs";
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
        <div className="item">Connect a Wallet</div>
        <a className="item">
          <div className="signup">
            <button><CiShop className="iconSignup"/><b>Hello</b></button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
