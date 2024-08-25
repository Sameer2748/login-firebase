import React, { useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [tel, setTel] = useState("");
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [user, setUser] = useState("");


  const SendOtp = async (event) => {
    event.preventDefault();

    try {
      const reCaptcha = new RecaptchaVerifier(auth ,"recaptcha", {
        'size': 'invisible',
        'callback': (response) => {
          // Recaptcha resolved, allow to send OTP
        },
      });

      const confirmation = await signInWithPhoneNumber(auth, tel, reCaptcha);
      console.log(confirmation);
      setUser(confirmation)
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOtop = async()=>{
    try {
        const data = await user.confirm(otp)
        console.log(data);
        console.log("done logging in with mobile number");
    } catch (error) {
        console.log("wrong otp");
    }
  }
  return (
    <>
      {!sent ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg font-bold">Login Page</h1>
          <form className="flex flex-col justify-center items-center" onSubmit={SendOtp}>
            <PhoneInput
              country="US"
              placeholder="Enter phone number"
              value={tel}
              onChange={setTel}
            />
            <button type="submit">
              Send Otp
            </button>

            <div id="recaptcha"></div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          <h1>OTP Page</h1>
          <form className="flex flex-col justify-center items-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <button type="submit" onClick={verifyOtop}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
