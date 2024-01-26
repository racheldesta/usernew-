import React, { useState, useRef, useEffect } from "react";
import "./VerificationPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const navigate= useNavigate();
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(30);


    useEffect(() => {
      let interval = null;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [timer]);
  

    const handleChange = (index, event) => {
      const { value } = event.target;
      const digitRegex = /^\d*$/;

    if (digitRegex.test(value)) {
      const updatedCode = [...code];
      updatedCode[index] = value;
      setCode(updatedCode);

      if  (index < inputRefs.current.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
      else if (index === inputRefs.current.length - 1) {
        // Check if the entered code matches the sent email code
        const enteredCode = updatedCode.join("");
        const sentCode = "1234"; // Replace with the actual sent email code

        if (enteredCode === sentCode) {
          // Code matches, navigate to the next page
          navigate("/next-page");
        } else {
          // Code does not match, display an error or handle it accordingly
          console.log("Code does not match");
        }}
    }
  };
     const handleResend = () => {
    // Reset the timer to 30 seconds
    setTimer(30);
    // Implement logic to resend the verification code
    // ...
  };

  

  return (
    <div className="verification">
      <div className="welcome">
        <h1 className="greeting">Welcome !</h1>
        <div class="triangle-left"></div>
        <p className="paragraph">
          From chaos to clarity.simplify user management 
           and say goodbye Your
          spreadsheets.
        </p>
        <h2>Your time</h2>
        <h2>Your data</h2>
        <h2>Your peace of mind!</h2>
        <div class="rectangle"></div>
        <div class="circle"></div>
      </div>
      
      <div className="ver-page">
      <h3>VERIFICATON</h3>
     
          <p className="ver-text1">Enter your  4 digits code that your received on your email.</p>
        <div className=" ver-container">
      
      <div className="ver-input-container">
        {code.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={value}
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => {
              if (event.key === "Backspace" && value === "" && index > 0) {
                // Handle Backspace key press when the input box is empty
                inputRefs.current[index - 1].focus();}}}
                
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </div>
      <div className="timer">
          {timer > 0 ? <span>{timer}s</span> : <span>00:30</span>}
        </div>
      <button className="ver-button" disabled={code.some((value) => value === '') || code.length !== 4}>
        VERIFY
      </button>
    </div>
       
 
          <div className="resend">
          Didn't receive a code? <span onClick={handleResend}> Resend now</span>
      </div>
       
    </div>
    </div>
  );
};
export default VerificationPage;