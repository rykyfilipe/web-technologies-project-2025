/** @format */

export const extractYear = (yearString) => {
	if (!yearString || typeof yearString !== "string") return null;
	return yearString.split(" ")[0];
};

export const createCategoryWinsData = (data) => {
	const categoryWins = {};

	data.forEach((item) => {
		if (item.won && item.category) {
			categoryWins[item.category] = (categoryWins[item.category] || 0) + 1;
		}
	});

	return Object.entries(categoryWins)
		.map(([category, count]) => ({ category, count }))
		.sort((a, b) => b.count - a.count);
};

export const createTimeSeriesData = (data) => {
	const yearData = new Map();

	data.forEach((item) => {
		const year = extractYear(item.year);
		if (!year) return;

		if (!yearData.has(year)) {
			yearData.set(year, { nominations: 0, wins: 0 });
		}

		const currentYearData = yearData.get(year);
		currentYearData.nominations++;
		if (item.won) {
			currentYearData.wins++;
		}
	});

	return Array.from(yearData.entries())
		.map(([year, data]) => ({
			year,
			nominations: data.nominations,
			wins: data.wins,
			winPercentage:
				data.nominations > 0
					? ((data.wins / data.nominations) * 100).toFixed(1) + "%"
					: "0%",
		}))
		.sort((a, b) => parseInt(a.year) - parseInt(b.year));
};

export const createCategoryWinsChart = (chartData) => ({
	id: "wins-category-chart",
	title: "Wins by Category",
	type: "bar",
	data: {
		labels: chartData.map((item) => item.category),
		datasets: [
			{
				label: "Wins",
				data: chartData.map((item) => item.count),
				backgroundColor: [
					"rgba(59, 130, 246, 0.8)", // Blue
					"rgba(16, 185, 129, 0.8)", // Green
					"rgba(245, 158, 11, 0.8)", // Amber
					"rgba(239, 68, 68, 0.8)", // Red
					"rgba(139, 92, 246, 0.8)", // Purple
					"rgba(236, 72, 153, 0.8)", // Pink
					"rgba(6, 182, 212, 0.8)", // Cyan
					"rgba(34, 197, 94, 0.8)", // Emerald
				],
				borderColor: [
					"rgba(59, 130, 246, 1)",
					"rgba(16, 185, 129, 1)",
					"rgba(245, 158, 11, 1)",
					"rgba(239, 68, 68, 1)",
					"rgba(139, 92, 246, 1)",
					"rgba(236, 72, 153, 1)",
					"rgba(6, 182, 212, 1)",
					"rgba(34, 197, 94, 1)",
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(17, 24, 39, 0.95)",
				titleColor: "#F9FAFB",
				bodyColor: "#F9FAFB",
				borderColor: "rgba(75, 85, 99, 0.3)",
				borderWidth: 1,
				padding: 16,
				cornerRadius: 12,
				usePointStyle: true,
				titleFont: {
					size: 14,
					weight: "600",
				},
				bodyFont: {
					size: 13,
				},
				callbacks: {
					title: function (context) {
						return context[0].label || "";
					},
					label: function (context) {
						const count = context.formattedValue;
						return `${count} ${count === "1" ? "win" : "wins"}`;
					},
				},
			},
		},
		interaction: {
			mode: "nearest",
			intersect: false,
		},
		animation: {
			duration: 1000,
			easing: "easeOutCubic",
		},
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(156, 163, 175, 0.1)",
					drawBorder: false,
				},
				ticks: {
					color: "#6B7280",
					font: {
						size: 12,
						weight: "500",
					},
					padding: 12,
					stepSize: 1,
				},
			},
		},
		layout: {
			padding: {
				right: 24,
				bottom: 16,
				left: 16,
				top: 20,
			},
		},
	},
});

export const createTimeSeriesChart = (timeSeriesData) => ({
	id: "wins-and-nominations-chart",
	title: "Nominations and Wins Over Time",
	type: "line",
	data: {
		labels: timeSeriesData.map((item) => item.year),
		datasets: [
			{
				label: "Nominations",
				data: timeSeriesData.map((item) => item.nominations),
				backgroundColor: "rgba(59, 130, 246, 0.1)",
				borderColor: "rgba(59, 130, 246, 1)",
				borderWidth: 3,
				tension: 0.4,
				pointRadius: 1,
				pointHoverRadius: 2,
				pointBackgroundColor: "rgba(59, 130, 246, 1)",
				pointBorderColor: "#FFFFFF",
				pointBorderWidth: 0,
				fill: true,
			},
			{
				label: "Wins",
				data: timeSeriesData.map((item) => item.wins),
				backgroundColor: "rgba(16, 185, 129, 0.1)",
				borderColor: "rgba(16, 185, 129, 1)",
				borderWidth: 3,
				tension: 0.4,
				pointRadius: 1,
				pointHoverRadius: 2,
				pointBackgroundColor: "rgba(16, 185, 129, 1)",
				pointBorderColor: "#FFFFFF",
				pointBorderWidth: 2,
				fill: true,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "top",
				labels: {
					color: "#374151",
					font: {
						size: 13,
						weight: "600",
					},
					padding: 24,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(17, 24, 39, 0.95)",
				titleColor: "#F9FAFB",
				bodyColor: "#F9FAFB",
				borderColor: "rgba(75, 85, 99, 0.3)",
				borderWidth: 1,
				padding: 16,
				cornerRadius: 12,
				usePointStyle: true,
				titleFont: {
					size: 14,
					weight: "600",
				},
				bodyFont: {
					size: 13,
				},
				callbacks: {
					title: function (context) {
						return `Year ${context[0].label}`;
					},
					label: function (context) {
						const dataPoint = timeSeriesData[context.dataIndex];
						if (context.datasetIndex === 0) {
							return `Nominations: ${context.formattedValue}`;
						} else {
							return `Wins: ${context.formattedValue} (${dataPoint.winPercentage})`;
						}
					},
				},
			},
		},
		interaction: {
			mode: "index",
			intersect: false,
		},
		animation: {
			duration: 1200,
			easing: "easeOutCubic",
		},
		scales: {
			x: {
				grid: {
					display: true,
					color: "rgba(156, 163, 175, 0.1)",
					drawBorder: false,
				},
				ticks: {
					color: "#6B7280",
					font: {
						size: 12,
						weight: "500",
					},
					maxTicksLimit: 8,
				},
			},
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(156, 163, 175, 0.1)",
					drawBorder: false,
				},
				ticks: {
					color: "#6B7280",
					font: {
						size: 12,
						weight: "500",
					},
					padding: 12,
					stepSize: 1,
				},
			},
		},
		layout: {
			padding: {
				right: 24,
				bottom: 16,
				left: 16,
			},
		},
	},
});

export const createNominalizationShowData = (data) => {
	const showNominalization = {};

	data.forEach((item) => {
		if (!item.won && item.show) {
			showNominalization[item.show] = (showNominalization[item.show] || 0) + 1;
		}
	});

	const sortData = Object.entries(showNominalization)
		.map(([show, count]) => ({ show, count }))
		.sort((a, b) => b.count - a.count);
	return sortData.slice(0, 10);
};

export const createShowNominalizationChart = (chartData) => ({
	id: "nominalization-show-chart",
	title: "Top 10 nominalization by show",
	type: "doughnut",
	data: {
		labels: chartData.map((item) => item.show),
		datasets: [
			{
				label: "Nominalization",
				data: chartData.map((item) => item.count),
				backgroundColor: [
					"rgba(59, 130, 246, 0.8)", // Blue
					"rgba(16, 185, 129, 0.8)", // Green
					"rgba(245, 158, 11, 0.8)", // Amber
					"rgba(239, 68, 68, 0.8)", // Red
					"rgba(139, 92, 246, 0.8)", // Purple
					"rgba(236, 72, 153, 0.8)", // Pink
					"rgba(6, 182, 212, 0.8)", // Cyan
					"rgba(34, 197, 94, 0.8)", // Emerald
				],
				borderColor: [
					"rgba(59, 130, 246, 1)",
					"rgba(16, 185, 129, 1)",
					"rgba(245, 158, 11, 1)",
					"rgba(239, 68, 68, 1)",
					"rgba(139, 92, 246, 1)",
					"rgba(236, 72, 153, 1)",
					"rgba(6, 182, 212, 1)",
					"rgba(34, 197, 94, 1)",
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(17, 24, 39, 0.95)",
				titleColor: "#F9FAFB",
				bodyColor: "#F9FAFB",
				borderColor: "rgba(75, 85, 99, 0.3)",
				borderWidth: 1,
				padding: 16,
				cornerRadius: 12,
				usePointStyle: true,
				titleFont: {
					size: 10,
					weight: "200",
				},
				bodyFont: {
					size: 13,
				},
				callbacks: {
					title: function (context) {
						return context[0].label || "";
					},
					label: function (context) {
						const count = context.formattedValue;
						return `${count} ${
							count === "1" ? "nominalization" : "nominalizations"
						}`;
					},
				},
			},
		},
		interaction: {
			mode: "nearest",
			intersect: false,
		},
		animation: {
			duration: 1000,
			easing: "easeOutCubic",
		},
		layout: {
			padding: {
				right: 24,
				bottom: 16,
				left: 16,
			},
		},
	},
});
