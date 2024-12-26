import React from "react";
import { Col, Row } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiHtml5,
  DiC,
  DiDjango,
  DiCss3,
  DiPython,
  DiGit,
  DiWebplatform,
  DiJavascript,
  DiMysql,
  DiPhp,
  DiAndroid
} from "react-icons/di";
import { SiBlockchaindotcom } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiC,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Java</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>C</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Python</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Android SDK</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>JavaScript</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>HTML</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>CSS</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Solidity</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Django</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>MySQL</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Git</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Firebase</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>Blockchain</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>SQLite</name>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <name style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>PHP</name>
      </Col>
    </Row>
  );
}

export default Techstack;

