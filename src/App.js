import React from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="app--container">
      <Game />
      {/* <StartScreen /> */}
    </div>
  );
}
