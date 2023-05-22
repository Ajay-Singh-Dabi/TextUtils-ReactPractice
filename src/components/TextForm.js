import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase",'success');
  };
  const handleLowClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase",'success');
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text"; wrong way to change the state
  // settext("new Text"); This is the right way to change the state
  return (
    <>
      <div className="container"
      style={{color: props.mode==='dark'?'white':'black'}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white',
                    color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="continer my-3"
      style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview here."}</p>
      </div>
    </>
  );
}
