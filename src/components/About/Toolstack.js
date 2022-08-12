import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiEclipseide,
  SiPycharm,
} from "react-icons/si";
import {BiCodeBlock} from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <a
                href="https://code.visualstudio.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
        <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <a
                href="https://www.codeblocks.org/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
        <BiCodeBlock />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <a
                href="https://www.heroku.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
           <SiHeroku />
        </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a
                href="https://www.eclipse.org/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
            <SiEclipseide/>
        </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a
                href="https://www.jetbrains.com/pycharm/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
            <SiPycharm/>
          </a>
        </Col>
    </Row>
  );
}

export default Toolstack;
