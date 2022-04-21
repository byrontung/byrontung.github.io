import React from "react";
import "./About.css";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";

function About() {

    return (
        <div id="about" className="page_about">
            <div className="backgroundColour left">
                <h1 className="title">About</h1>
                <div className="main">
                <BottomNagivationBar /></div>
            </div>
            <div className="backgroundColour right">
                <div className="profile">
                    <img className="profileImage" src={profile} alt="Profile" />
                </div>
                <h1 className="mainText">Welcome to my website!</h1>
                <h1 className="mainText">
                    Hello! My name is Byron Tung and I am student at the
                    University of Alberta pursing a Specialized Computer Science
                    Degree.
                </h1>
                <h1 className="mainText">
                    In my spare time, I play and coach badminton. I have played
                    badminton for 12+ years and enjoy giving back to the community.

                    Since I was once in their shoes, I
                    believe that having a mentor and a friend working towards a
                    common goal is a special connection that can be built though
                    sports.
                </h1>
            </div>
        </div>
    );
}

export default About;
