import React from "react";
import{Col,Row} from "react-bootstrap";
import {DiLinux} from "react-icons/di";
import {ImWindows8} from "react-icons/im";

function Platforms(){
    return (
       
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <a
                href="https://www.linux.org/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
           <DiLinux/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
             href="https://www.microsoft.com/en-in/windows"
             style={{ color: "white" }}
             target="_blank"
             rel="noopener noreferrer"
             >
        <ImWindows8/>
        </a>
      </Col>
      </Row>
    );   
}

export default Platforms;