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
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // Update page width based on container size
      const container = document.querySelector('.resume-section');
      if (container) {
        // Account for padding and margins
        const containerWidth = container.clientWidth - 32; // 16px padding on each side
        setPageWidth(containerWidth);
      }
    };

    // Initial call
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Calculate scale dynamically based on the PDF's original width and container width
  const calculateScale = () => {
    if (!pageWidth) return 1;
    
    // Base PDF width (assuming standard A4 width in pixels at 72 DPI)
    const standardPDFWidth = 595;
    
    // Calculate scale to fit container width
    const scale = pageWidth / standardPDFWidth;
    
    // Limit maximum scale for larger screens
    if (width > 1200) return Math.min(scale, 1.8);
    if (width > 768) return Math.min(scale, 1.3);
    return Math.min(scale, 1.0);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume justify-content-center">
          <div className="pdf-container" style={{ 
            width: '100%',
            overflowX: 'hidden',
            padding: '16px'
          }}>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex flex-column align-items-center"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Page
                    pageNumber={index + 1}
                    scale={calculateScale()}
                    width={pageWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
              ))}
            </Document>
          </div>
        </Row>
      </Container>

      <style jsx global>{`
        .resume-section {
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        .react-pdf__Page__canvas {
          max-width: 100% !important;
          height: auto !important;
        }
        
        @media (max-width: 768px) {
          .pdf-container {
            padding: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;