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
	nav.append(toggleBtn);

	// Wrapper pentru meniul navigabil (ascuns pe mobil)
	const menu = document.createElement("div");
	menu.classList.add("nav-menu");

	const h2 = document.createElement("h2");
	h2.textContent = "MENU";
	menu.append(h2);

	navItems.forEach((navItem) => {
		NavItem(menu, navItem);
	});

	nav.append(menu);
	container.append(nav);

	// Toggle pentru afișare/ascundere meniu
	toggleBtn.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
};

export default Navbar;
