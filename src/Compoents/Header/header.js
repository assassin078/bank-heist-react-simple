import React, { useState } from "react";
import "./header.css";

const RenderBudget = (props) => {
    const { score, setScore, budget, setBudget } = props;

    const handleBudget = () => {
        setBudget(score);
    };

    if (budget < 100000) {
        return (
            <>
                <label>
                    Let us know your approx score of the next attack -{" "}
                    <input
                        value={score}
                        onChange={(e) => {
                            setScore(e.target.value);
                        }}
                        className="score"
                        type="number"
                        placeholder="give amount in $"
                    />
                </label>

                <input
                    onClick={handleBudget}
                    className="score-btn"
                    type="submit"
                    value="Submit"
                />

                {(score<100000 && score!='') ? <span>minimum amount 100,000 us dollar</span> : null}
            </>
        );
    } else {
        return <h2>Expected Score : {score} $$$</h2>;
    }
};

const Header = (props) => {
    const [score, setScore] = useState("");
    const { budget, setBudget } = props;

    return (
        <div className="header">
            <div className="wrapper">
                <h1>Welcome, To The Underground</h1>
                <p>
                    We provide elite crew members to help you accomplish your
                    Heist, Convoy, Cargo attack etc ...
                </p>

                <RenderBudget
                    score={score}
                    setScore={setScore}
                    budget={budget}
                    setBudget={setBudget}
                />
            </div>
        </div>
    );
};

export default Header;
