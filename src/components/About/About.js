import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import Platforms from "./Platforms";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "left", padding: "20px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Hey Their ! </strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6} style={{ padding: 100,paddingBottom: 20 }}>
              <img
                src={laptopImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "800px" }}
              />
            </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Platforms</strong> 
        </h1>
        <Platforms/>   
       
      </Container>
    </Container>
  );
}

export default About;
