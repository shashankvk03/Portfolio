import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import drone from "../../Assets/Hackathons/drone.jpg";
import game from "../../Assets/Hackathons/game.jpg";
import hackathonImage from "../../Assets/Hackathons/hackathon.jpg";
import Ai from "../../Assets/Hackathons/AI.png";
import C from "../../Assets/Hackathons/C.jpg";
import IUCEE from "../../Assets/Hackathons/IUCEE.png";
import VR from "../../Assets/Hackathons/VR.png";
import cyber from "../../Assets/Hackathons/cyber.png";
import python from "../../Assets/Hackathons/python.png";

function Certificate() {
  const eventsAndCompetitions = [
    {
      title: "Game Development Hackathon",
      description:
        "Developed a 2D game in 24 hours using Unity and visual scripting, integrating creative assets from Photoshop and Blender.",
      imgPath: game, // Corrected the image key here
    },
    {
      title: "DroneHackathon",
      description:
        "Built a miniature surveillance drone using Arduino and ESP, gaining hands-on experience in drone design and real-time data processing.",
      imgPath: drone, // Corrected the image key here
    },
    {
      title: "Hackathon",
      description:
        "Developed an AI-based health advisory web app during a hackathon, focusing on diagnostic model integration for non-technical users.",
      imgPath: hackathonImage, // Corrected the image key here
    },
  ];

  const certificates = [
    {
      title: "AI and Machine Learning Workshop",
      imgPath: Ai, // Corrected to use imgPath
    },
    {
      title: "Python Programming Workshop",
      imgPath: python, // Corrected to use imgPath
    },
    {
      title: "Emerging Technology Workshop(IUCEE)",
      imgPath: IUCEE, // Corrected to use imgPath
    },
    {
      title: "C Programming Workshop",
      imgPath: C, // Corrected to use imgPath
    },
    {
      title: "VR and AR Workshop",
      imgPath: VR, // Corrected to use imgPath
    },
    {
      title: "Cybersecurity Workshop",
      imgPath: cyber, // Corrected to use imgPath
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Events <strong className="purple">and Competitions </strong>
        </h1>
        <Row>
          {eventsAndCompetitions.map((event, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card
                style={{
                  borderRadius: "10px",
                  backgroundColor: "black",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.imgPath} // Updated to use imgPath
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
                  >
                    {event.title}
                  </Card.Title>
                  <Card.Text style={{ color: "white", fontSize: "1rem", textAlign: "justify" }}>
                    {event.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h1 className="certificate-heading" style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          My <strong className="purple">Certificates</strong>
        </h1>
        <Row>
          {certificates.map((certificate, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card
                style={{
                  borderRadius: "10px",
                  backgroundColor: "black",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={certificate.imgPath} // Updated to use imgPath
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "1.2rem", fontWeight: "bold", color: "white" }}
                  >
                    {certificate.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
