import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import kathaRoomImage from "../../Assets/Projects/Katharoom.png"; // Replace with actual image path

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "white", paddingBottom: "0px" }}></h1>
          <strong className="purple"> Internship </strong> At
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "white", paddingTop: "10px" }}> Parjanya Creative Solutions</h1>
        </h1>
        <p style={{ color: "white" }}>
          Here is my Internship experience.
        </p>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12} className="mb-4">
            <Card className="project-card" style={{ borderRadius: "10px", backgroundColor: "black", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}>
              <Card.Img variant="top" src={kathaRoomImage} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "450px", objectFit: "cover", marginBottom: "0px" }} />
              <Card.Body>
                <Card.Title className="purple" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Katha Room App
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "1rem", marginBottom: "10px" , textAlign: "justify", lineHeight: "1.5" }}>
                  During my internship as an Android Developer at Parjanya Creative Solutions, I worked on the Katha Room mobile application, available on the Play Store and iOS. This app lets kids listen to classic Indian Panchatantra stories in three different languages. My role involved developing features using Java and XML in Android Studio, focusing on optimizing the user interface, implementing audio playback controls, and ensuring compatibility across various devices. I also worked on creating layouts, managing JSON data, and enhancing the app's overall functionality to deliver a seamless and engaging experience for young users. Additionally, I was involved in publishing the application and contributed to developing a feature where kids can create their own stories using AI, making the app more interactive and innovative.
                </Card.Text>
                <Card.Link
                  href="https://katharoom.com"
                  target="_blank"
                  className="btn btn-outline-light btn-sm"
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Live Demo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
