import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/sell.module.css";
import { useState } from "react";
import * as icons from "react-icons/bs";
function Sell() {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={classes.sell}>
      <Nav />
      <div className={classes.upload}>
        <h2>Add Image:</h2>
        <img src={file} className={file?"classes.image":"classes.hidden"}/>
        <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className="input-field"
                type="file"
                name="name"
                onChange={handleChange}
              />
        </div>
        <h2>Art Name:</h2>
        <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="ArtName"
                name="Artname"
              />
        </div>
        <h2>Description:</h2>
        <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Description"
                name="Description"
              />
        </div>
        <h2>Price:</h2>
        <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Price"
                name="Price"
              />
        </div>
        <h2>Type:</h2>
        <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Type"
                name="Type"
              />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Sell;
