import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const literals = {
    climate: "clima"
}

export const Card = ({ uid, name }) => {
    const { actions } = useContext(Context);
    const [planetDetails, setPlanetDetails] = useState(null);


    useEffect(() => {
        const fetchPlanetDetails = async () => {
            try {
                const details = await actions.loadDetailsPlanets(uid);
                setPlanetDetails(details);
                console.log(details);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
        };

        fetchPlanetDetails();
    }, [uid, actions]);

    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> {literals["climate"]} {planetDetails?.climate}</p>
                    <p className="card-text"> {planetDetails?.population}</p>
                    <p className="card-text"> {planetDetails?.diameter}</p>
                    <div className="buttonsCard d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-primary">Learn More</button>
                        <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
