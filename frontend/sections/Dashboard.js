import {addCSS} from "../utils/style-functions.js";
import {getContainer} from "../utils/components-functions.js";

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

    container.append(section);

    addCSS('Dashboard');
};

export default Dashboard;
