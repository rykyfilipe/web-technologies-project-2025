/** @format */

import Navbar from "./sections/Navbar.js";
import { getContainer } from "./utils/components-functions.js";
import Dashboard from "./sections/Dashboard.js";
import Login from "./sections/Login.js";
import "./styles/index.css";
import { navItems } from "./constants/index.js";
import { Admin } from "./sections/admin-panel/Admin.js";

document.addEventListener("DOMContentLoaded", () => {
	const container = getContainer("root");
	const rawData = localStorage.getItem("w-user");
	const user = JSON.parse(rawData);

	if (user) {
		if (user.role === "admin") {
			Admin(container);
		} else {
			const logoInfo = {
				name: "Actor Awards Vizualizer",
				icon: "ACA-logo",
			};

			Navbar(container, navItems, logoInfo);
			Dashboard(container);
		}
	} else Login(container);
});
