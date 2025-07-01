import Navbar from "./Navbar.js";
import NavItem from '../components/NavItem.js';
import Dashboard from "./Dashboard.js";
import "../styles/Login.css";
import "../styles/index.css";
import { Admin } from "./admin-panel/Admin.js";
import Login from "./Login.js";

const url_prefix =
	"https://web-technologies-project-2025-production.up.railway.app";

const RegisterUser = (container) => {
	container.innerHTML = " ";
	const registerForm = document.createElement("form");
	registerForm.classList.add("login-form");

	const title = document.createElement("h2");
	title.textContent = "Create Account";
	registerForm.appendChild(title);

	const usernameInput = document.createElement("input");
	usernameInput.type = "text";
	usernameInput.placeholder = "Username";
	usernameInput.name = "username";
	usernameInput.required = true;
	usernameInput.classList.add("form-input");
	registerForm.appendChild(usernameInput);

	const passwordInput = document.createElement("input");
	passwordInput.type = "password";
	passwordInput.placeholder = "Password";
	passwordInput.name = "password";
	passwordInput.required = true;
	passwordInput.classList.add("form-input");
	registerForm.appendChild(passwordInput);

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

	registerForm.appendChild(select);

	const submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.textContent = "Sign Up";
	submitButton.classList.add("form-button");
	registerForm.appendChild(submitButton);

	const loginLink = document.createElement("button");
	loginLink.textContent = "Already have an account?";
	loginLink.classList.add("form-a");
	loginLink.addEventListener("click", async function () {
		registerForm.remove();
		Login(container);
	});
	registerForm.appendChild(loginLink);

	registerForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;
		const role = select.value;

		const payload = {
			username: username,
			password: password,
			role: role,
		};

		console.log(payload);

		const response = await fetch(url_prefix + "/register-user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const serverData = await response.json();

		if (response.ok) {
			registerForm.remove();
			localStorage.setItem(
				"w-user",
				JSON.stringify({ token: serverData.token, role: serverData.role })
			);
			if (role === "user" || serverData.role === "user") {
				const logoInfo = {
					name: "Actor Awards Vizualizer",
					icon: "ACA-logo",
				};

				Navbar(container, navItems, logoInfo);
				Dashboard(container);
			} else {
				Admin(container);
			}
		} else {
			alert("Something incorect");
		}
	});
	container.append(registerForm);
};

export default RegisterUser;
