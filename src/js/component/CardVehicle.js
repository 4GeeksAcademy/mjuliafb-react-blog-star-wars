import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicle = ({ uid, name }) => {
    const { actions } = useContext(Context);
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        const storedVehicleDetails = localStorage.getItem(`vehicle-${uid}`);
        if (storedVehicleDetails) {
            setVehicleDetails(JSON.parse(storedVehicleDetails));
        } else {
            actions.loadDetailsVehicles(uid);
        }
    }, [uid]);

    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {vehicleDetails && vehicleDetails.result && (
                        <div>
                            <p className="card-text"> Crew: {vehicleDetails.result.properties.crew} </p>
                            <p className="card-text"> Model: {vehicleDetails.result.properties.model}</p>
                            <p className="card-text"> Passengers: {vehicleDetails.result.properties.passengers} </p>
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