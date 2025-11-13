import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
// Chart.js v4 기준

// Mock 데이터 (시간, 가격)
const mockData = {
  timestamps: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
  prices: [150, 152, 149, 153, 155, 154, 156],
};

export default function Chart() {
  const data = {
    labels: mockData.timestamps,
    datasets: [
      {
        label: "NASDAQ",
        data: mockData.prices,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        fill: true, // 선 아래 색 채우기
        pointRadius: 5, // 점 크기
        pointBackgroundColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "실시간 NASDAQ 차트 (Mock Data)" },
    },
    scales: {
      y: {
        beginAtZero: false, // 가격 범위 자동 맞춤
        grid: { color: "#eee" },
      },
      x: {
        grid: { color: "#eee" },
      },
    },
  };

  return (
    <div className="max-h-full max-w-full m-auto">
      <Line data={data} options={options} />
    </div>
  );
}
