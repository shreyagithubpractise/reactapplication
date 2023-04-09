import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleUpperCase = (event) => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = (event) => {
    setText(text.toLowerCase());
  };
  const handleCopyText = (event) => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "#000" : "#fff" }}>
          {props.heading}
        </h1>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleTextChange}
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "grey",
              height: "15rem",
            }}
          ></textarea>
        </div>
        <div className="actionButtons">
          <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopyText}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Remove Extra Space
          </button>
        </div>
        <div
          className="textSummary"
          style={{ color: props.mode === "light" ? "grey" : "#fff" }}
        >
          <p>{text.split(" ").filter((elm) => elm.length != 0).length}</p>
          <p>
            {0.008 * text.split(" ").filter((elm) => elm.length != 0).length}{" "}
            Minutes read
          </p>
        </div>
      </div>
    </>
  );
}
