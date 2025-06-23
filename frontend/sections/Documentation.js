/** @format */

import "../styles/Documentation.css";

export default async function Documentation(container) {
	const navbar = document.querySelector(".navbar");

	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	if (!container) {
		console.error("Dashboard: container is null or undefined.");
		return;
	}
	container.innerHTML = " ";

	const documentation = document.createElement("section");
	documentation.classList.add("documentation");

	documentation.innerHTML = `
      <h1 class="aca-title">Specificația cerințelor - AcA (Actor Awards Visualizer)</h1>

  <section class="aca-section">
    <h2 class="aca-section-title">1. Introducere</h2>
    <p class="aca-paragraph">
      Acest document descrie cerințele funcționale esențiale și interacțiunea cu utilizatorul pentru aplicația web <strong>AcA (Actor Awards Visualizer)</strong>. Aplicația oferă o platformă interactivă pentru vizualizarea și explorarea datelor referitoare la nominalizările actorilor din ultimii A ani (A > 3) la <strong>Screen Actors Guild (SAG) Awards</strong>, cu informații suplimentare din <strong>The Movie Database (TMDb)</strong>.
    </p>
  </section>

  <section class="aca-section">
    <h2 class="aca-section-title">2. Scopul aplicației</h2>
    <ul class="aca-list">
      <li class="aca-list-item">Vizualizarea nominalizărilor SAG Awards pe ultimii A ani.</li>
      <li class="aca-list-item">Accesarea informațiilor suplimentare despre actori și filme prin TMDb.</li>
      <li class="aca-list-item">Generarea de statistici și vizualizări interactive.</li>
      <li class="aca-list-item">Exportul datelor în formatele CSV, WebP și PDF.</li>
      <li class="aca-list-item">Redarea de știri actualizate pentru fiecare actor și film, din surse configurabile.</li>
    </ul>
  </section>

  <section class="aca-section">
    <h2 class="aca-section-title">3. Funcționalități esențiale</h2>
    <ul class="aca-list">
      <li class="aca-list-item">Autentificare și înregistrare securizată cu JWT.</li>
      <li class="aca-list-item">Dashboard cu 4 widget-uri de vizualizare a datelor despre nominalizările actorilor.</li>
      <li class="aca-list-item">Pagini dedicate pentru actori și filme, afișate într-un grid modern cu imagini și titluri.</li>
      <li class="aca-list-item">Navigație laterală cu acces rapid la Dashboard, Actors, Movies, News, Documentation și Logout.</li>
      <li class="aca-list-item">Pagină de știri actualizată din două surse externe configurabile.</li>
      <li class="aca-list-item">Export vizualizări în CSV, WebP și SVG.</li>
      <li class="aca-list-item">Design responsive și experiență optimizată pentru mobil și desktop.</li>
    </ul>
  </section>

  <section class="aca-section">
    <h2 class="aca-section-title">4. Interacțiunea cu utilizatorul</h2>
    <p class="aca-paragraph">
      Aplicația oferă o experiență de utilizare intuitivă și modernă. Utilizatorul se autentifică și accesează printr-o bară laterală următoarele secțiuni: Dashboard, Actors, Movies, News, Documentation și Logout. Actorii și filmele sunt afișați într-un grid vizual atractiv, iar la selectarea unui element se accesează o pagină detaliată. Dashboard-ul afișează statistici grafice despre nominalizări, iar pagina de știri afișează informații actualizate din surse externe configurabile.
    </p>
  </section>

  <section class="aca-section">
    <h2 class="aca-section-title">5. Cerințe tehnice</h2>
    <ul class="aca-list">
      <li class="aca-list-item">Frontend: HTML, CSS, JavaScript.</li>
      <li class="aca-list-item">Backend: Node.js .</li>
      <li class="aca-list-item">Bază de date: MySQL.</li>
      <li class="aca-list-item">Autentificare: JWT.</li>
      <li class="aca-list-item">Integrare API extern: TMDb pentru informații despre actori și filme.</li>
      <li class="aca-list-item">Export date: CSV, WebP, PDF.</li>
      <li class="aca-list-item">Surse de știri: două surse configurabile (NewsAPI si GNwes).</li>
    </ul>
  </section>

  <section class="aca-section">
    <h2 class="aca-section-title">6. Concluzie</h2>
    <p class="aca-paragraph">
      AcA (Actor Awards Visualizer) oferă o platformă performantă și flexibilă pentru explorarea nominalizărilor la SAG Awards, completată cu date externe și știri relevante. Aplicația răspunde cerințelor moderne de interfață și funcționalitate, având o bază tehnică solidă și o arhitectură scalabilă.
    </p>
  </section>

    `;

	container.appendChild(documentation);
}
