import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card";

export const CardCarousel = ({ dataType }) => {
    const { store, actions } = useContext(Context);
    const dataToDisplay = store[dataType] || [];
    return (
        <div className="row d-flex flex-nowrap overflow-auto">
            {dataToDisplay.map((item, index) => (
                <Card key={item.uid} uid={item.uid} name={item.name} />
            ))}
        </div>
    );
};
