import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CardCarousel = ({ dataType }) => {
    const { store, actions } = useContext(Context);
    const dataToDisplay = store[dataType] || [];
    return (
        <div className="row d-flex flex-nowrap overflow-auto">
            {dataToDisplay.map((item, index) => (
                <div key={item.id} className="col contactList d-flex">
                    <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="buttonsCard d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-primary">Learn More</button>
                                <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
