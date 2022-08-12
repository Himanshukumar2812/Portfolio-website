import React from "react";
import Card from "react-bootstrap/Card";
import { FiCornerDownRight } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Himanshu kumar </span>
            from <span style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}> Bihar, India.</span>
            <br />I am currently pursuing my Bachelor degree
             in <span style={{color:'rgb(214, 218, 105)',fontWeight: 'bold'}}>Information Technology .</span>
            <br />
            <br />
            Apart from coding, in free time some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FiCornerDownRight />  <span style={{color:'rgb(214, 218, 105)'}}>Listening music </span>
            </li>
            <li className="about-activity">
              <FiCornerDownRight/> <span style={{color:'rgb(214, 218, 105)'}}> Playing music </span>
            </li>
            <li className="about-activity">
              <FiCornerDownRight/> <span style={{color:'rgb(214, 218, 105)'}}> Music </span>
            </li>
          </ul>

          <p style={{ color: "rgb(214, 218, 105)" }}>
            "SAVE ME MAA !"{" "}
          </p>
          <footer className="blockquote-footer">Bella</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
