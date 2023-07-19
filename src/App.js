import React from "react";
import Covid from "./Covid";
import Myhobby from "./form";
import Counter from "./Counter";
import Counters from "./Counters";
import Navbar from "./Navbar";
import ToDoApp from "./ToDoComponents/ToDoApp";
import CounterApp from "./CounterApp";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <ToDoApp />
        <CounterApp />
      </main>


      {/* <Myhobby />
      <Covid /> */}
    </>
  );
};
export default App;
