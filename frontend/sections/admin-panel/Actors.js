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

	const id = document.createElement("div");
	id.classList.add("id");
	id.textContent = "ID";

	const name = document.createElement("div");
	name.classList.add("name");
	name.textContent = "NAME";

	const action = document.createElement("div");
	action.classList.add("action");
	action.textContent = "ACTION";

	div.append(id, name, action);
	return div;
};

const createActorRow = (user, section, table, p) => {
	const div = document.createElement("div");
	div.classList.add("row");

	const id = document.createElement("div");
	id.classList.add("id");
	id.textContent = user.id;

	const name = document.createElement("div");
	name.classList.add("name");
	name.textContent = user.name;

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");

	const img = document.createElement("img");
	img.src = deletebutton;
	img.alt = "delete button";

	deleteButton.append(img);
	deleteButton.addEventListener("click", async () => {
		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/actors/${user.id}`,
			{
				method: "DELETE",
				...optionsBackend,
			}
		);

		if (response.ok) {
			await loadData(p, section, table, "");
		} else {
			alert("Failed to delete actor.");
		}
	});

	div.append(id, name, deleteButton);
	return div;
};

const loadData = async (p, section, table, op) => {
	if (op === "-" && page > 1) {
		page -= 1;
	} else if (op === "+") {
		page += 1;

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/actors?page=${page}`,
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
		`https://web-technologies-project-2025-production.up.railway.app/actors?page=${page}`,
		optionsBackend
	);

	const actors = await response.json();
	table.innerHTML = " ";
	table.append(createHeaderRow());

	actors.forEach((user) => {
		const row = createActorRow(user, section, table, p);
		table.append(row);
	});
};

const addActor = (container, p, section, table) => {
	const wrapper = document.createElement("div");
	wrapper.classList.add("add-actor-wrapper");

	const input = document.createElement("input");
	input.type = "text";
	input.placeholder = "Actor name";
	input.classList.add("actor-input");

	const button = document.createElement("button");
	button.textContent = "Add Actor";
	button.classList.add("add-actor-button");

	const cancelButton = document.createElement("button");
	cancelButton.textContent = "Cancel";
	cancelButton.classList.add("cancel-button");
	cancelButton.addEventListener("click", () => wrapper.remove());

	button.addEventListener("click", async () => {
		const actorName = input.value.trim();
		if (actorName === "") {
			alert("Please enter a name.");
			return;
		}

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/actors`,
			{
				method: "POST",
				headers: {
					...optionsBackend.headers,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: actorName }),
			}
		);

		if (response.ok) {
			alert("Actor added successfully!");
			wrapper.remove();
			await loadData(p, section, table, "");
		} else {
			alert("Failed to add actor.");
		}
	});

	wrapper.append(input, cancelButton, button);
	container.append(wrapper);
};

async function ActorsPanel() {
	const navbar = document.querySelector(".navbar");
	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	const response = await fetch(
		`https://web-technologies-project-2025-production.up.railway.app/actors?page=${page}`,
		optionsBackend
	);
	const actors = await response.json();

	const container = getContainer("dashboard");
	container.innerHTML = " ";

	const section = document.createElement("div");
	section.id = "admin-panel";

	const headerWrapper = document.createElement("div");
	headerWrapper.classList.add("admin-header-wrapper");

	const title = document.createElement("h1");
	title.textContent = "Actors";

	const p = document.createElement("p");
	p.textContent = page;

	const addButton = document.createElement("button");
	addButton.textContent = "Add new actor";
	addButton.classList.add("add-button");
	addButton.addEventListener("click", () =>
		addActor(section, p, section, table)
	);

	headerWrapper.append(title, addButton);
	section.append(headerWrapper);

	const table = document.createElement("div");
	table.classList.add("table");
	table.append(createHeaderRow());

	actors.forEach((user) => {
		const row = createActorRow(user, section, table, p);
		table.append(row);
	});

	section.append(table);

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

export default ActorsPanel;
