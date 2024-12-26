import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNotepadplusplus } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiAtlassian } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>  Windows</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Ubuntu</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Kali linux</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Visual Studio Code</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Android Studio</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Jupyter</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> Jira Atlassian</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}> slack</name>
      </Col>
    </Row>
  );
}

export default Toolstack;
