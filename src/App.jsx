import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Bar from "./component/Bar";
import UpBar from "./component/UpBar";
import Board from "./page/Board";
import Home from "./page/Home";
import LocalStock from "./page/LocalStock";
import OverseasStock from "./page/OverseasStock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-gray-800 flex flex-col lg:flex-row min-h-screen relative">
        <Bar />
        <div className="flex-7 h-screen">
          <UpBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/localstock" element={<LocalStock />} />
            <Route path="/overseasstock" element={<OverseasStock />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
