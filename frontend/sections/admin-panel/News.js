import { getContainer } from "../../utils/components-functions.js";

function NewsPanel() {
	const container = getContainer("dashboard");
	container.innerHTML = " ";

	const section = document.createElement("div");
	section.textContent = "news";

	container.append(section);
}

export default NewsPanel;
