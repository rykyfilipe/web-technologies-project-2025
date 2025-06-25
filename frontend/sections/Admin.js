import Login from "./Login.js";

export function Admin(container) {
	container.innerHTML = " ";

	container.textContent = "ADMIN";

	const loginButton = document.createElement("button");
	loginButton.textContent = "Login";
	loginButton.classList.add("admin-button");
	loginButton.addEventListener("click", () => {
		Login(container);
	});

	container.append(loginButton);
}
