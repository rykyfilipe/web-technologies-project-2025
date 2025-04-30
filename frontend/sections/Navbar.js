import {navItems} from "../constants/index.js";
import NavItem from "../components/NavItem.js";
import Dashboard from "./Dashboard.js";
import "../styles/Navbar.css"

const Navbar = (container) => {
    const nav = document.createElement("nav");
    const logoInfo = {
        name: "ACA",
        icon: "ACA-logo",
        callBack: Dashboard
    };
    nav.style.minWidth = "200px";
    nav.style.minHeight = "300px";

    nav.classList.add("navbar");
    // nav.classList.add("hidden");


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
};

export default Navbar;
