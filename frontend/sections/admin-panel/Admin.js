import { navAdminItems } from "../../constants/index.js";
import Navbar from "../Navbar.js";

export function Admin(container) {
	container.innerHTML = " ";
	const logoInfo = {
		name: "Admin Panel",
		icon: "panel",
	};
	Navbar(container, navAdminItems, logoInfo);

	if (!container) {
		console.error("Dashboard: container is null or undefined.");
		return;
	}

	const section = document.createElement("div");
	section.classList.add("dashboard");
	section.id = "dashboard";
	section.textContent = "Admin Panel";
	container.append(section);
}
