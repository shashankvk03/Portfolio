import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import homeImage from "../../Assets/pixel.jpeg"; // Import the image from assets

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content text-center">
          <Row
            className="align-items-start justify-content-center"
            style={{ minHeight: "100vh", paddingTop: "30px" }} // Increased paddingTop to push the content higher
          >
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 10, fontSize: "100px", fontWeight: "bold" }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: "90px", fontWeight: "bold" }}>
                I'M
                <strong className="main-name animated-name"> Shashank V Kashyap</strong>
              </h1>
              <div style={{ paddingBottom: 0, textAlign: "center", fontSize: "20px" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0 }}>
              {/* Use the imported image */}
              <img
                src={homeImage}
                alt="Home Design"
                style={{ width: "100%", height: "400px", marginTop: "-50px", objectFit: "cover" ,borderRadius:"10%"}} // Pushed higher with marginTop
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
