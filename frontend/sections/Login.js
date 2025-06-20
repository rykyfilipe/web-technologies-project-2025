import Navbar from "./Navbar.js";
import Dashboard from "./Dashboard.js";
import "../styles/Login.css";
import "../styles/index.css";
import RegisterUser from "./RegisterUser.js";

const url_prefix =
	"https://web-technologies-project-2025-production.up.railway.app";

const Login = (container) => {
	console.log("FUNCTIA LOGIN SE APLELEAZA");

	const loginForm = document.createElement("form");
	loginForm.classList.add("login-form");

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

	const submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.textContent = "Login";
	submitButton.classList.add("form-button");
	loginForm.appendChild(submitButton);

	const registerLink = document.createElement("a");
	registerLink.textContent = "Already have an account?";
	registerLink.classList.add("form-a");
	registerLink.addEventListener("click", async function () {
		loginForm.remove();
		RegisterUser(container);
	});

	loginForm.appendChild(registerLink);

	loginForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;

		const payload = {
			username: username,
			password: password,
		};

		const response = await fetch(url_prefix + "/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const serverData = await response.json();

		if (response.ok) {
			loginForm.remove();

			Navbar(container);
			Dashboard(container);
		} else {
			alert("Something incorect");
		}
	});

	container.append(loginForm);
};

export default Login;
