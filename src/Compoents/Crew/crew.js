import React from "react";
import "./crew.css";

const Crew = (props) => {
    const { crew, budget } = props;
    const totalCut = crew.reduce(
        (prevTotal, profile) => prevTotal + budget * (profile.cut / 100),
        0
    );
    console.log(crew);
    return (
        <div>
            <h2>Your Crew</h2>
            <p>Approx Score : {budget} $</p>
            <p>Total Members : {crew.length}</p>
            <p>Crew Cut : {parseInt(totalCut)} $</p>
            <button className="build-crew-btn">Build Crew</button>
        </div>
    );
};

export default Crew;
