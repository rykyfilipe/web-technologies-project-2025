import { getContainer } from "../../utils/components-functions.js";

function MoviesPanel() {
	const container = getContainer("dashboard");
	container.innerHTML = " ";

	const section = document.createElement("div");
	section.textContent = "movies";

	container.append(section);
}

export default MoviesPanel;
