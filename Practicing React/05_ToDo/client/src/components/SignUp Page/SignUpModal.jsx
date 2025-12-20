import React, { useState } from "react";
import styles from "./SignUpModal.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const SignUpModal = ({ onClose }) => {
  const [step, setStep] = useState("initial"); // 'initial' or 'otp'
  const [authMode, setAuthMode] = useState("signup"); // 'signup' or 'signin'

  const handleAuth = (e) => {
    e.preventDefault();
    if (authMode === "signup") {
      // If signing up, go to OTP verification
      setStep("otp");
    } else {
      // If signing in, just log them in directly
      alert("Logged in successfully!");
      onClose();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    alert("Account verified! Logging you in...");
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* --- STEP 1: LOGIN / SIGNUP FORM --- */}
        {step === "initial" && (
          <>
            <div className={styles.headerSection}>
              {/* RESTORED TOGGLE */}
              <div className={styles.toggleContainer}>
                <button
                  className={`${styles.toggleBtn} ${
                    authMode === "signup" ? styles.active : ""
                  }`}
                  onClick={() => setAuthMode("signup")}
                >
                  Sign up
                </button>
                <button
                  className={`${styles.toggleBtn} ${
                    authMode === "signin" ? styles.active : ""
                  }`}
                  onClick={() => setAuthMode("signin")}
                >
                  Sign in
                </button>
              </div>

              <h2>
                {authMode === "signup" ? "Create an account" : "Welcome back"}
              </h2>
              <p className={styles.subText}>
                {authMode === "signup"
                  ? "Start your deep work journey today."
                  : "Enter your details to access your workspace."}
              </p>
            </div>

            <form className={styles.formContainer} onSubmit={handleAuth}>
              {/* Only show Name fields if Signing Up */}
              {authMode === "signup" && (
                <div className={styles.row}>
                  <input
                    type="text"
                    placeholder="First name"
                    className={styles.inputField}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className={styles.inputField}
                    required
                  />
                </div>
              )}

              <div className={styles.inputWrapper}>
                <HiOutlineMail className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.inputFieldWithIcon}
                  required
                />
              </div>

              <div className={styles.inputWrapper}>
                <RiLockPasswordLine className={styles.inputIcon} />
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.inputFieldWithIcon}
                  required
                />
              </div>

              <button type="submit" className={styles.createAccountBtn}>
                {authMode === "signup" ? "Create account" : "Sign In"}
              </button>
            </form>

            <div className={styles.dividerContainer}>
              <div className={styles.dividerLine}></div>
              <span className={styles.dividerText}>
                OR {authMode === "signup" ? "JOIN" : "LOGIN"} WITH
              </span>
              <div className={styles.dividerLine}></div>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.socialBtn}>
                <FcGoogle size={24} />
              </button>
              <button className={styles.socialBtn}>
                <FaApple size={24} />
              </button>
            </div>
          </>
        )}

        {/* --- STEP 2: OTP VERIFICATION (Only for Sign Up) --- */}
        {step === "otp" && (
          <div className={styles.otpSection}>
            <div className={styles.headerSection}>
              <h2>Check your email</h2>
              <p className={styles.subText}>
                We sent a verification code to <strong>user@example.com</strong>
              </p>
            </div>

            <form onSubmit={handleVerify} className={styles.formContainer}>
              <input
                type="text"
                maxLength="6"
                placeholder="123456"
                className={styles.otpMainInput}
                autoFocus
              />
              <button type="submit" className={styles.createAccountBtn}>
                Verify Email
              </button>
            </form>

            <p className={styles.resendText}>
              Didn't receive it?{" "}
              <span onClick={() => alert("Resent!")}>Resend code</span>
            </p>

            <button
              className={styles.backBtn}
              onClick={() => setStep("initial")}
            >
              Wrong email?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;
