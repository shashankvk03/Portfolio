import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Accessory from "../../Assets/Projects/Accessory Virtual Try-On Project.jpg";
import Game from "../../Assets/Projects/Game Development Project.jpg";
import web from "../../Assets/Projects/web3.0.jpeg";
import phishing from "../../Assets/Projects/phishing.jpg";
import vital from "../../Assets/Projects/vital.jpg";
import drone from "../../Assets/Projects/Miniature Surveillance Drone.jpg";
import institute from "../../Assets/Projects/Institute Management System.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Ethereum Exchange Web 3.0 Project"
              description="A platform to buy and sell Ethereum, transfer it to different accounts, and view changes on the blockchain with added GIFs. It also includes a wallet for managing all transactions."
              ghLink="https://github.com/shashankvk03/web3.0"
              demoLink="https://your-live-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={institute}
              isBlog={false}
              title="Institute Management System"
              description="A system built with XAMPP and Apache server for managing various aspects of an institute, such as students, faculty, courses, and exams."
              ghLink="https://github.com/shashankvk03/MINI-DBMS"
              demoLink="https://your-live-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drone}
              isBlog={false}
              title="Miniature Surveillance Drone"
              description="A surveillance drone built using Arduino and ESP, designed for real-time data processing and practical surveillance applications."
              ghLink="" // Remove GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Game Development Project"
              description="A game developed in 24 hours using Unity, featuring a 2D environment with assets from Photoshop, Blender, and audio from Audacity."
              ghLink="https://github.com/shashankvk03/game"
              demoLink="https://your-live-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishing}
              isBlog={false}
              title="Phishing Simulation"
              description="A phishing simulation project using a fake Instagram page, designed to educate users about phishing attacks and test their awareness."
              ghLink="" // Remove GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vital}
              isBlog={false}
              title="Health Advisory Web System"
              description="A health advisory web system designed to provide health-related guidance based on AI, built for a hackathon."
              ghLink="https://shashankvkashyap03.wixsite.com/my-site"
              demoLink="https://your-live-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Accessory}
              isBlog={false}
              title="Accessory Virtual Try-On Project"
              description="A virtual try-on system for accessories like glasses, hats, and masks using Python and OpenCV to create real-time face and eye detection models."
              ghLink="https://github.com/shashankvk03/virtual_try_on"
              demoLink="https://your-live-demo-link.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
