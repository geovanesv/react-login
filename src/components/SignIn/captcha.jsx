// CaptchaComponent.jsx
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaComponent = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setVerified(true);
      onVerify(true);
    } else {
      setVerified(false);
      onVerify(false);
    }
  };

  return (
    <div style={{height: "70px ", marginTop:"10px", marginBottom:"10px"}}>
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Chave de teste do reCAPTCHA
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default CaptchaComponent;
