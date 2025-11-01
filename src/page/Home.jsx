import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";
import Card from "../component/Card";
import Chart from "../component/Chart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className=" h-auto">
        <div className="m-3 h-60 bg-[#7543fd] rounded-2xl shadow relative">
          <h1 className="absolute top-8 left-4 text-white font-bold rotate-[0.4deg]">
            I CAN DO IT!
          </h1>
          <p className="text-white absolute top-20 left-5 rotate-[0.4deg]">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="absolute top-30 left-4 bg-gray-800 text-white px-7 py-2 rounded rotate-[0.4deg] cursor-pointer hover:bg-gray-900">
            SELECT
          </div>
        </div>
      </div>
      <div className="h-3/5 lg:flex text-white">
        <div className="lg:flex-3 bg-gray-700 rounded-2xl m-3 h-[400px] shadow overflow-auto scroll-auto-hide p-3 lg:h-127 min-w-50">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="lg:flex-2 lg:mr-3 lg:mt-3 m-3">
          <div className="bg-gray-700 rounded-2xl p-2 h-50 flex items-center shadow">
            <Chart />
          </div>
          <div className="bg-gray-700 rounded-2xl p-2 h-34 mt-4 shadow lg:h-55 mb-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
