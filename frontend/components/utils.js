/** @format */

export const showLoadingState = (container) => {
	if (document.getElementById("loading-state")) return;
	if (document.querySelector(".error-state")) {
		document.querySelector(".error-state").remove();
	}

	const loadingDiv = document.createElement("div");
	loadingDiv.id = "loading-state";
	loadingDiv.className = "loading-state";
	loadingDiv.innerHTML = `
		<div class="loading-spinner"></div>
		<p>Loading dashboard data...</p>
	`;
	container.appendChild(loadingDiv);
};

export const removeLoadingState = () => {
	const loadingState = document.getElementById("loading-state");
	if (loadingState) {
		loadingState.remove();
	}
};

export const showErrorState = (container, message) => {
	if (document.querySelector(".error-state")) return;
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
