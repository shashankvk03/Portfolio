import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SHASHANK V KASHYAP RESUME.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(2200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {/* Render all pages vertically */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 886 ? 2.2 : 0.9} // Adjust the scale as necessary
                style={{ marginBottom: "10px" }}
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
