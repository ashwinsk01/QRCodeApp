import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f4f6f9, #e3e8ec);
`;

const ScannerContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;

  /* Apply styles to the Html5QrcodeScanner section */
  #qr-reader {
    /* Example styles for the video element */
    border: 2px solid #007bff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    height: auto;
  }
`;

const ScannerHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultText = styled.p`
  /* Add your styling for the result text here */
`;

const ConfirmationMessage = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: #4caf50; /* Green color for success */
`;

const QRCodeScanner = () => {
    const [scannedCode, setScannedCode] = useState("");

    useEffect(() => {
        const qrCodeScanner = new Html5QrcodeScanner(
            "qr-reader", { fps: 10, qrbox: 500 });
        qrCodeScanner.render(onScanSuccess);
    }, []);

    const onScanSuccess = (scannedText) => {
        setScannedCode(scannedText);
    };

    const handleScanAgain = () => {
        setScannedCode(''); // Clear scanned code
        window.location.reload(); // Refresh the page
      };

    return (
        <Container>
      <ScannerContainer>
        <ScannerHeading>Scan QR Code</ScannerHeading>
        {scannedCode ? (
          <>
            <ConfirmationMessage>Thank you for checking in!</ConfirmationMessage>
            <Button onClick={handleScanAgain}>Scan Another Code</Button>
          </>
        ) : (
          <>
            <div id="qr-reader"></div>
            {scannedCode && <ResultText>Scanned Code: {scannedCode}</ResultText>}
          </>
        )}
      </ScannerContainer>
    </Container>
    );
};

export default QRCodeScanner;