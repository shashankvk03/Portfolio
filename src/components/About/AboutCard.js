import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashank .V. Kashyap  </span>
             from <span className="purple">Mysore, India.</span>
            <br />
            I am currently a 7th-semester Computer Science Engineering student at
            Maharaja Institute of Technology, and an Android Developer Intern at
            Parjanya Creative Solutions.
            <br />
            I am also a member of IEEE Mysore Subsection and the Institute of
            Innovation Council (IIC).
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cybersecurity and AI Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Games and Drones
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Exploring New Ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate, Inspire, and Create Solutions for a Better Future!"{" "}
          </p>
          <footer className="blockquote-footer">Shashank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
