/** @format */

import { navItems } from "../constants/index.js";
import NavItem from "../components/NavItem.js";
import "../styles/Navbar.css";
import logo_src from "../assets/icons/logo.svg";

const Navbar = (container) => {
	const nav = document.createElement("nav");
	nav.classList.add("navbar");

	const logoInfo = {
		name: "Actor Awards Vizualizer",
		icon: "ACA-logo",
	};

	// Creează logo
	const logo = document.createElement("button");
	logo.classList.add("logo");
	logo.textContent = logoInfo.name;

	const img = document.createElement("img");
	img.src = logo_src;
	logo.prepend(img);
	nav.append(logo);

	// Creează butonul hamburger
	const toggleBtn = document.createElement("button");
	toggleBtn.classList.add("hamburger");
	toggleBtn.innerHTML = "☰";
	container.append(toggleBtn);

	navItems.forEach((navItem) => {
		NavItem(nav, navItem);
	});

	nav.append(menu);
	container.append(nav);

	// Toggle pentru afișare/ascundere meniu
	toggleBtn.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
};

export default Navbar;
