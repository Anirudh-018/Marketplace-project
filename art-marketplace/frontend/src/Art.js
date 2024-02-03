import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/art.module.css";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

function Art() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/art/", {
        headers: {
          Authorization: `Bearer ${Cookies.get("JWT")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className={classes.head}>
      <Nav />
      <h1>Browse Marketplace</h1>
      <h3>search from a vast amount of artworks for buying</h3>
      <form className={classes.search}>
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchbar}
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className={classes.iconMarket}>
          <CiSearch></CiSearch>
        </button>
      </form>
      <div className={classes.content}>
        {
        data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.artist.toLowerCase().includes(search);
          })
          .map((art, index) => {
            const val = art.imageUrl;
            const artImage = require(`../src/uploads/${val}`);
            return (
              <div className={classes.card} key={index}>
                <Link
                  to={`/artPage/${art._id}`}
                  style={{ color: "white" }}
                >
                  <img src={artImage} alt={`Artwork by ${art.artist}`} />
                  <div className={classes.container}>
                    <h4>
                      <b style={{ fontSize: "30px" }}>{art.artist}</b>
                    </h4>
                    <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
                    <p>Price:{art.price}$</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
export default Art;
