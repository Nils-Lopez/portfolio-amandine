import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Specify the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function MyPdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const zoomIn = () => {
    setScale((prevScale) => prevScale + 0.1);
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1));
  };

  useEffect(() => {
    const adjustScaleToViewport = () => {
      const viewportWidth = window.innerWidth;
      const scaleFactor =
        viewportWidth < 444 ? 0.4 : viewportWidth < 768 ? 0.6 : 1.2;
      setScale(scaleFactor);
    };

    const debouncedAdjustScale = debounce(adjustScaleToViewport, 100);

    window.addEventListener("resize", debouncedAdjustScale);
    adjustScaleToViewport(); // Adjust scale when component mounts

    return () => window.removeEventListener("resize", debouncedAdjustScale);
  }, []);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/pdfs/my-document.pdf`;
    link.download = "resume-amandine-de-wilde.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const documentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: "1em",
    width: "90%",
    maxWidth: "60%",
    margin: "auto",
    height: "auto",
    boxSizing: "border-box",
  };

  return (
    <>
      <div
        style={{
          paddingTop: 110,
          background: "black",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <button onClick={zoomIn} className="button is-black is-small ml-2">
          Zoom In
        </button>
        <button onClick={zoomOut} className="button is-black is-small ml-2">
          Zoom Out
        </button>
        <button
          onClick={downloadPdf}
          className="button is-white-ter is-small ml-2">
          Download
        </button>
      </div>
      <div style={{ width: "100%", height: "100%", background: "black" }}>
        <div style={documentStyles}>
          <Document
            file={`${process.env.PUBLIC_URL}/resume.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            options={{
              cMapUrl: "cmaps/",
              cMapPacked: true,
              workerSrc: `/pdf.worker.js`,
            }}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={scale}
              />
            ))}
          </Document>
        </div>
      </div>
    </>
  );
}

export default MyPdfViewer;
