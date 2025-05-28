const knownFor = (container, info) => {
  console.log(container, info);
  const title = info.title;
  const poster_path = info.poster_path;
  const vote_average = info.vote_average;
  const release_date = info.release_date;

  const movieDiv = document.createElement('div');
  movieDiv.classList.add('movie-card');

  // Poster
  if (poster_path) {
    const img = document.createElement('img');
    img.src = 'https://image.tmdb.org/t/p/w200' + poster_path;
    img.alt = title;
    movieDiv.appendChild(img);
  }

  // Titlu
  const titleEl = document.createElement('h3');
  titleEl.textContent = title || 'Unknown title';
  movieDiv.appendChild(titleEl);

  // Data lansarii
  const dateEl = document.createElement('p');
  dateEl.textContent = 'Release date: ' + (release_date || 'N/A');
  movieDiv.appendChild(dateEl);

  // Rating
  const ratingEl = document.createElement('p');
  ratingEl.textContent =
    'Rating: ' + (vote_average !== undefined ? vote_average : 'N/A');
  movieDiv.appendChild(ratingEl);

  // Adaug la container
  container.appendChild(movieDiv);
};

export default knownFor;
