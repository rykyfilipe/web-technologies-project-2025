/** @format */

import "../styles/Home.css";
import ChartBuilder from "../components/ChartBuilder.js";
import {
	createCategoryWinsChart,
	createCategoryWinsData,
	createTimeSeriesChart,
	createTimeSeriesData,
	createNominalizationShowData,
	createShowNominalizationChart,
} from "../constants/chartInfo.js";

let cachedData = null;

const loadData = async () => {
	if (cachedData) {
		return cachedData;
	}

	try {
		const response = await fetch("http://localhost:3001/get-data");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();

		if (!Array.isArray(data)) {
			throw new Error("Invalid data format: expected array");
		}

		cachedData = data;
		return data;
	} catch (error) {
		console.error("Error fetching dashboard data:", error);
		return null;
	}
};

const showLoadingState = (container) => {
	const loadingDiv = document.createElement("div");
	loadingDiv.id = "loading-state";
	loadingDiv.className = "loading-state";
	loadingDiv.innerHTML = `
		<div class="loading-spinner"></div>
		<p>Loading dashboard data...</p>
	`;
	container.appendChild(loadingDiv);
};

const removeLoadingState = () => {
	const loadingState = document.getElementById("loading-state");
	if (loadingState) {
		loadingState.remove();
	}
};

const showErrorState = (container, message) => {
	const errorDiv = document.createElement("div");
	errorDiv.className = "error-state";
	errorDiv.innerHTML = `
		<div class="error-icon">⚠️</div>
		<h3>Unable to Load Data</h3>
		<p>${message}</p>
		<button onclick="location.reload()" class="retry-button">Retry</button>
	`;
	container.appendChild(errorDiv);
};

const Home = async (container) => {
	if (!container) {
		console.error("Dashboard: container is null or undefined.");
		return;
	}
	container.innerHTML = " ";

	const existingHome = document.getElementById("home");
	if (existingHome) {
		existingHome.remove();
	}

	const section = document.createElement("section");
	section.classList.add("home");
	section.id = "home";
	container.appendChild(section);

	showLoadingState(section);

	try {
		const data = await loadData();
		console.log(data);
		removeLoadingState();

		if (!data || data.length === 0) {
			showErrorState(section, "No data available for charts.");
			return;
		}

		const categoryWinsData = createCategoryWinsData(data);
		const timeSeriesData = createTimeSeriesData(data);
		const nominalizationData = createNominalizationShowData(data);

		if (categoryWinsData.length === 0 && timeSeriesData.length === 0) {
			showErrorState(section, "No valid data found for visualization.");
			return;
		}

		const div = document.createElement("div");
		div.classList.add("chart-wrapper");

		if (categoryWinsData.length > 0) {
			const categoryChart = createCategoryWinsChart(categoryWinsData);
			ChartBuilder(div, categoryChart);
		}

		if (timeSeriesData.length > 0) {
			const timeSeriesChart = createTimeSeriesChart(timeSeriesData);
			ChartBuilder(div, timeSeriesChart);
		}

		if (nominalizationData.length > 0) {
			const nominalizationChartData =
				createShowNominalizationChart(nominalizationData);
			ChartBuilder(div, nominalizationChartData);
		}

		const summary = document.createElement("div");
		summary.className = "data-summary";
		const totalNominations = data.length;
		const totalWins = data.filter((item) => item.won).length;
		const winRate =
			totalNominations > 0
				? ((totalWins / totalNominations) * 100).toFixed(1)
				: 0;

		summary.innerHTML = `
			<div class="summary-stats">
				<div class="stat-item">
					<span class="stat-value">${totalNominations.toLocaleString()}</span>
					<span class="stat-label">Total Nominations</span>
				</div>
				<div class="stat-item">
					<span class="stat-value">${totalWins.toLocaleString()}</span>
					<span class="stat-label">Total Wins</span>
				</div>
				<div class="stat-item">
					<span class="stat-value">${winRate}%</span>
					<span class="stat-label">Win Rate</span>
				</div>
			</div>
		`;
		section.prepend(summary);
		section.append(div);
	} catch (error) {
		console.error("Error creating dashboard:", error);
		removeLoadingState();
		showErrorState(
			section,
			"An unexpected error occurred while loading the dashboard.",
		);
	}
};

// Function to clear cache (useful for development or when data updates)
const clearCache = () => {
	cachedData = null;
};

export default Home;
export { clearCache };
