/** @format */
import NavItem from "../components/NavItem.js";
import "../styles/Navbar.css";
import logo_src from "../assets/icons/logo.svg";

const Navbar = (container, navItems, logoInfo) => {
	// Creează butonul hamburger ÎNAINTEA navbar-ului
	const toggleBtn = document.createElement("button");
	toggleBtn.classList.add("hamburger");
	toggleBtn.innerHTML = "☰";
	container.append(toggleBtn);

	const nav = document.createElement("nav");
	nav.classList.add("navbar");

	// Creează logo
	const logo = document.createElement("button");
	logo.classList.add("logo");
	logo.textContent = logoInfo?.name;

	const img = document.createElement("img");
	img.src = logo_src;
	img.alt = logoInfo?.icon;
	logo.prepend(img);
	nav.append(logo);

	// Creează containerul pentru meniul de navigare
	const menu = document.createElement("div");
	menu.classList.add("nav-menu");

	const h2 = document.createElement("h2");
	h2.textContent = "MENU";
	menu.append(h2);

	// Adaugă itemii de navigare în meniu
	navItems?.forEach((navItem) => {
		NavItem(menu, navItem);
	});

	nav.append(menu);
	container.append(nav);

	// Toggle pentru afișare/ascundere meniu
	toggleBtn.addEventListener("click", () => {
		nav.classList.toggle("show"); // clasa .show controlează navbar-ul
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 800) {
			nav.classList.remove("show"); // Elimină .show dacă trece de 800px
		}
	});
};

export default Navbar;
