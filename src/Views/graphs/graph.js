import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
    elements: {
        line: {
            borderWidth: 1
        }
    },
    scales: {
        r: {
            ticks: {
                beginAtZero: true,
                max: 5,
                min: 0,
                stepSize: 1,
                font: {
                    size: 6
                }
            },
            pointLabels: {
                fontSize: 24
            }
        }
    },
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 14,
        },
      },
    },
  },
};

export const data = {
  labels: [
    "Web development",
    "Data analysis",
    "Project management",
    "Communication",
    "fish",
  ],
  datasets: [
    {
      label: "My ability",
      data: [1, 2, 4, 3, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

export function Graph() {
  return (
    <div className="ml-3 w-full flex p-6">
      <Radar data={data} options={options} />
    </div>
  );
}

export default Graph;
