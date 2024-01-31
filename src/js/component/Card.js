import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ uid, name }) => {
    const { actions } = useContext(Context);

    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> Some</p>
                    <p className="card-text"> Some </p>
                    <p className="card-text">Some </p>
                    <div className="buttonsCard d-flex justify-content-between">
                        <Link to={`/details/${uid}`} className="btn btn-outline-primary">Learn More</Link>
                        <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
