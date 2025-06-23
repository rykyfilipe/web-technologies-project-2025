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

import {
	showErrorState,
	removeLoadingState,
	showLoadingState,
} from "../components/utils.js";

const loadData = async () => {
	try {
		const URL =
			"https://web-technologies-project-2025-production.up.railway.app";
		const response = await fetch(`${URL}/get-data`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();

		if (!Array.isArray(data)) {
			throw new Error("Invalid data format: expected array");
		}

		return data;
	} catch (error) {
		console.error("Error fetching dashboard data:", error);
		return null;
	}
};

const Home = async (container) => {
	const navbar = document.querySelector(".navbar");

	if (navbar.classList.contains("show")) navbar.classList.remove("show");

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
			"An unexpected error occurred while loading the dashboard."
		);
	}
};

export default Home;
