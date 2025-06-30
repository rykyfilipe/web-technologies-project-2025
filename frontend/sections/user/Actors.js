import Actor from '../../components/Actor.js';
import '../../styles/Actor.css';

const Actors = async (container) => {
  const navbar = document.querySelector('.navbar');

  if (navbar.classList.contains('show')) navbar.classList.remove('show');

  let currentPage = 1;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTMwMTZmNTNiZDkxNDc1YjE4OTc4YzZmYjMwNDA4NCIsIm5iZiI6MTc0ODMzOTI5My4xNTEsInN1YiI6IjY4MzU4YTVkOTU4ODI2ZDNiMTQxNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6uC2WYkMcFxzLXuZVBiFdkBqIL47OJ5lxAn4Y8gfMg',
    },
  };

  const userDataRaw = localStorage.getItem('w-user');
  const userData = JSON.parse(userDataRaw);
  const authToken = userData.token;

  const optionsBackend = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  const exists = document.querySelector('.actors');
  if (exists) {
    exists.remove();
  }

  const actorsDiv = document.createElement('div');
  container.innerHTML = '';
  actorsDiv.classList.add('actors');
  container.appendChild(actorsDiv);

  const sentinel = document.createElement('div');
  sentinel.id = 'sentinel';

  async function loadPage(page) {
    const response = await fetch(
      `https://web-technologies-project-2025-production.up.railway.app/actors?page=${page}`,
      optionsBackend
    );
    const data = await response.json();
    console.log(data);

    data.forEach(async (actor) => {
      const actorName = encodeURIComponent(actor.name);
      //console.log(actorName);
      const responseTDMB = await fetch(
        `https://api.themoviedb.org/3/search/person?query=${actorName}`,
        options
      );
      const dataTDMB = await responseTDMB.json();
      if (dataTDMB.results && dataTDMB.results.length > 0) {
        const firstPerson = dataTDMB.results[0];
        const tmdbId = firstPerson.id;
        console.log('ID TMDb:', tmdbId);

        const [detailsRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/person/${tmdbId}`, options),
          fetch(
            `https://api.themoviedb.org/3/person/${tmdbId}/combined_credits`,
            options
          ),
        ]);

        const details = await detailsRes.json();
        const credits = await creditsRes.json();

        // extragi primele 3 producții cele mai populare
        const knownFor = credits.cast
          .filter((item) => item.title || item.name)
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3)
          .map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster_path: item.poster_path,
            media_type: item.media_type,
          }));

        const info = {
          id: details.id,
          name: details.name,
          popularity: details.popularity,
          imgUrl: details.profile_path,
          known_for: knownFor,
        };

        Actor(actorsDiv, info);
      } else {
        console.log('Nu s-au găsit rezultate în TMDb pentru:', actor.name);
      }
	});
	actorsDiv.appendChild(sentinel);

  }

//   actorsDiv.appendChild(sentinel);

  await loadPage(currentPage);

  const observer = new IntersectionObserver(async (entries) => {
    console.log('SANTINEL II VAZUT');
    if (entries[0].isIntersecting) {
      currentPage++;
      await loadPage(currentPage);
    }
  });

  observer.observe(sentinel);
};

export default Actors;
