import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const options = {
  elements: {
    line: {
      borderWidth: 1,
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 20,
        },
      },
    },
  },
};

export const data = {
  labels: [
    "Web development",
    "Communication",
    "Data analysis",
    "Machine",
    "Blue",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [10, 12, 14, 16, 18, 22],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(80, 200, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};
export function Graph() {
  const [chartClicked, setChartClicked] = useState(-1);
  const chartRef = useRef(null);

  const clickChart = (e) => {
    const clickedElemIdx = getElementAtEvent(chartRef.current, e)[0].index;
    setChartClicked(clickedElemIdx);

    if (clickedElemIdx >= 0) {
    }
  };

  const ChartExplanation = () => {
    const explanation = [
      "Web development",
      "Communication",
      "Data analysis",
      "Machine",
      "Blue",
    ];
    return (
      <div>
        <p>{explanation[chartClicked]}</p>
      </div>
    );
  };
  return (
    <div className="mt-4 min-w-64 w-6/12 mr-12 my-6 align-middle justify-center bg-light-background rounded-lg ">
      <div className="ml-3 w-full flex p-6">
        <PolarArea
          ref={chartRef}
          data={data}
          options={options}
          onClick={clickChart}
        />
      </div>
      <ChartExplanation className="mt-12" />
    </div>
  );
}

export default Graph;
