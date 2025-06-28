import Navbar from "./Navbar.js";
import Dashboard from "./Dashboard.js";
import "../styles/Login.css";
import "../styles/index.css";
import RegisterUser from "./RegisterUser.js";
import { Admin } from "./admin-panel/Admin.js";

const url_prefix =
	"https://web-technologies-project-2025-production.up.railway.app";

const Login = (container) => {
	container.innerHTML = " ";

	const loginForm = document.createElement("form");
	loginForm.classList.add("login-form");

	const adminButton = document.createElement("button");
	adminButton.textContent = "Admin";
	adminButton.classList.add("admin-button");
	adminButton.addEventListener("click", () => {
		loginForm.remove();
		adminButton.remove();
		Admin(container);
	});

	container.append(adminButton);

	const title = document.createElement("h2");
	title.textContent = "Login";
	loginForm.appendChild(title);

	const usernameInput = document.createElement("input");
	usernameInput.type = "text";
	usernameInput.placeholder = "Username";
	usernameInput.name = "username";
	usernameInput.required = true;
	usernameInput.classList.add("form-input");
	loginForm.appendChild(usernameInput);

	const passwordInput = document.createElement("input");
	passwordInput.type = "password";
	passwordInput.placeholder = "Password";
	passwordInput.name = "password";
	passwordInput.required = true;
	passwordInput.classList.add("form-input");
	loginForm.appendChild(passwordInput);

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

	loginForm.appendChild(select);

	const submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.textContent = "Login";
	submitButton.classList.add("form-button");
	loginForm.appendChild(submitButton);

	const registerLink = document.createElement("button");
	registerLink.textContent = "Create new account?";
	registerLink.classList.add("form-a");
	registerLink.addEventListener("click", async function () {
		RegisterUser(container);
	});

	loginForm.appendChild(registerLink);

	loginForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;
		const role = select.value;

		const payload = {
			username: username,
			password: password,
			role: role,
		};
		print(payload)

		const response = await fetch(url_prefix + "/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const serverData = await response.json();

		if (response.ok) {
			loginForm.remove();
			adminButton.remove();
			localStorage.setItem(
				"w-user",
				JSON.stringify({ token: serverData.token })
			);

			Navbar(container);
			Dashboard(container);
		} else {
			alert("Something incorect");
		}
	});

	container.append(loginForm);
};

export default Login;
