import { CiFacebook, CiInstagram, CiShop, CiTwitter } from "react-icons/ci";
import "./css/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="desc">
        <div className="footer-logo" style={{ fontSize: "25px" }}>
          <CiShop className="iconMarket" />
          <b className="item">Art Marketplace</b>
        </div>
        <h4 className="item">Art Marketplace for buyers and sellers</h4>
      </div>
      <div className="join">
        <b className="item" style={{ fontSize: "25px" }}>
          Join Our Weekly Digest
        </b>
        <h4 className="item">
          Get exclusive promotions and updates
          <br /> to your inbox
        </h4>
        <form className="input">
          <input
            type="text"
            name="newsletter"
            id="newsletter"
            placeholder="Enter your email"
            className="letter"
          ></input>
          <input type="submit" className="btn" value="Subscribe" />
        </form>
      </div>
      <div className="footer-social">
        <b style={{ fontSize: "25px" }}>join our social media flatforms</b>
        <br />
        <p>Visit oue pages in twitter or facebook or instagram <br/>for latest updates and news</p>
        <div className="social">
          <CiInstagram className="logo" />
          <CiFacebook className="logo" />
          <CiTwitter className="logo" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
