/** @format */

import Actors from "../sections/Actors.js";
import Home from "../sections/Home.js";
import Movies from "../sections/Movies.js";
import dashboard from "../assets/icons/dashboard.svg";
import profile from "../assets/icons/profile.svg";
import movie from "../assets/icons/movie.svg";
import Dashboard from "../sections/Dashboard.js";

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
];
