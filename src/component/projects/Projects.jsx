import React from "react";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";

function Projects() {
    return (
        <div id="projects" className="page_about">
            <div className="left">
                <div style={{ backgroundColor: "#D2D4C8" }}>
                    <h1 className="title">Projects</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </div>
            <div className="right" style={{ backgroundColor: "white" }}>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <h1>Edmonton SafeWalk</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <h1>Experimently</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <h1>Restaurant Order Organizer</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <h1>PokemonEffectiveness</h1>
                </div>
            </div>
        </div>
    );
}

export default Projects;
