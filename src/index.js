import React from "react";
import CounterApp from "./CounterApp";
import ToDoApp from "./ToDoComponents/ToDoApp";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ToDoApp />
        <CounterApp />
    </>);
