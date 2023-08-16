import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import Button from "./Button";
import Container from "./Container";
import styled from "styled-components";
import ReScan from './ReScan';

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

const QRCodeScanner = (props) => {
    const [scannedCode, setScannedCode] = useState("");
    const [name, setName] = useState(null);

    useEffect(() => {
        const qrCodeScanner = new Html5QrcodeScanner(
            "qr-reader", { fps: 10, qrbox: 250 });
        qrCodeScanner.render(onScanSuccess);
    }, []);

    const onScanSuccess = (scannedText) => {
        setScannedCode(scannedText);
        props.data.map((item) => {
          if (item.fields.UID === scannedText) {
            setName({fullname: item.fields.FName+' '+item.fields['Last Name'],
                      id: item.id,
                      entered: item.fields.entered});
          }
          else {
            console.log('not found');
          }
        });
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
            {name ?
              name.entered===0 ?
              <ReScan className = 'success' id = {name.id}>Thank you for checking in {name.fullname}!</ReScan>
              :
              <ReScan className = 'failed' id = {name.id}>{name.fullname}, you've already checked in.</ReScan>
            
            :
            <ReScan className = 'failed'>Sorry, we could not find your name in our database.</ReScan>
          }
            <Button onClick={handleScanAgain}>Scan Another Code</Button>
          </>
        ) : (
          <>
            <div id="qr-reader"></div>
          </>
        )}
      </ScannerContainer>
    </Container>
    );
};

export default QRCodeScanner;