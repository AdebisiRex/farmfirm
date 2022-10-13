import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(0,0,0,.5)",
      borderColor: "rgba(0,0,0,.1)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
    title:{
        display: true
    }
  },
  elemets:{
    point:{
        pointRadius:0,
    },
  },
  
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
