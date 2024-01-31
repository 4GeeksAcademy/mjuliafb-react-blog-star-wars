import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const LearnMore = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {

    }, [id]);

    return (
        <div className="listHome mt-5">
            <div><img></img></div>
            <div><h1>Nombre</h1><p></p></div>
            <hr></hr>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};