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

	const username = document.createElement("div");
	username.classList.add("username");
	username.textContent = "USERNAME";

	const role = document.createElement("div");
	role.classList.add("role");
	role.textContent = "ROLE";

	const action = document.createElement("div");
	action.classList.add("action");
	action.textContent = "ACTION";

	div.append(id, username, role, action);
	return div;
};

const createUserRow = (user, section, table, p) => {
	const div = document.createElement("div");
	div.classList.add("row");

	const id = document.createElement("div");
	id.classList.add("id");
	id.textContent = user.id;

	const username = document.createElement("div");
	username.classList.add("username");
	username.textContent = user.username;

	const role = document.createElement("div");
	role.classList.add("role");
	role.textContent = user.role;

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");

	const img = document.createElement("img");
	img.src = deletebutton;
	img.alt = "delete button";

	deleteButton.append(img);
	deleteButton.addEventListener("click", async () => {
		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/users/${user.id}`,
			{
				method: "DELETE",
				...optionsBackend,
			}
		);

		if (response.ok) {
			await loadData(p, section, table, "");
		} else {
			alert("Failed to delete user.");
		}
	});

	div.append(id, username, role, deleteButton);
	return div;
};

const loadData = async (p, section, table, op) => {
	if (op === "-" && page > 1) {
		page -= 1;
	} else if (op === "+") {
		page += 1;

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/users?page=${page}`,
			optionsBackend
		);

		if (!response.ok) {
			page -= 1;
			return;
		}
	}
	if (p) p.textContent = page;

	const response = await fetch(
		`https://web-technologies-project-2025-production.up.railway.app/users?page=${page}`,
		optionsBackend
	);

	const users = await response.json();
	table.innerHTML = " ";
	table.append(createHeaderRow());

	users.forEach((user) => {
		const row = createUserRow(user, section, table, p);
		table.append(row);
	});
};

const addUser = (container, p, section, table) => {
	const wrapper = document.createElement("div");
	wrapper.classList.add("add-actor-wrapper");

	const usernameInput = document.createElement("input");
	usernameInput.type = "text";
	usernameInput.placeholder = "Username";
	usernameInput.classList.add("actor-input");

	const passwordInput = document.createElement("input");
	passwordInput.type = "password";
	passwordInput.placeholder = "Password";
	passwordInput.classList.add("actor-input");

	const select = document.createElement("select");
	select.classList.add("role-select");

	// Creează opțiunea "user"
	const optionUser = document.createElement("option");
	optionUser.value = "user";
	optionUser.textContent = "User";
	select.appendChild(optionUser);

	// Creează opțiunea "admin"
	const optionAdmin = document.createElement("option");
	optionAdmin.value = "admin";
	optionAdmin.textContent = "Admin";
	select.appendChild(optionAdmin);

	const button = document.createElement("button");
	button.textContent = "Add User";
	button.classList.add("add-actor-button");

	const cancelButton = document.createElement("button");
	cancelButton.textContent = "Cancel";
	cancelButton.classList.add("cancel-button");
	cancelButton.addEventListener("click", () => wrapper.remove());

	button.addEventListener("click", async () => {
		const username = usernameInput.value.trim();
		const password = passwordInput.value.trim();
		const role = select.value.trim();

		if (username === "" || password === "" || role === "") {
			alert("Please fill in all fields.");
			return;
		}

		const response = await fetch(
			`https://web-technologies-project-2025-production.up.railway.app/users`,
			{
				method: "POST",
				headers: {
					...optionsBackend.headers,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password, role }),
			}
		);

		if (response.ok) {
			alert("User added successfully!");
			wrapper.remove();
			await loadData(p, section, table, "");
		} else {
			alert("Failed to add user.");
		}
	});

	wrapper.append(usernameInput, passwordInput, select, cancelButton, button);
	container.append(wrapper);
};

async function UsersPanel() {
	const navbar = document.querySelector(".navbar");
	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	const response = await fetch(
		`https://web-technologies-project-2025-production.up.railway.app/users?page=${page}`,
		optionsBackend
	);
	const users = await response.json();

	const container = getContainer("dashboard");
	container.innerHTML = " ";

	const section = document.createElement("div");
	section.id = "admin-panel";

	const headerWrapper = document.createElement("div");
	headerWrapper.classList.add("admin-header-wrapper");

	const title = document.createElement("h1");
	title.textContent = "Users";

	const p = document.createElement("p");
	p.textContent = page;

	const table = document.createElement("div");
	table.classList.add("table");
	table.append(createHeaderRow());

	users.forEach((user) => {
		const row = createUserRow(user, section, table, p);
		table.append(row);
	});

	const addButton = document.createElement("button");
	addButton.textContent = "Add new user";
	addButton.classList.add("add-button");
	addButton.addEventListener("click", () =>
		addUser(section, p, section, table)
	);

	headerWrapper.append(title, addButton);
	section.append(headerWrapper);

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

export default UsersPanel;
