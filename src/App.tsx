import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MemeHolder from "./components/meme-holder/MemeHolder";

const App: React.FC = () => {
  return (
    <div className="App">
      <MemeHolder />
    </div>
  );
};

export default App;
