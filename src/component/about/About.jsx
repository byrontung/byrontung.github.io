import React from "react";
import "./About.css";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import { Col, Row } from "react-bootstrap";

function About() {
  const styles = {
    backgroundLeft: { backgroundColor: "#b8bdb5", minWidth: "384px" },
    backgroundRight: { backgroundColor: "#d2d4c8", minWidth: "384px" },
  };
  return (
    <Row id="about" className="d-flex position-relative min-vh-100 w-100 m-0">
      <Col
        id="about_left"
        className="position-sticky flex-grow-1 flex-shrink-0 d-flex align-items-center h-auto p-0"
        style={styles.backgroundLeft}
      >
        <div className="position-sticky flex-column d-flex justify-content-center top-0 bottom-0 align-items-center w-100 vh-100">
          <h1 className="title fw-bold">About</h1>
          <div
            className="d-flex flex-row position-absolute"
            style={{ bottom: "3vh" }}
          >
            <BottomNagivationBar />
          </div>
        </div>
      </Col>
      <Col
        id="about_right"
        className="d-flex h-100 flex-grow-1 flex-shrink-0 flex-column align-items-center position-relative p-0 pb-5"
        style={styles.backgroundRight}
      >
        <div className="py-4">
          <img className="profileImage" src={profile} alt="Profile" />
        </div>
        <p className="m-3 text-center lh-base">
          Hello! My name is Byron Tung and I am third year student at the
          University of Alberta pursing a Specialized Computer Science Degree.
        </p>
        <p className="m-3 text-center lh-base">
          I am currently looking for software development and web development
          internship opportunities for Fall 2022 and Winter 2023.
        </p>
        <p className="m-3 text-center lh-base">
          In my spare time, I play and coach badminton. I have played badminton
          for 12+ years and enjoy social and competitive aspect of the sport.
          The community is very welcoming, especially with new badminton clubs
          opening up in the city.
        </p>
        <p className="m-3 text-center lh-base">
          I have recently joined bouldering and volleyball groups to try out new
          interests with friends.
        </p>
      </Col>
    </Row>
  );
}

export default About;
