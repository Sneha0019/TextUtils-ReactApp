import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick=()=>{
    let newText = "";
    setText(newText); 
    props.showAlert("Cleared The TextArea", "success");
  }

  const [text, setText] = useState("");


  return (
    <>
      <div className="container"  style={{color:props.mode==="dark"? "white":"black"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            style={{backgroundColor:props.mode==="dark"? "#13466e":"white" , color: props.mode==="dark"? "white":"#042743" } }
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" id="btn1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>

          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" id="btn2" onClick={handleLowClick}>
            Convert to LowerCase
          </button>

          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" id="btn2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview here!"}</p>
        </div>
      </div>
    </>
  );
}
