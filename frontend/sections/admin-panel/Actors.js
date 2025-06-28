import { getContainer } from "../../utils/components-functions.js";
import "../../styles/Admin.css";
import deletebutton from "../../assets/icons/delete-button.svg";

const actors = [
	{
		id: 0,
		name: "michel jakson",
	},
	{
		id: 2,
		name: "asdadad",
	},
];

function ActorsPanel() {
	const navbar = document.querySelector(".navbar");

	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	const container = getContainer("dashboard");
	container.innerHTML = " ";

	const section = document.createElement("div");
	section.id = "admin-panel";

	const headerWrapper = document.createElement("div");
	headerWrapper.classList.add("admin-header-wrapper");

	const title = document.createElement("h1");
	title.textContent = "Actors";

	headerWrapper.append(title);

	const addButton = document.createElement("button");
	addButton.textContent = "Add new actor";
	addButton.classList.add("add-button");

	headerWrapper.append(addButton);
	section.append(headerWrapper);

	const table = document.createElement("div");
	table.classList.add("table");

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

	div.append(id);
	div.append(name);
	div.append(action);

	table.append(div);

	actors.forEach((user) => {
		const div = document.createElement("div");
		div.classList.add("row");

		const id = document.createElement("div");
		id.classList.add("id");
		id.textContent = user.id;

		const name = document.createElement("div");
		name.classList.add("name");
		name.textContent = user.name;

		div.append(id);
		div.append(name);

		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");

		const img = document.createElement("img");
		img.src = deletebutton;
		img.alt = "delete button";

		deleteButton.append(img);
		div.append(deleteButton);

		table.append(div);
	});
	section.append(table);
	container.append(section);
}

export default ActorsPanel;
