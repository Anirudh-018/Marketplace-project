import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/art.module.css";
import art from "./images/home-art.jpeg";
import { CiSearch } from "react-icons/ci";
function Art() {
  return (
    <div className={classes.head}>
        <Nav/>
      <h1>Browse Marketplace</h1>
      <h3>search from a vast amount of artworks for buying</h3>
      <form className={classes.search}>
          <input
            type="text"
            placeholder="Search..."
            className={classes.searchbar}
            name="search"
            id="search"
            // Add your input onChange handler here to capture search input
          />
          <button type="submit" className={classes.iconMarket}>
            <CiSearch></CiSearch>
          </button>
      </form>
      <div className={classes.content}>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art} alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            <p>price: 10$</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Art;
