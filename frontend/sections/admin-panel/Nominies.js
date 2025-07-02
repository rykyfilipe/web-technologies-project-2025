import { getContainer } from "../../utils/components-functions.js";
import "../../styles/Admin.css";
import deletebutton from "../../assets/icons/delete-button.svg";

const userDataRaw = localStorage.getItem("w-user");
const userData = userDataRaw ? JSON.parse(userDataRaw) : null;

if (!userData) {
	console.error("User data not found in localStorage");
}

const authToken = userData?.token || "";
let page = 1;

const optionsBackend = {
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${authToken}`,
	},
};

const createHeaderRow = () => {
	const div = document.createElement("div");
	div.classList.add("head-row");

	// Coloane pentru nominalizari
	const id = document.createElement("div");
	id.classList.add("id");
	id.textContent = "ID";

	const year = document.createElement("div");
	year.classList.add("year");
	year.textContent = "Year";

	const category = document.createElement("div");
	category.classList.add("category");
	category.textContent = "Category";

	const won = document.createElement("div");
	won.classList.add("won");
	won.textContent = "Won";

	const actorId = document.createElement("div");
	actorId.classList.add("actor-id");
	actorId.textContent = "Actor ID";

	const movieId = document.createElement("div");
	movieId.classList.add("movie-id");
	movieId.textContent = "Movie ID";

	const action = document.createElement("div");
	action.classList.add("action");
	action.textContent = "Action";

	div.append(id, year, category, won, actorId, movieId, action);
	return div;
};

const loadData = async (p, section, table, op) => {
	if (op === "-" && page > 1) {
		page -= 1;
	} else if (op === "+") {
		page += 1;

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/raw-nominies?page=${page}`,
			optionsBackend
		);

		if (!response.ok) {
			page -= 1;
			return;
		}
	}

	if (!p) return;
	else p.textContent = page;

	const response = await fetch(
		`https://web-technologies-project-2025-production.up.railway.app/raw-nominies?page=${page}`,
		optionsBackend
	);

	const nominies = await response.json();
	table.innerHTML = "";
	table.append(createHeaderRow());

	nominies.forEach((nominie) => {
		const row = createNominieRow(nominie, section, table, p);
		table.append(row);
	});
};

const createNominieRow = (nominie, section, table, p) => {
	const div = document.createElement("div");
	div.classList.add("row");

	const id = document.createElement("div");
	id.classList.add("id");
	id.textContent = nominie.id;

	const year = document.createElement("div");
	year.classList.add("year");
	year.textContent = nominie.year;

	const category = document.createElement("div");
	category.classList.add("category");
	category.textContent = nominie.category;

	const won = document.createElement("div");
	won.classList.add("won");
	won.textContent = nominie.won ? "Yes" : "No";

	const actorId = document.createElement("div");
	actorId.classList.add("actor-id");
	actorId.textContent = nominie.actor_id || "N/A";

	const movieId = document.createElement("div");
	movieId.classList.add("movie-id");
	movieId.textContent = nominie.movie_id || "N/A";

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");

	const img = document.createElement("img");
	img.src = deletebutton;
	img.alt = "delete button";

	deleteButton.append(img);
	deleteButton.addEventListener("click", async () => {
		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/nominies/${nominie.id}`,
			{
				method: "DELETE",
				...optionsBackend,
			}
		);

		if (response.ok) {
			await loadData(p, section, table, "");
		}
	});

	div.append(id, year, category, won, actorId, movieId, deleteButton);
	return div;
};

const addNominie = (container) => {
	const wrapper = document.createElement("div");
	wrapper.classList.add("add-wrapper");

	const yearInput = document.createElement("input");
	yearInput.type = "number";
	yearInput.placeholder = "Year";
	yearInput.classList.add("input");

	const categoryInput = document.createElement("input");
	categoryInput.type = "text";
	categoryInput.placeholder = "Category";
	categoryInput.classList.add("input");

	const wonInput = document.createElement("select");
	wonInput.classList.add("input");
	const optionYes = document.createElement("option");
	optionYes.value = "1";
	optionYes.textContent = "Won";
	const optionNo = document.createElement("option");
	optionNo.value = "0";
	optionNo.textContent = "Not Won";
	wonInput.append(optionYes, optionNo);

	const actorIdInput = document.createElement("input");
	actorIdInput.type = "number";
	actorIdInput.placeholder = "Actor ID";
	actorIdInput.classList.add("input");

	const movieIdInput = document.createElement("input");
	movieIdInput.type = "number";
	movieIdInput.placeholder = "Movie ID";
	movieIdInput.classList.add("input");

	const addButton = document.createElement("button");
	addButton.textContent = "Add Nomination";
	addButton.classList.add("add-button");

	const cancelButton = document.createElement("button");
	cancelButton.textContent = "Cancel";
	cancelButton.classList.add("cancel-button");
	cancelButton.addEventListener("click", () => wrapper.remove());

	addButton.addEventListener("click", async () => {
		const newNominie = {
			year: parseInt(yearInput.value, 10),
			category: categoryInput.value.trim(),
			won: wonInput.value === "1",
			actor_id: parseInt(actorIdInput.value, 10),
			movie_id: parseInt(movieIdInput.value, 10),
		};

		if (
			!newNominie.year ||
			!newNominie.category ||
			isNaN(newNominie.actor_id) ||
			isNaN(newNominie.movie_id)
		) {
			alert("Please fill all fields correctly.");
			return;
		}

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/nominies`,
			{
				method: "POST",
				headers: {
					...optionsBackend.headers,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newNominie),
			}
		);

		if (response.ok) {
			alert("Nomination added successfully!");
			wrapper.remove();
			// Optional: reload data if you have a ref to section, table, p
		} else {
			alert("Failed to add nomination.");
		}
	});

	wrapper.append(
		yearInput,
		categoryInput,
		wonInput,
		actorIdInput,
		movieIdInput,
		cancelButton,
		addButton
	);
	container.append(wrapper);
};

async function NominiesPanel() {
	const navbar = document.querySelector(".navbar");
	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	const response = await fetch(
		`https://web-technologies-project-2025-production.up.railway.app/raw-nominies?page=${page}`,
		optionsBackend
	);
	const nominies = await response.json();

	const container = getContainer("dashboard");
	container.innerHTML = "";

	const section = document.createElement("div");
	section.id = "admin-panel";

	const headerWrapper = document.createElement("div");
	headerWrapper.classList.add("admin-header-wrapper");

	const title = document.createElement("h1");
	title.textContent = "Nominations";

	const addButton = document.createElement("button");
	addButton.textContent = "Add new nomination";
	addButton.classList.add("add-button");
	addButton.addEventListener("click", () => addNominie(section));

	headerWrapper.append(title, addButton);
	section.append(headerWrapper);

	const table = document.createElement("div");
	table.classList.add("table");
	table.append(createHeaderRow());
	nominies.forEach((nominie) => {
		const row = createNominieRow(nominie, section, table, null);
		table.append(row);
	});

	section.append(table);

	const p = document.createElement("p");
	p.textContent = page;

	const previousButton = document.createElement("button");
	previousButton.classList.add("table-button");
	previousButton.textContent = "<";
	previousButton.addEventListener("click", () =>
		loadData(p, section, table, "-")
	);

	const nextButton = document.createElement("button");
	nextButton.classList.add("table-button");
	nextButton.textContent = ">";
	nextButton.addEventListener("click", () => loadData(p, section, table, "+"));

	const buttonWrapper = document.createElement("div");
	buttonWrapper.classList.add("button-wrapper");
	buttonWrapper.append(previousButton, p, nextButton);

	section.prepend(buttonWrapper);
	container.append(section);
}

export default NominiesPanel;
