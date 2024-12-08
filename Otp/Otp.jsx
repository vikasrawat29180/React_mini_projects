import React, { useState, useRef, useEffect } from "react";
import "./otp.css";

const Otp = ({ otplength = 6 }) => {
  const [otpFeilds, setOtpFeilds] = useState(new Array(otplength).fill(""));
  const ref = useRef([]);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    if (key === "ArrowLeft") {
        if (index > 0) ref.current[index - 1].focus();
        return;
    }
    if (key === "ArrowRight") {
        if (index < otplength - 1) ref.current[index + 1].focus();
      return;
    }

    const copyOtpFeilds = [...otpFeilds];
    if (key === "Backspace") {
      copyOtpFeilds[index] = "";
      setOtpFeilds(copyOtpFeilds);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) return;
    copyOtpFeilds[index] = key;
    if (index < otplength - 1) ref.current[index + 1].focus();
    setOtpFeilds(copyOtpFeilds);
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="container">
      {otpFeilds.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          ></input>
        );
      })}
    </div>
  );
};

export default Otp;
