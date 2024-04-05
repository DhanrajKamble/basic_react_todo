import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoItems item = "Java chapter 4"/>
      <TodoItems item = "Tic Tac Toe"/>
      <TodoItems item = "2 Pointers"/>
      <TodoItems item = "Fluency"/>
      <TodoItems item = "Go to walk"/>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
