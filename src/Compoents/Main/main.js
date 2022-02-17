import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getItemFromStorage } from "../../Utilities/configureStorage";
import Crew from "../Crew/crew";
import Profile from "../Profile/profile";
import "./main.css";

const hash = <FontAwesomeIcon icon={faHashtag} />;

const Main = (props) => {
    const { budget } = props;
    const [profiles, setProfiles] = useState([]);
    const [crew, setCrew] = useState([]);

    // fetch data
    useEffect(() => {
        fetch("./profiles.JSON")
            .then((res) => res.json())
            .then((data) => setProfiles(data));
    }, []);

    // load data from storage
    useEffect(() => {
        const storedCrewId = getItemFromStorage("crew");
        const loadedCrewProfiles = [];
        for (const key of storedCrewId) {
            const foundedProfile = profiles.find(
                (profile) => profile.id == key
            );
            if (foundedProfile) {
                loadedCrewProfiles.push(foundedProfile);
            }
        }
        setCrew(loadedCrewProfiles);
    }, [profiles]);

    let category = { previous: null };

    function setCategory(newCategory) {
        category.previous = newCategory;
        return null;
    }

    return (
        <div className="main">
            <h1>Build Your Crew</h1>

            {/* Side Bar Section */}
            <div className="sidebar-container">
                <div>
                    <a href="#Gunman">Gunman</a>
                    <a href="#Hacker">Hacker</a>
                    <a href="#Getaway-Driver">Driver</a>
                </div>
            </div>

            {/* Profiles Section */}
            <div className="profile-container">
                {profiles.map((profile) => (
                    <React.Fragment key={profile.id}>
                        {/* Render New Category If Category Changes */}
                        {category.previous != profile.expertise && (
                            <h2 id={profile.expertise}>
                                {hash} Category : {profile.expertise}
                            </h2>
                        )}

                        <Profile
                            profile={profile}
                            crew={crew}
                            setCrew={setCrew}
                        />
                        {/* Update Category on each iteration */}
                        {setCategory(profile.expertise)}
                    </React.Fragment>
                ))}
            </div>

            {/* Cart Section */}
            <div className="crew-container">
                <Crew crew={crew} budget={budget} setCrew={setCrew}/>
            </div>
        </div>
    );
};

export default Main;
