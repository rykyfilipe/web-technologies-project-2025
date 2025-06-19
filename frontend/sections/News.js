//const API_KEY = '77874b8dcba14e28be6f852835919719';

const News = async (container) => {
  container.innerHTML = '';
  const newsDiv = document.createElement('div');
  newsDiv.classList.add('news');
  container.appendChild(newsDiv);

  try {
    const response = await fetch('http://127.0.0.1:3001/unique-actors');
    const data = await response.json(); 

    const actors = data?.slice(0, 5); 
    if (!actors || actors.length === 0) {
      console.warn('Nu s-au găsit actori.');
      return;
    }

    for (const actor of actors) {
        const query = actor.trim().replace(/\s+/g, '+'); 
        console.log(`Qurety pt: ${query}`);
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

      const newsResp = await fetch(url);
      const data = await newsResp.json();

      if (data.articles) {
        const firstThreeArticles = data.articles.slice(0, 3);
        addNews(newsDiv, firstThreeArticles);
      }
    }
  } catch (error) {
    console.error('Eroare la fetch:', error);
  }
};

// Funcția addNews care adaugă articolele în DOM
function addNews(container, articles) {
  articles.forEach((article) => {
    const div = document.createElement('div');
    div.className = 'news-article';

    div.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>By:</strong> ${article.author ?? 'Unknown'}</p>
            <p><strong>Source:</strong> ${article.source.name}</p>
            <p>${article.description}</p>
            <img src="${article.urlToImage}" alt="Image for ${
      article.title
    }" style="max-width: 100%;">
            <p><a href="${article.url}" target="_blank">Read more</a></p>
            <p><small>Published at: ${new Date(
              article.publishedAt
            ).toLocaleString()}</small></p>
        `;

    container.appendChild(div);
  });
}
export default News;
