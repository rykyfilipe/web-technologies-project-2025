/** @format */
import "../styles/MoviePage.css";

export default function MoviePage(data) {
	const container = document.getElementById("dashboard");
	container.innerHTML = " ";

	const wrapper = document.createElement("div");
	wrapper.className = "movie-page";

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0,
		}).format(amount);
	};

	const formatRuntime = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours}h ${mins}m`;
	};

	const posterSection = document.createElement("div");
	posterSection.className = "poster-section";

	const backdrop = document.createElement("div");
	backdrop.className = "movie-backdrop";
	backdrop.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`;

	const posterContainer = document.createElement("div");
	posterContainer.className = "poster-container";

	const image = document.createElement("img");
	image.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
	image.alt = data.title;
	image.className = "movie-poster";
	image.loading = "lazy";

	const ageRating = document.createElement("div");
	ageRating.className = "age-rating";
	ageRating.textContent = data.adult ? "18+" : "PG";

	posterContainer.appendChild(image);
	posterContainer.appendChild(ageRating);
	posterSection.appendChild(backdrop);
	posterSection.appendChild(posterContainer);

	const content = document.createElement("div");
	content.className = "movie-content";

	const releaseDate = new Date(data.release_date);
	const formattedDate = releaseDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const ratingPercentage = Math.round(data.vote_average * 10);
	const ratingColor =
		ratingPercentage > 70
			? "#21d07a"
			: ratingPercentage > 50
			? "#d2d531"
			: "#db2360";

	content.innerHTML = `
    <div class="movie-header">
      <div>
        <h1 class="movie-title">${data.title}</h1>
        <p class="tagline">${data.tagline}</p>
      </div>
      <div class="rating-circle" style="--rating-color: ${ratingColor}">
        <svg viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#333"
            stroke-width="3"
            stroke-dasharray="${ratingPercentage}, 100"
          />
        </svg>
        <span>${ratingPercentage}%</span>
      </div>
    </div>
    
    <div class="movie-meta">
      <span class="release-date">${formattedDate}</span>
      <span>•</span>
      <span class="runtime">${formatRuntime(data.runtime)}</span>
      <span>•</span>
      <span class="language">${data.spoken_languages[0].english_name}</span>
      <span>•</span>
      <span class="status">${data.status}</span>
    </div>
    
    <div class="movie-tags">
      ${data.genres
				.map((genre) => `<span class="genre-tag">${genre.name}</span>`)
				.join("")}
    </div>
    
    <h3 class="section-title">Overview</h3>
    <p class="movie-overview">${data.overview}</p>
    
    <div class="additional-info">
      <div class="info-item">
        <h4>Budget</h4>
        <p>${formatCurrency(data.budget)}</p>
      </div>
      <div class="info-item">
        <h4>Revenue</h4>
        <p>${formatCurrency(data.revenue)}</p>
      </div>
      <div class="info-item">
        <h4>Production Companies</h4>
        <p>${data.production_companies
					.map((company) => company.name)
					.join(", ")}</p>
      </div>
      <div class="info-item">
        <h4>Production Countries</h4>
        <p>${data.production_countries
					.map((country) => country.name)
					.join(", ")}</p>
      </div>
    </div>
    
    <div class="external-links">
      <a href="${
				data.homepage
			}" target="_blank" class="homepage-link">Official Website</a>
      <a href="https://www.imdb.com/title/${
				data.imdb_id
			}" target="_blank" class="imdb-link">IMDb Page</a>
    </div>
  `;

	wrapper.appendChild(posterSection);
	wrapper.appendChild(content);
	container.appendChild(wrapper);
}
