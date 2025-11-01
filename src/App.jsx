import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Bar from "./component/Bar";
import UpBar from "./component/UpBar";
import Home from "./page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 flex flex-col lg:flex-row min-h-screen relative">
      <Bar />
      <div className="flex-7 h-screen">
        <UpBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
