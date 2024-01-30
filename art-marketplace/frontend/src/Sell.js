// import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/sell.module.css";
import { useState } from "react";
import * as icons from "react-icons/bs";
import Footer from "./Footer";
function Sell() {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <div className={classes.sell}>
      <Nav />
      <form>
        <div className={classes.upload}>
          <h2>Add Image:</h2>
          <img src={file} className={file ? classes.image : classes.hidden} alt="dummy"/>
          <div className="input-container">
            <icons.BsPerson className="icon" />
            <input
              className={classes.inputField}
              type="file"
              name="image"
              onChange={handleChange}
            />
          </div>
          <h2>Art Name:</h2>
          <div className="input-container">
            <icons.BsPerson className="icon" />
            <input
              className={classes.inputField}
              type="text"
              placeholder="ArtName"
              name="art"
            />
          </div>
          <h2>Description:</h2>
          <div className="input-container">
            <icons.BsPerson className="icon" />
            <textarea
              className={classes.inputField}
              type="textarea"
              placeholder="Description"
              name="desc"
            />
          </div>
          <h2>Price:</h2>
          <div className="input-container">
            <icons.BsPerson className="icon" />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Price"
              name="price"
            />
          </div>
          <h2>Type:</h2>
          <div className="input-container">
            <icons.BsPerson className="icon" />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Type"
              name="type"
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Sell;
