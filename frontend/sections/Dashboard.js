/** @format */

import { getContainer } from "../utils/components-functions.js";
import "../styles/Dashboard.css";
import Home from "./Home.js";

const Dashboard = async (container) => {
	if (!container) {
		console.error("Dashboard: container is null or undefined.");
		return;
	}

	const section = document.createElement("div");
	section.classList.add("dashboard");
	section.id = "dashboard";

	container.append(section);
	Home(section);
};

export default Dashboard;
