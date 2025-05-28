/** @format */
import "../styles/Chart.css";
import Chart from "chart.js/auto";

const ChartBuilder = (container, chartInfo) => {
	const chartContainer = document.createElement("div");
	chartContainer.classList.add("chart-container");

	const title = document.createElement("h2");
	title.innerText = chartInfo.title;
	chartContainer.appendChild(title);

	const chartCanvas = document.createElement("canvas");
	chartCanvas.id = chartInfo.id;
	chartContainer.appendChild(chartCanvas);

	container.appendChild(chartContainer);

	new Chart(chartCanvas, {
		type: chartInfo.type,
		data: chartInfo.data,
		options: chartInfo.options,
	});
};

export default ChartBuilder;
