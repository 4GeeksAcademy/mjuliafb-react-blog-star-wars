import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardCharacters = ({ uid, name, dataType }) => {
    const { store, actions } = useContext(Context);
    const [charactersDetails, setCharactersDetails] = useState(null);

    useEffect(() => {
        const storedCharactersDetails = localStorage.getItem(`characters-${uid}`);
        if (storedCharactersDetails) {
            setCharactersDetails(JSON.parse(storedCharactersDetails));
        } else {
            actions.loadDetailsCharacters(uid);
        }
    }, [uid]);

    const handleFavorites = () => {
        actions.addFavorites(name);
    }

    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {charactersDetails && charactersDetails.result && (
                        <div>
                            <p className="card-text"> Birthday: {charactersDetails.result.properties.birth_year} </p>
                            <p className="card-text"> Hair color: {charactersDetails.result.properties.hair_color}</p>
                            <p className="card-text"> Height: {charactersDetails.result.properties.height} </p>
                        </div>
                    )}
                    <div className="buttonsCard d-flex justify-content-between">
                        <Link to={`/details/${dataType}/${uid}`} className="btn btn-outline-primary">Learn More</Link>
                        <button onClick={handleFavorites} type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};