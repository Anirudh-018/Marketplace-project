import { CiShop } from "react-icons/ci";
import './css/footer.css';
function Footer() {
  return (
    <div style={{marginTop:'20px'}}>
      <div className="footer-logo"style={{fontSize:'25px'}}>
        <CiShop className="iconMarket" />
        <b className="item">Art Marketplace</b>
      </div>
    </div>
  );
}
export default Footer;