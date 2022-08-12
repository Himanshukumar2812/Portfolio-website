import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
 
} from "react-icons/di";
import {
  SiHtml5,
  SiMysql,
  SiCplusplus,
  SiStreamlit,
} from "react-icons/si";
import {
  IoLogoCss3,

} from "react-icons/io";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://www.javatpoint.com/cpp-tutorial"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiCplusplus/>
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://en.wikipedia.org/wiki/HTML5"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiHtml5/>
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IoLogoCss3/>
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://www.mysql.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiMysql/>
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://www.javascript.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <DiJavascript1 />
              </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://nodejs.org/en/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <DiNodejs />
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://reactjs.org/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <DiReact />
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://pages.github.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
             <DiGit />
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
             <a
                href="https://www.python.org/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
             <DiPython />
              </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <a
                href="https://streamlit.io"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiStreamlit/>
              </a>
      </Col>
    </Row>
  );
}

export default Techstack;
