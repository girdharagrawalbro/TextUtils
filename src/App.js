import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTitleCase = () => {
    console.log("TitleCase was clicked" + text);
    let newText = text.toLowerCase().replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
    setText(newText);
  };
  const handletoCopy = () => {
    var vartext = document.getElementById("myBox");
    vartext.select();
    navigator.clipboard.writeText(vartext.value);
    alert("Text Copied to Clipboard");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText, join(" "));
  };

  const handleOnChange = (event) => {
    console.log("Onchage");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">TextUtils</span>
        </div>
      </nav>
      <div className="container">
        <h3 className="my-3">Enter text to analyze</h3>
        <textarea
          className="form-control"
          id="myBox"
          rows="5"
          name="about"
          value={text}
          placeholder="Enter Text Here"
          onChange={handleOnChange}
        />
      </div>
      <div className="container d-flex flex-wrap gap-2 my-3">
        <button className="btn btn-primary" onClick={handleUpClick}>
          To Upper Case
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          To Lower Case
        </button>
        <button className="btn btn-primary" onClick={handleTitleCase}>
          To Title Case
        </button>
        <button className="btn btn-primary" onClick={handletoCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summery</h3>
        <p>
          <b> {text.split(" ").filter().length} </b> Words and{" "}
          <b>{text.length}</b> characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes take to read
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
