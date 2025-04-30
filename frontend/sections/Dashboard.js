import {getContainer} from "../utils/components-functions.js";
import "../styles/Dashboard.css"

const Dashboard = (container) => {
    if (!container) {
        console.error('Dashboard: container is null or undefined.');
        return;
    }

    const existing = getContainer('dashboard');
    if (existing) {
        existing.remove();
    }

    const section = document.createElement("section");
    section.classList.add("dashboard");
    section.id = "dashboard";
    section.textContent = "Dashboard";
    section.style.minHeight = "300px";

    container.append(section);
};

export default Dashboard;
