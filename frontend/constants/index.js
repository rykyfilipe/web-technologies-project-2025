/** @format */

import Actors from "../sections/Actors.js";
import Home from "../sections/Home.js";
import Movies from "../sections/Movies.js";
import News from "../sections/News.js";
import dashboard from "../assets/icons/dashboard.svg";
import profile from "../assets/icons/profile.svg";
import movie from "../assets/icons/movie.svg";
import news from "../assets/icons/news.svg";
import Dashboard from "../sections/Dashboard.js";
import { getContainer } from "../utils/components-functions.js";

export const navItems = [
	{
		id: 1,
		name: "Dashboard",
		icon: dashboard,
		callBack: Home,
	},
	{
		id: 2,
		name: "Actors",
		icon: profile,
		callBack: Actors,
	},
	{
		id: 3,
		name: "Movies",
		icon: movie,
		callBack: Movies,
	},
	{
		id: 4,
		name: "News",

		callBack: News,
	},
	{
		id: 5,
		name: "Logout",

		callBack: () => {
			localStorage.removeItem("w-user");
			const container = getContainer("root");
			container.innerHTML = " ";
			Login(container);
		},
	},
];
