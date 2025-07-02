/** @format */

import Actors from "../sections/user/Actors.js";
import Home from "../sections/user/Home.js";
import Movies from "../sections/user/Movies.js";
import News from "../sections/user/News.js";
import Documentation from "../sections/user/Documentation.js";
import dashboard from "../assets/icons/dashboard.svg";
import profile from "../assets/icons/profile.svg";
import movie from "../assets/icons/movie.svg";
import news from "../assets/icons/news.svg";
import exit from "../assets/icons/exit.svg";
import doc from "../assets/icons/doc.svg";
import users from "../assets/icons/users.svg";

import Login from "../sections/Login.js";
import { getContainer } from "../utils/components-functions.js";
import ActorsPanel from "../sections/admin-panel/Actors.js";
import UsersPanel from "../sections/admin-panel/Users.js";
import MoviesPanel from "../sections/admin-panel/Movies.js";
import NewsPanel from "../sections/admin-panel/News.js";

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
		icon: news,
		callBack: News,
	},
	{
		id: 6,
		name: "Documentation",
		icon: doc,
		callBack: Documentation,
		// callBack: () => {
		// 	window.location.href = '../../src.html';
		// }
	},
	{
		id: 5,
		name: "Logout",
		icon: exit,
		callBack: () => {
			localStorage.removeItem("w-user");
			const container = getContainer("root");
			container.innerHTML = " ";

			Login(container);
		},
	},
];

export const navAdminItems = [
	{
		id: 1,
		name: "Users",
		icon: users,
		callBack: UsersPanel,
	},
	{
		id: 2,
		name: "Actors",
		icon: profile,
		callBack: ActorsPanel,
	},
	{
		id: 3,
		name: "Movies",
		icon: movie,
		callBack: MoviesPanel,
	},
	{
		id: 4,
		name: "News",
		icon: news,
		callBack: NewsPanel,
	},

	{
		id: 5,
		name: "Logout",
		icon: exit,
		callBack: () => {
			localStorage.removeItem("w-user");
			const container = getContainer("root");
			container.innerHTML = " ";

			Login(container);
		},
	},
];
