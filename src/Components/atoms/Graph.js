import * as React from "react";
import styled from "@emotion/styled";

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
					size: "14rem",
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
	const [chartClicked, setChartClicked] = React.useState(-1);
	const chartRef = React.useRef(null);

	const explanation = [
		"Web development",
		"Communication",
		"Data analysis",
		"Machine",
		"Blue",
	];

	const clickChart = e => {
		const clickedElem = getElementAtEvent(chartRef.current, e)[0];
		setChartClicked(clickedElem.index);
		alert(explanation[clickedElem.index]);

		// if (clickedElem.index >= 0) {
		// }
	};

	const ChartExplanation = () => {
		return (
			<div>
				<p>{explanation[chartClicked]}</p>
			</div>
		);
	};

	const ChartWrapper = styled("div")({
		width: "30vw",
		height: "50vh",
		backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FFFFFF 90%)",
		borderRadius: "1rem",
		padding: "4rem",
	});

	return (
		<ChartWrapper>
			{/* <div className="ml-3 w-full flex"> */}
			<PolarArea
				ref={chartRef}
				data={data}
				options={options}
				onClick={clickChart}
			/>
			{/* </div> */}
			<ChartExplanation className="mt-12" />
		</ChartWrapper>
	);
}

export default Graph;
