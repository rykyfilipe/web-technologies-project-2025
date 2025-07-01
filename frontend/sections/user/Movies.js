/** @format */

import Movie from "../../components/Movie.js";
import "../../styles/Movie.css";
import {
	showErrorState,
	showLoadingState,
	removeLoadingState,
} from "../../components/utils.js";

const optionsTMDB = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMxN2ZmNTFiY2EyODRhZjhmMmViY2I3Y2JmZDIxNCIsIm5iZiI6MTc0NDQ2NTYzMS42OTYsInN1YiI6IjY3ZmE2ZWRmMWYzYmNmZWE0OGQ5MzE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CFeNy56ZByIQE7jKLZHCzZ74pKnkvjlm3COEs1UDmuA",
	},
};

export default async function Movies(container) {
	const navbar = document.querySelector(".navbar");

	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	let currentPage = 1;

	const userDataRaw = localStorage.getItem("w-user");
	const userData = JSON.parse(userDataRaw);
	const authToken = userData.token;

	const optionsBackend = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${authToken}`,
		},
	};

	container.innerHTML = "";

	const grid = document.createElement("div");
	grid.className = "movies-grid";
	grid.id = "movies";

	const sentinel = document.createElement("div");
	sentinel.id = "sentinel";

	const loadPage = async (page) => {
		showLoadingState(grid);

		try {
			const response = await fetch(
				`https://web-technologies-project-2025-production.up.railway.app/movies?page=${page}`,
				optionsBackend
			);
			const moviesList = await response.json();

			for (const movie of moviesList) {
				const movieTitle = encodeURIComponent(movie.title);
				const responseTMDB = await fetch(
					`https://api.themoviedb.org/3/search/movie?query=${movieTitle}`,
					optionsTMDB
				);
				const dataTMDB = await responseTMDB.json();
				if (dataTMDB.results && dataTMDB.results.length > 0) {
					const firstMovie = dataTMDB.results[0];

					Movie(grid, firstMovie);
				} else {
					console.log(`Nu s-au găsit rezultate TMDb pentru: ${movie.title}`);
				}
			}

			removeLoadingState();
			grid.append(sentinel);
		} catch (error) {
			showErrorState(grid, error);
		}
	};

	await loadPage(currentPage);

	const observer = new IntersectionObserver(async (entries) => {
		if (entries[0].isIntersecting) {
			currentPage++;
			await loadPage(currentPage);
		}
	});

	observer.observe(sentinel);

	container.appendChild(grid);
}
