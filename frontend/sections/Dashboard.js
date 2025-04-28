import {addCSS} from "../utils/style-functions.js";

const Dashboard = (container) => {
    const section = document.createElement("section");
    section.classList.add("dashboard");
    section.id = "dashboard";
    section.innerText = "Dashboard";

    container.append(section);

    addCSS('Dashboard');
}

export default Dashboard;