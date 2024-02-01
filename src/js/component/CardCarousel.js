import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanets } from "./CardPlanets";
import { CardVehicle } from "./CardVehicle";
import { CardCharacters } from "./CardCharacters";

export const CardCarousel = ({ dataType }) => {
    const { store, actions } = useContext(Context);
    const dataToDisplay = store[dataType] || [];

    const CardComponent = dataType === "characters"
        ? CardCharacters
        : dataType === "vehicles"
            ? CardVehicle
            : dataType === "planets"
                ? CardPlanets
                : null;

    return (
        <div className="row d-flex flex-nowrap overflow-auto">
            {dataToDisplay.map((item, index) => (
                <CardComponent key={item.uid} uid={item.uid} name={item.name} />
            ))}
        </div>
    );
};

