/** @format */

// import Nomination from "../../components/Nomination.js";
import "../../styles/Movie.css";
import {
	showErrorState,
	showLoadingState,
	removeLoadingState,
} from "../../components/utils.js";

const loadData = async (page) => {
	try {
		const userDataRaw = localStorage.getItem("w-user");
		const userData = JSON.parse(userDataRaw);
		const authToken = userData.token;

		if (!authToken) {
			console.log("Nu exista access token");
		}

		const URL = `https://web-technologies-project-2025-production.up.railway.app`;

		const response = await fetch(`${URL}/nominies?id=${page}`, {
			headers: { Authorization: `Bearer ${authToken}` },
		});

		if (!response.ok) {
			console.log(response.message);
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);

		if (!Array.isArray(data)) {
			throw new Error("Invalid data format: expected array");
		}

		return data;
	} catch (error) {
		console.error("Error fetching nominations data:", error);
		return null;
	}
};

export default async function Nominations(container) {
	const navbar = document.querySelector(".navbar");
	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	let currentPage = 1;
	container.innerHTML = "";

	const grid = document.createElement("div");
	grid.className = "movies-grid";
	grid.id = "nominations";

	const sentinel = document.createElement("div");
	sentinel.id = "sentinel";

	const loadPage = async (page) => {
		showLoadingState(grid);
		try {
			const nominations = await loadData(page);
			removeLoadingState();

			nominations.forEach((nomination) => {
				// Nomination(grid, nomination);
				console.log(nomination);
			});
			grid.append(sentinel);
		} catch (error) {
			showErrorState(grid, error);
		}
	};

	loadPage(currentPage);

	const observer = new IntersectionObserver(async (entries) => {
		if (entries[0].isIntersecting) {
			currentPage++;
			await loadPage(currentPage);
		}
	});

	observer.observe(sentinel);

	container.appendChild(grid);
}
