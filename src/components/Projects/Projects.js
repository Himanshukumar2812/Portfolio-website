import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Senti from "../../Assets/Projects/Senti.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Senti}
              isBlog={false}
              title="Sentimental analysis from text feedback "
              description="This is an analyser that accepts textual input and performs analysis on it and returns output on basis of given data. It tries to detect human sentiment through Machine language and predict it."
              ghLink="https://github.com/Himanshukumar2812/Sentiment-Analysis-From-Text-Feedback"
              demoLink="https://sentiment-analyzer-web-app.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
