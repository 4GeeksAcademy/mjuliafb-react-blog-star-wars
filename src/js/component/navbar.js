import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logoStarWars from "../../img/star-wars-logo.png.png"


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const favoriteCount = store.favorites.length || 0;
	const favorites = store.favorites;
	console.log(favorites)

	return (
		<nav className="navbar navbar-light bg-light p-3">
			<Link to="/">
				<span className="navbar-brand h1"> <img src={logoStarWars}></img></span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="favoriteCounter bg-dark text-white">{favoriteCount}</span>
				</button>
				<ul className="dropdown-menu">
					{favorites.map((favorite, index) => (
						<li key={index}><a className="dropdown-item" href="#">{favorite}</a><i className="fa-solid fa-trash-can"></i></li>
					))}
				</ul>
			</div>
		</nav>
	);
};

