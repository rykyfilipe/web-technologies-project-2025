import "../../styles/News.css";
const API_KEYS = {
	newsapi: "77874b8dcba14e28be6f852835919719",
	gnews: "32c3c615b227d0dabc009d3b45b37f7e",
};

const News = async (container) => {
	container.innerHTML = "";

	const navbar = document.querySelector(".navbar");

	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	const select = document.createElement("select");
	select.innerHTML = `
    <option value="newsapi">NewsAPI</option>
    <option value="gnews">GNews</option>
  `;
	select.classList.add("news-source-selector");
	container.appendChild(select);

	const newsDiv = document.createElement("div");
	newsDiv.classList.add("news");
	container.appendChild(newsDiv);

	select.addEventListener("change", () => {
		loadNews(newsDiv, select.value);
	});

	loadNews(newsDiv, select.value);
};

async function loadNews(newsDiv, selectedSource) {
	newsDiv.innerHTML = "";
	try {
		const userDataRaw = localStorage.getItem("w-user");

		const userData = JSON.parse(userDataRaw);
		const authToken = userData.token;

		if (!authToken) {
			console.log("Nu exista access token");
		}

		const response = await fetch(
			"https://web-technologies-project-2025-production.up.railway.app/unique-actors",
			{ headers: { Authorization: `Bearer ${authToken}` } }
		);
		const data = await response.json();
		const actors = data?.slice(0, 3); 

		if (!actors || actors.length === 0) {
			console.warn("Nu s-au găsit actori.");
			return;
		}

		for (const actor of actors) {
			const query = actor.trim().replace(/\s+/g, "+");
			console.log(`Caut știri pentru ${query} din ${selectedSource}`);

			let url;
			let source;
			if (selectedSource === "newsapi") {
				url = `https://web-technologies-project-2025-production.up.railway.app/news?query=${query}`;
				source = 1;
			} else if (selectedSource === "gnews") {
				url = `https://gnews.io/api/v4/search?q=${query}&lang=en&token=${API_KEYS.gnews}`;
				source = 2;
			}

			let newsResp;
			if (source === 1) {
				newsResp = await fetch(url, {
					headers: { Authorization: `Bearer ${authToken}` },
				});
			} else {
				newsResp = await fetch(url);
			}
			const data = await newsResp.json();
			console.log(data);

			const articles = data.articles?.slice(0, 3);
			if (articles) addNews(newsDiv, articles, source);
		}
	} catch (err) {
		console.error("Eroare la încărcare știri:", err);
	}
}

function addNews(container, articles, source) {
	articles.forEach((article) => {
		const div = document.createElement("div");
		div.className = "news-article";

		let title,
			author,
			sourceName,
			description,
			image,
			url,
			publishedAt,
			urlToImage;

		if (source === 1) {
			title = article.title;
			name = article.source.name;
			description = article.description;
			author = article.author;
			urlToImage = article.urlToImage;
			url = article.url;
			publishedAt = article.publishedAt;
		} else if (source === 2) {
			title = article.title;
			name = article.source?.name;
			description = article.description;
			author = article.source?.name;
			urlToImage = article.image;
			url = article.url;
			publishedAt = article.publishedAt;
		}

		div.innerHTML = `
            <h2>${title}</h2>
            <div class="news-article-header">
              <p><strong>By:</strong> ${author ?? "Unknown"}</p>
              <p><strong>Source:</strong> ${name}</p>
            </div>
            
            <p class="news-description">${description}</p>
            <img src="${urlToImage}" alt="Image for ${title}">
            <p><a href="${url}" target="_blank" class="news-article-read-more">Read more</a></p>
            <p><small>Published at: ${new Date(
							publishedAt
						).toLocaleString()}</small></p>
        `;

		container.appendChild(div);
	});
}

export default News;
