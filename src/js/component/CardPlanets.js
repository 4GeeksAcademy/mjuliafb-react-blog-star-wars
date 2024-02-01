import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import defaultPicture from "../../img/picture-not-available.jpeg";

export const CardPlanets = ({ uid, name }) => {
    const { actions } = useContext(Context);
    const [planetDetails, setPlanetDetails] = useState(null);

    useEffect(() => {
        const storedPlanetDetails = localStorage.getItem(`planet-${uid}`);
        if (storedPlanetDetails) {
            setPlanetDetails(JSON.parse(storedPlanetDetails));
        } else {
            actions.loadDetailsPlanets(uid);
        }
    }, [uid]);

    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultPicture;
                    }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {planetDetails && planetDetails.result && (
                        <div>
                            <p className="card-text"> Terrain: {planetDetails.result.properties.terrain} </p>
                            <p className="card-text"> Population: {planetDetails.result.properties.population}</p>
                            <p className="card-text">Climate: {planetDetails.result.properties.climate} </p>
                        </div>
                    )}
                    <div className="buttonsCard d-flex justify-content-between">
                        <Link to={`/details/${uid}`} className="btn btn-outline-primary">Learn More</Link>
                        <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};