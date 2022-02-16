import React, { useState } from "react";
import Main from "../Main/main";
import Header from "../Header/header";
import "./body.css";

const Body = (props) => {
    const [budget, setBudget] = useState(0);
    return (
        <div>
            <Header budget={budget} setBudget={setBudget} />
            {/* Render Main if minimum specifications met */}
            {budget > 99999 && <Main budget={budget} />}
        </div>
    );
};

export default Body;
