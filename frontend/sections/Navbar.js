import {navItems} from "../constants/index.js";
import NavItem from "../components/NavItem.js";
import Dashboard from "./Dashboard.js";
import "../styles/Navbar.css"
import logo_src from "../assets/icons/logo.svg";

const Navbar = (container) => {
    const nav = document.createElement("nav");
    const logoInfo = {
        name: "Actor Awards Vizualizer",
        icon: "ACA-logo",
        callBack: Dashboard
    };
    nav.style.minWidth = "200px";
    nav.style.minHeight = "300px";

    nav.classList.add("navbar");


    const logo = document.createElement("button");
    logo.classList.add("logo");
    logo.textContent = logoInfo.name;
    logo.addEventListener("click", () => {
        logoInfo.callBack(container);
    })

    nav.append(logo);

    const img = document.createElement("img");
    img.src = logo_src;
    logo.prepend(img);

    const h2 = document.createElement("h2");
    h2.textContent = "MENU";
    nav.append(h2);

    navItems.forEach((navItem) => {
        NavItem(nav, navItem);
    });


    container.append(nav);
};

export default Navbar;
