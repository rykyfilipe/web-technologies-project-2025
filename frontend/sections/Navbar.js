import {addCSS} from "../utils/style-functions.js";
import {navItems} from "../constants/index.js";
import NavItem from "../components/NavItem.js";

const Navbar = (container) => {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");

    navItems.forEach((navItem) => {
        NavItem(nav, navItem);
    });

    container.append(nav);

    addCSS("Navbar");
};

export default Navbar;
