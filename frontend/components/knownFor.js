const knownFor = (container, info) => {
  console.log(container, info);
  const title = info.title;
  const poster_path = info.poster_path;
  const vote_average = info.vote_average;
  const release_date = info.release_date;

  const movieDiv = document.createElement('div');
  movieDiv.classList.add('poster-card');

  const posterDiv = document.createElement('div');
  posterDiv.classList.add('posterDiv');
  movieDiv.appendChild(posterDiv);

  // Poster
  if (poster_path) {
    const img = document.createElement('img');
    img.src = 'https://image.tmdb.org/t/p/w200' + poster_path;
    img.alt = title;
    posterDiv.appendChild(img);
  }

  const posterDataDiv = document.createElement('div');
  posterDataDiv.classList.add('posterDataDiv');
  movieDiv.appendChild(posterDataDiv);
  // Titlu
  const titleEl = document.createElement('h3');
  titleEl.textContent = title || 'Unknown title';
  posterDataDiv.appendChild(titleEl);

  // Data lansarii
  const dateEl = document.createElement('p');
  dateEl.textContent = '📅' + (release_date || 'N/A');
  posterDataDiv.appendChild(dateEl);

  // Rating
  const ratingEl = document.createElement('p');
  ratingEl.textContent = '⭐' + (vote_average !== undefined ? vote_average.toFixed(1) : 'N/A');
    posterDataDiv.appendChild(ratingEl);

  // Adaug la container
  container.appendChild(movieDiv);
};

export default knownFor;
