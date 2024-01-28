import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/art.module.css";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Art() {
  const [data, setData] = useState([]);
  const[search,setSearch]=useState('');
  console.log(search);
  useEffect(() => {
    axios
    //replace this with your fetch all api
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
          onChange={(e)=>setSearch(e.target.value)}
          // Add your input onChange handler here to capture search input
        />
        <button type="submit" className={classes.iconMarket}>
          <CiSearch></CiSearch>
        </button>
      </form>
      <div className={classes.content}>
        {data.filter((item)=>{
          return search.toLowerCase()===""?item:item.author.toLowerCase().includes(search);
        }).map((user, index) => (
          <div className={classes.card} key={index}>
            <Link to="/artPage" style={{ color: "white" }}>
              <img src={user.download_url} alt={`Artwork by ${user.author}`} />
              <div className={classes.container}>
                <h4>
                  <b style={{ fontSize: "30px" }}>{user.author}</b>
                </h4>
                <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
                <p>Price: 10$</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Art;
