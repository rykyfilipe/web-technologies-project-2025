import {addCSS} from "../utils/style-functions.js";
import {navItems} from "../constants/index.js";
import NavItem from "../components/NavItem.js";
import Dashboard from "./Dashboard.js";

const Navbar = (container) => {
    const nav = document.createElement("nav");
    const logoInfo = {
        name: "ACA",
        icon: "ACA-logo",
        callBack: Dashboard
    };

    nav.classList.add("navbar");

    const logo = document.createElement("button");
    logo.classList.add("logo");
    logo.textContent = logoInfo.name;
    logo.addEventListener("click", () => {
        logoInfo.callBack(container);
    })

    nav.append(logo);

    navItems.forEach((navItem) => {
        NavItem(nav, navItem);
    });

    container.append(nav);

    addCSS("Navbar");
};

export default Navbar;
