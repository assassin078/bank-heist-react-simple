import React from "react";
import { addItemToStorage } from "../../Utilities/configureStorage";
import "./profile.css";

const SkillTableRow = (props) => {
    const { description, value } = props.skill;
    return (
        <tr>
            <td>{description}</td>
            <td>
                <meter title={value} value={value} min={0} max={100} />
            </td>
        </tr>
    );
};

const Profile = (props) => {
    const { id, name, expertise, logo, img, skills, cut } = props.profile;
    const { crew, setCrew, profile } = props;
    let fakeKey = 0;
    const handleCrew = () => {
        const exists = crew.find((profile) => profile.id == id);
        if (exists) {
            alert("Member Already Added");
            return;
        }
        setCrew([...crew, profile]);
        addItemToStorage(id);
    };
    return (
        <div className="profile-card">
            <img src={logo} className="logo" alt="" />
            <div className="character-profile">
                <div className="character-info">
                    <label className="name">Name</label>
                    <h3>
                        {name.firstName} <br /> {name.lastName}
                    </h3>
                    <label className="name">Expertise</label>
                    <h3>{expertise}</h3>
                </div>
                <img className="character-img" src={img} alt="" />
            </div>
            <div className="character-skills">
                <label className="name">Skills</label>
                <table>
                    <tbody>
                        {skills.map((skill) => (
                            <SkillTableRow key={fakeKey++} skill={skill} />
                        ))}
                        <tr>
                            <td>Cut</td>
                            <td>
                                <b>{cut} %</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="hire-btn" onClick={handleCrew}>
                Hire
            </button>
        </div>
    );
};

export default Profile;
