import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px", // Fixed height
          width: "100%", // Ensure the image stretches across the card width
          objectFit: "cover", // Make the image fill the container without distortion
          borderRadius: "10px 10px 0 0", // Optional: rounded corners for the image
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Render GitHub button only if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Add additional button for demo if available */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
