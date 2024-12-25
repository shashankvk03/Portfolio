import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SHASHANK V KASHYAP RESUME.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Calculate scale dynamically based on the screen width
  const calculateScale = () => {
    if (width > 1200) return 2.2; // Large screens
    if (width > 768) return 1.5;  // Medium screens (tablets)
    return 1.0;                  // Small screens (mobile)
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
                scale={calculateScale()}  // Adjust the scale dynamically
                style={{
                  marginBottom: "10px",
                  width: "100%",            // Make sure the PDF is responsive
                  maxWidth: "100%",         // Ensure it doesn't overflow horizontally
                }}
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
