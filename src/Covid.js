import React from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Covid = () => {
  const [value, setValue] = useState("");
  const itemEvent = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <h1>hello:{value}</h1>
        <input
          style={{ width: "500px" }}
          onChange={itemEvent}
          type="text"
          className="form-control"
        />
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>

      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
    </>
  );
};
export default Covid;
