/** @format */

import MoviePage from "../sections/user/MoviePage.js";
import { showErrorState } from "./utils.js";

export default function Movies(container, data) {
	const card = document.createElement("div");
	card.className = "movie-card";

	card.innerHTML = `
			<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${
		data.title
	}" class="movie-poster" />
			<div class="movie-details">
				<h3 class="movie-title">${data.title}</h3>
				<p class="movie-overview">${data.overview}</p>
				<div class="movie-meta">
					<span class="movie-rating">⭐ ${data.vote_average.toFixed(1)}</span>
					<span class="movie-date">📅 ${data.release_date}</span>
				</div>
			</div>
		`;

	card.addEventListener("click", () => {
		const url = `https://api.themoviedb.org/3/movie/${data.id}?language=en-US`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjMxN2ZmNTFiY2EyODRhZjhmMmViY2I3Y2JmZDIxNCIsIm5iZiI6MTc0NDQ2NTYzMS42OTYsInN1YiI6IjY3ZmE2ZWRmMWYzYmNmZWE0OGQ5MzE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CFeNy56ZByIQE7jKLZHCzZ74pKnkvjlm3COEs1UDmuA",
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => MoviePage(json))
			.catch((err) => showErrorState(container, err));
	});

	container.appendChild(card);
}
