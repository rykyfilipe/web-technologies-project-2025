/** @format */

const Movies = (container) => {
	if (!container) {
		console.error("Dashboard: container is null or undefined.");
		return;
	}

	container.innerHTML = " ";

	const existingHome = document.getElementById("movies");
	if (existingHome) {
		existingHome.remove();
	}

	const section = document.createElement("section");
	section.classList.add("movies");
	section.id = "movies";
	container.appendChild(section);
};

export default Movies;
