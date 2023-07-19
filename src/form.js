import React from "react";
import "./index.css";

const date = new Date().toLocaleDateString();
//const time = new Date().getHours();
let time = 22;
let cssStyle = {};
let greeting = "";
if (time > 1 && time < 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (time > 11 && time < 17) {
  greeting = "Good AfterNoon";
  cssStyle.color = "red";
} else if (time > 17 && time < 23) {
  greeting = "Good Night";
  cssStyle.color = "blue";
}

const Form = () => {
  return (
    <>
      <h1>Current Date is {date}</h1>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
      <button className="btn btn-success">Hello </button>
      <hr />
      <img src="https://picsum.photos/id/50/50/50" alt="Not load" />
    </>
  );
};
export default Form;
