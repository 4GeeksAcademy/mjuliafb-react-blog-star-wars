import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const favoriteCount = store.favorites.length || "0";

	return (
		<nav className="navbar navbar-light bg-light p-3">
			<Link to="/">
				<span className="navbar-brand h1"><i className="fa-brands fa-jedi-order fa-beat"></i></span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="favoriteCounter bg-dark text-white">{favoriteCount}</span>
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};

