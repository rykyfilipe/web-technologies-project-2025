import Actor from "../components/Actor.js";
import "../styles/Actor.css";

const Actors = async (container) => {
	let currentPage = 1;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTMwMTZmNTNiZDkxNDc1YjE4OTc4YzZmYjMwNDA4NCIsIm5iZiI6MTc0ODMzOTI5My4xNTEsInN1YiI6IjY4MzU4YTVkOTU4ODI2ZDNiMTQxNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6uC2WYkMcFxzLXuZVBiFdkBqIL47OJ5lxAn4Y8gfMg",
		},
	};

	const exists = document.querySelector(".actors");
	if (exists) {
		exists.remove();
	}

	const actorsDiv = document.createElement("div");
	container.innerHTML = "";
	actorsDiv.classList.add("actors");
	container.appendChild(actorsDiv);

	const sentinel = document.createElement("div");
	sentinel.id = "sentinel";

	async function loadPage(page) {
		const response = await fetch(
			`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`,
			options
		);
		const data = await response.json();
		console.log(data);

		data.results.forEach((actor) => {
			const info = {
				id: actor.id,
				name: actor.name,
				popularity: actor.popularity,
				imgUrl: actor.profile_path,
				known_for: actor.known_for,
			};
			Actor(actorsDiv, info);
		});
		actorsDiv.appendChild(sentinel);
	}

	await loadPage(currentPage);

	const observer = new IntersectionObserver(async (entries) => {
		console.log("SANTINEL II VAZUT");
		if (entries[0].isIntersecting) {
			currentPage++;
			await loadPage(currentPage);
		}
	});

	observer.observe(sentinel);
};

export default Actors;
