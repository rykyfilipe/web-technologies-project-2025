/** @format */

import Movie from "../components/Movie.js";
import "../styles/Movie.css";
import {
	showErrorState,
	showLoadingState,
	removeLoadingState,
} from "../components/utils.js";

const loadData = async (page) => {
	const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMxN2ZmNTFiY2EyODRhZjhmMmViY2I3Y2JmZDIxNCIsIm5iZiI6MTc0NDQ2NTYzMS42OTYsInN1YiI6IjY3ZmE2ZWRmMWYzYmNmZWE0OGQ5MzE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CFeNy56ZByIQE7jKLZHCzZ74pKnkvjlm3COEs1UDmuA",
		},
	};

	const response = await fetch(url, options);
	const data = await response.json();

	return data.results;
};
export default async function Movies(container) {
	let currentPage = 1;
	container.innerHTML = "";

	const grid = document.createElement("div");
	grid.className = "movies-grid";
	grid.id = "movies";

	const sentinel = document.createElement("div");
	sentinel.id = "sentinel";

	const loadPage = async (page) => {
		showLoadingState(grid);
		try {
			const movies = await loadData(page);

			removeLoadingState();
			movies.forEach((movie) => {
				Movie(grid, movie);
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
