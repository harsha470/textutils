import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => setText(text.toUpperCase());
  const handleDownClick = () => setText(text.toLowerCase());
  const handleClear = () => setText("");

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success") ; 
  };
  const handleOnChange = (event) => {
    // console.log("Text changed") ;
    setText(event.target.value); // changed value in the text box is added to the current value
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === 'dark'?'white': 'black' 
            }}
            id="myBox"
            rows="4"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary " onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the above text box to preview"}</p>
      </div>
    </>
  );
}
