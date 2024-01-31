import React, { useContext } from "react";

import { CardCarousel } from "../component/CardCarousel";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="listHome mt-5">
			<div>Character:</div>
			<CardCarousel dataType="characters" />
			<div>Planets:</div>
			<CardCarousel dataType="planets" />
			<div>Vehicles:</div>
			<CardCarousel dataType="vehicles" />
		</div>
	);
};



