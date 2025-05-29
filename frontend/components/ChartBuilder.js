/** @format */

import Chart from "chart.js/auto";
import jsPDF from "jspdf";
import "../styles/Chart.css";

const downloadCSV = (chartInfo) => {
	const { data } = chartInfo;
	let csv = "Label,Value\n";

	data.labels.forEach((label, index) => {
		const value = data.datasets[0].data[index];
		csv += `"${label}","${value}"\n`;
	});

	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = `${chartInfo.id}.csv`;
	link.click();
};

const downloadWebP = (canvas, id) => {
	const link = document.createElement("a");
	link.download = `${id}.webp`;
	link.href = canvas.toDataURL("image/webp");
	link.click();
};

const downloadPDF = (canvas, title) => {
	const imgData = canvas.toDataURL("image/png");
	const pdf = new jsPDF();
	pdf.text(title, 10, 10);
	pdf.addImage(imgData, "PNG", 10, 20, 180, 100); // Adjust sizes
	pdf.save(`${title}.pdf`);
};

const ChartBuilder = (container, chartInfo) => {
	const chartContainer = document.createElement("div");
	chartContainer.classList.add("chart-container");

	const title = document.createElement("h2");
	title.innerText = chartInfo.title;
	chartContainer.appendChild(title);

	const chartCanvas = document.createElement("canvas");
	chartCanvas.id = chartInfo.id;
	chartContainer.appendChild(chartCanvas);

	const toggleButton = document.createElement("button");
	toggleButton.classList.add("download-btn");
	toggleButton.innerHTML = "⬇️";

	const exportButtons = document.createElement("div");
	exportButtons.className = "export-buttons hidden";

	exportButtons.innerHTML = `
		<button class="export-btn" data-type="csv">📄 CSV</button>
		<button class="export-btn" data-type="webp">🖼️ WebP</button>
		<button class="export-btn" data-type="pdf">📑 PDF</button>
	`;

	toggleButton.addEventListener("click", () => {
		exportButtons.classList.toggle("hidden");
	});

	chartContainer.prepend(exportButtons);
	chartContainer.prepend(toggleButton);

	container.appendChild(chartContainer);

	const chart = new Chart(chartCanvas, {
		type: chartInfo.type,
		data: chartInfo.data,
		options: chartInfo.options,
	});

	exportButtons.querySelector('[data-type="csv"]').onclick = () =>
		downloadCSV(chartInfo);
	exportButtons.querySelector('[data-type="webp"]').onclick = () =>
		downloadWebP(chartCanvas, chartInfo.id);
	exportButtons.querySelector('[data-type="pdf"]').onclick = () =>
		downloadPDF(chartCanvas, chartInfo.title);
};

export default ChartBuilder;
