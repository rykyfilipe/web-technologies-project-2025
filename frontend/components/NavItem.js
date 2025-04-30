import {getContainer} from "../utils/components-functions.js";

const NavItem = (container, navItemInfo) => {

    const item = document.createElement("button");
    item.classList.add("nav-item");
    item.innerText = navItemInfo.name;

    const img = document.createElement("img");
    img.src = navItemInfo.icon;
    item.prepend(img);

    item.addEventListener("click", (e) => {
        e.preventDefault();

        const dashboard = getContainer('dashboard');
        navItemInfo.callBack(dashboard);
    })

    container.append(item);
}

export default NavItem;
