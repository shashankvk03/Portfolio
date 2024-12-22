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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
