/** @format */

import Navbar from "./sections/Navbar.js";
import { getContainer } from "./utils/components-functions.js";
import Dashboard from "./sections/Dashboard.js";
import Login from "./sections/Login.js";
import "./styles/index.css";

document.addEventListener("DOMContentLoaded", () => {
	const container = getContainer("root");
	const user = localStorage.getItem("w-user");

	if (user) {
		Navbar(container);
		Dashboard(container);
	} else Login(container);
});
