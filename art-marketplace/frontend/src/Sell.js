// import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/sell.module.css";
import { useState } from "react";
import * as icons from "react-icons/bs";
import Footer from "./Footer";
function Sell() {
  const [fileImg, setFileImg] = useState();

  function handleChange(e) {
    setFileImg(URL.createObjectURL(e.target.files[0]));
  }
  const [file, setFile] = useState("");
  const [artName, setArtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      image: file,
      artName: artName,
      description: description,
      price: price,
      type: type,
    };
    console.log(formData);
  }

  return (
    <div className={classes.sell}>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className={classes.upload}>
          <h2>Add Image:</h2>
          <img
            src={fileImg}
            className={fileImg ? classes.image : classes.hidden}
            alt="dummy"
          />
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="file"
              name="image"
              onChange={(e) => {
                handleChange(e);
                console.log(e.target.files[0])
                // setFile(e.target.files[0]);
              }}
            />
          </div>
          <h2>Art Name:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="ArtName"
              name="art"
              onChange={(e) => {
                setArtName(e.target.value);
              }}
            />
          </div>
          <h2>Description:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <textarea
              className={classes.inputField}
              type="textarea"
              placeholder="Description"
              name="desc"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <h2>Price:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Price"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <h2>Type:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Type"
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
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
