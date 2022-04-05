import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "COVID-19 Dataset",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default function LineGraph({ yAxis, label }) {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        margin: "0px auto",
      }}
    >
      <Line
        options={options}
        data={{
          labels: label,
          datasets: [
            {
              label: "CONFIRMED CASES",
              data: yAxis,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
      ;
    </div>
  );
}
