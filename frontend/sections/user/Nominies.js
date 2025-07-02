/** @format */

import "../../styles/Nominies.css";
import {
	showErrorState,
	showLoadingState,
	removeLoadingState,
} from "../../components/utils.js";

const loadData = async (id, tries = 0, maxTries = 5) => {
	try {
		const userDataRaw = localStorage.getItem("w-user");
		const userData = JSON.parse(userDataRaw);
		const authToken = userData?.token;

		if (!authToken) {
			console.log("Nu exista access token");
			return null;
		}

		const URL = `https://web-technologies-project-2025-production.up.railway.app`;

		const response = await fetch(`${URL}/nominies?id=${id}`, {
			headers: { Authorization: `Bearer ${authToken}` },
		});

		if (!response.ok) {
			if (tries < maxTries) {
				console.warn(`Nominie id=${id} nu găsit, încerc cu id=${id + 1}`);
				return await loadData(id + 1, tries + 1, maxTries);
			} else {
				throw new Error(
					`HTTP error! status: ${response.status}, după ${maxTries} încercări`
				);
			}
		}

		const data = await response.json();

		if (typeof data !== "object" || data === null) {
			throw new Error("Invalid data format: expected object");
		}

		return data;
	} catch (error) {
		console.error("Error fetching nomination data:", error);
		return null;
	}
};

export default async function Nominations(container) {
	const navbar = document.querySelector(".navbar");
	if (navbar.classList.contains("show")) navbar.classList.remove("show");

	container.innerHTML = "";

	const sliderWrapper = document.createElement("div");
	sliderWrapper.className = "slider-wrapper";

	const prevBtn = document.createElement("button");
	prevBtn.className = "slider-btn prev-btn";
	prevBtn.innerText = "Previous";

	const nextBtn = document.createElement("button");
	nextBtn.className = "slider-btn next-btn";
	nextBtn.innerText = "Next";

	const slider = document.createElement("div");
	slider.className = "slider";

	container.appendChild(prevBtn);
	container.appendChild(sliderWrapper);
	container.appendChild(nextBtn);

	sliderWrapper.appendChild(slider);

	let currentId = 1;

	const loadNomination = async (id) => {
		slider.innerHTML = "";
		showLoadingState(sliderWrapper);

		const nomination = await loadData(id);
		removeLoadingState();

		if (!nomination) {
			showErrorState(sliderWrapper, "Failed to load nomination");
			return;
		}

		const card = document.createElement("div");
		card.className = "nomination-card";
		card.innerHTML = `
			<h3>${nomination.title || "Unknown Movie"}</h3>
			<p><strong>Year:</strong> ${nomination.year}</p>
			<p><strong>Category:</strong> ${nomination.category}</p>
			<p><strong>Actor:</strong> ${nomination.actor_name || "N/A"}</p>
			<p><strong>Won:</strong> ${nomination.won ? "Yes" : "No"}</p>
		`;
		slider.appendChild(card);
	};

	loadNomination(currentId);

	prevBtn.addEventListener("click", () => {
		if (currentId > 1) {
			currentId--;
			loadNomination(currentId);
		}
	});

	nextBtn.addEventListener("click", () => {
		currentId++;
		loadNomination(currentId);
	});
}
