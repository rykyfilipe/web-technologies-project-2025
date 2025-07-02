/** @format */

// import "../../styles/Documentation.css";

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
<!DOCTYPE html>
<html lang="ro" prefix="schema: http://schema.org/ bibo: http://purl.org/ontology/bibo/">

<body typeof="schema:TechArticle" resource="#doc" id="doc">
  <h1 property="schema:name">Specificatie a Cerintelor Software (SRS)</h1>
  <p property="schema:author">Autor: Eduard Ozarchevici, Bondor Ricardo Filipe</p>
  <p>Proiect: Aplicatie Web - Nominalizari filme, actori si voturi</p>

  
  <section id="intro" typeof="bibo:Chapter" resource="#intro" property="bibo:hasPart">
    <h1 roperty="schema:name">1. Introducere</h1>
    <p>Acest document descrie cerintele software pentru aplicatia web dedicata gestionarii nominalizarilor de filme si actori. Aplicatia permite utilizatorilor sa consulte informatii despre filme si actori, sa vizualizeze striri despre ei. Este compusa din doua componente: un frontend si un backend REST API.</p>
  </section>

  
  <section id="requirements" typeof="bibo:Chapter" resource="#requirements" property="bibo:hasPart">
    <h1 property="schema:name">2. Cerinte principale</h1>

    <section id="essential-functions" typeof="bibo:Section" resource="#essential-functions" property="bibo:hasPart">
      <h3 property="schema:name">2.1 Functionalitati esentiale</h3>
      <ul>
        <li>Autentificare si inregistrare utilizatori (JWT token).</li>
        <li>Vizualizare lista actori, filme si detalii individuale.</li>
        <li>Vizualizare nominalizari active.</li>
        <li>Adaugare/stergere filme, actori (doar pentru admin).</li>
      </ul>
    </section>

    <section id="user-interaction" typeof="bibo:Section" resource="#user-interaction" property="bibo:hasPart">
      <h3 property="schema:name">2.2 Interactiunea cu utilizatorul</h3>
      <p>Interfata utilizator ofera o experienta prietenoasa si responsive. Utilizatorul acceseaza aplicatia prin browser si are acces la un dashboard cu filmele, actorii nominalizati. Dupa autentificare, poate vizualiza informatii despre nominalizati, iar administratorii pot adauga informatii. </p>
    </section>
  </section>

  <section id="external-interfaces" typeof="bibo:Chapter" resource="#external-interfaces" property="bibo:hasPart">
    <h1 property="schema:name">3. Cerinte de interfatare externa</h1>

    <section id="ui-interface" typeof="bibo:Section" resource="#ui-interface" property="bibo:hasPart">
      <h3 property="schema:name">3.1 Interfata cu utilizatorul</h3>
      <p>Frontend-ul este realizat cu HTML, CSS si JavaScript, fiind livrat dintr-un server separat. Interactiunea se realizeaza prin apeluri fetch catre API-ul backend. Aplicatia este compatibila cu dispozitive mobile, urmand principiile de design responsive.</p>
    </section>

    <section id="software-interface" typeof="bibo:Section" resource="#software-interface" property="bibo:hasPart">
      <h3 property="schema:name">3.2 Interfata software (API)</h3>
      <p>API-ul este de tip REST si ofera urmatoarele endpoint-uri principale:</p>
      <ul>
        <li><code>POST /register-user</code> – inregistrare utilizator</li>
        <li><code>POST /login</code> – autentificare si obtinere JWT</li>
        <li><code>GET /movies?page={pageNo}</code> – lista filme</li>
        <li><code>GET /actors?page={pageNo}</code> – lista actori</li>
        <li><code>GET /nominies</code> – lista nominalizari</li>
        <li><code>GET /unique-actors</code> – lista tuturor actorilor</li>
        <li><code>GET /users</code> – lista users</li>
        <li><code>GET /news </code> lista striri</li>
        <li><code>POST /movies</code> – adaugare film (admin)</li>
        <li><code>POST /actors</code> – adaugare actor (admin)</li>
        <li><code>POST /users</code> – adaugare user (admin)</li>
        <li><code>DELETE /movies/{movie-id</code> – sterge film (admin)</li>
        <li><code>DELETE /actors/{actor-id}</code> – sterge actor (admin)</li>
        <li><code>DELETE /users/{user-id}</code> – stergere user (admin)</li>
      </ul>
      <p>API-ul returneaza date in format JSON si necesita autentificare prin token JWT pentru actiunile protejate.</p>
    </section>
  </section>

  <section id="nonfunctional" typeof="bibo:Chapter" resource="#nonfunctional" property="bibo:hasPart">
    <h1 property="schema:name">4. Cerinte non-functionale</h1>
    <ul>
      <li><strong>Securitate:</strong> Autentificare bazata pe JWT, protectie la SQL Injection (prepared statements), CORS configurat corect.Protectie XSS.</li>
    </ul>
  </section>

</body>
</html>

    `;

	container.appendChild(documentation);
}
