import About from "../sections/About.js";
import Home from "../sections/Home.js";
import Contact from "../sections/Contact.js";

export const navItems = [
    {
        id: 1,
        name: "Home",
        icon: "home",
        callBack: Home
    },
    {
        id: 2,
        name: "About",
        icon: "about",
        callBack: About
    },
    {
        id: 3,
        name: "Contact",
        icon: "contact",
        callBack: Contact
    },

];