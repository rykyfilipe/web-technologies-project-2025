/** @format */

import knownFor from "../components/knownFor.js";
import "../styles/ActorProfilePage.css";

const ActorProfilePage = (container, info) => {
	console.log(info);
	const name = info.name;
	const biography =
		info.biography.length > 500
			? info.biography.slice(0, 300) + "..."
			: info.biography;
	const birthday = info.birthday;
	const known_for_department = info.known_for_department;
	const place_of_birth = info.place_of_birth;
	const baseUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = baseUrl + info.imgUrl;
	const known_for = info.known_for;
	console.log(imgUrl);

	const exists = document.querySelector(".actorPage");
	if (exists) {
		exists.remove();
	}

	const actorPage = document.createElement("div");
	actorPage.classList.add("actorPage");

	const nameDiv = document.createElement("div");
	nameDiv.classList.add("headder");
	const nameH = document.createElement("h2");
	nameH.textContent = name;
	const known_for_departmentP = document.createElement("p");
	known_for_departmentP.textContent = known_for_department;
	nameDiv.appendChild(nameH);
	nameDiv.appendChild(known_for_departmentP);

	const actorDataDiv = document.createElement("div");
	actorDataDiv.classList.add("middle");
	const imgDiv = document.createElement("div");
	imgDiv.classList.add("imgDiv");
	const img = document.createElement("img");
	img.src = imgUrl;
	imgDiv.appendChild(img);
	const dataDiv = document.createElement("div");
	const birth_placeP = document.createElement("p");
	birth_placeP.textContent = "Place of birth: " + place_of_birth;
	const birthdayP = document.createElement("p");
	dataDiv.appendChild(birth_placeP);
	dataDiv.appendChild(birthdayP);
	birthdayP.textContent = "Birthday: " + birthday;
	actorDataDiv.appendChild(imgDiv);
	actorDataDiv.appendChild(dataDiv);

	const biographyDiv = document.createElement("div");
	biographyDiv.classList.add("biography");
	biographyDiv.textContent = biography;

	const known_forDiv = document.createElement("div");
	known_forDiv.classList.add("known-forDiv");
	known_for.forEach((movie) => {
		const info = {
			title: movie.title,
			poster_path: movie.poster_path,
			release_date: movie.release_date,
			vote_average: movie.vote_average,
		};
		knownFor(known_forDiv, info);
	});

	actorPage.appendChild(nameDiv);
	actorPage.appendChild(actorDataDiv);
	actorPage.appendChild(biographyDiv);
	actorPage.appendChild(known_forDiv);
	container.appendChild(actorPage);
};

export default ActorProfilePage;
