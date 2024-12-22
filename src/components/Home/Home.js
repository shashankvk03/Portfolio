import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    script.type = "module";
    script.onload = () => {
      // Once the script is loaded, the viewer should be ready to use
      console.log("Spline viewer script loaded successfully.");
    };
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };  
  }, []);

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
              {/* Embed the Spline viewer with undefined URL as per request */}
              <spline-viewer
                url="https://prod.spline.design/ytl2ibRegJLGkGI3/scene.splinecode"
                style={{ width: "100%", height: "500px", marginTop: "-50px" }} // Pushed higher with marginTop
              ></spline-viewer>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
