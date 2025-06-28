import ActorProfilePage from "../sections/user/ActorProfilePage.js";

const Actor = (containter, actorInfo) => {
	const name = actorInfo.name;
	const popularity = actorInfo.popularity;
	const baseUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = baseUrl + actorInfo.imgUrl;
	const id = actorInfo.id;
	//console.log(actorInfo);

	const imgDiv = document.createElement("div");
	imgDiv.classList.add("actor-img");
	const actorImg = document.createElement("img");
	actorImg.src = imgUrl;
	actorImg.alt = name;
	imgDiv.appendChild(actorImg);

	const dataDiv = document.createElement("div");
	dataDiv.classList.add("actor-data");
	const nameH = document.createElement("h2");
	nameH.textContent = name;
	const popularityP = document.createElement("p");
	popularityP.textContent = "🏆" + popularity.toFixed(1);
	dataDiv.appendChild(nameH);
	dataDiv.appendChild(popularityP);

	const actorDiv = document.createElement("div");
	actorDiv.classList.add("actor");
	actorDiv.appendChild(imgDiv);
	actorDiv.appendChild(dataDiv);

	containter.appendChild(actorDiv);
	const dashboardContainer = document.querySelector(".dashboard");

	actorDiv.addEventListener("click", async function () {
		const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTMwMTZmNTNiZDkxNDc1YjE4OTc4YzZmYjMwNDA4NCIsIm5iZiI6MTc0ODMzOTI5My4xNTEsInN1YiI6IjY4MzU4YTVkOTU4ODI2ZDNiMTQxNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6uC2WYkMcFxzLXuZVBiFdkBqIL47OJ5lxAn4Y8gfMg",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();

		const info = {
			name: data.name,
			biography: data.biography,
			birthday: data.birthday,
			known_for_department: data.known_for_department,
			place_of_birth: data.place_of_birth,
			imgUrl: imgUrl,
			known_for: actorInfo.known_for,
		};
		dashboardContainer.innerHTML = "";
		actorDiv.remove();
		ActorProfilePage(dashboardContainer, info);
	});
};

export default Actor;
