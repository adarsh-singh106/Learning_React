import React, { useState } from "react";
import styles from "./SignUpModal.module.css";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import authService from "../../services/authService"; // <--- Import the service

const SignUpModal = ({ onClose }) => {
  const [isLoginMode, setIsLoginMode] = useState(false); // Simplified boolean state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Store error to show in UI, not alert()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError(""); // Clear errors when switching
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isLoginMode) {
        await authService.login({ email, password });
        // UX: Maybe redirect to dashboard here?
        onClose();
        window.location.reload(); // Simple way to update UI after login
      } else {
        await authService.register({ firstName, lastName, email, password });
        onClose();
        window.location.reload();
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong";
      setError(message); // Set error state to display in red
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* --- HEADER --- */}
        <div className={styles.headerSection}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${
                !isLoginMode ? styles.active : ""
              }`}
              onClick={() => !isLoginMode || toggleMode()}
            >
              Sign up
            </button>
            <button
              className={`${styles.toggleBtn} ${
                isLoginMode ? styles.active : ""
              }`}
              onClick={() => isLoginMode || toggleMode()}
            >
              Sign in
            </button>
          </div>

          <h2>{isLoginMode ? "Welcome back" : "Create an account"}</h2>
          <p className={styles.subText}>
            {isLoginMode
              ? "Enter your details to access your workspace."
              : "Start your deep work journey today."}
          </p>
        </div>

        {/* --- ERROR MESSAGE (Industry Standard UX) --- */}
        {error && <div className={styles.errorMessage}>{error}</div>}

        {/* --- FORM --- */}
        <form className={styles.formContainer} onSubmit={onSubmit}>
          {/* Conditional Rendering for Name Fields */}
          {!isLoginMode && (
            <div className={styles.row}>
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First name"
                className={styles.inputField}
                required
                onChange={onChange}
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last name"
                className={styles.inputField}
                required
                onChange={onChange}
              />
            </div>
          )}

          <div className={styles.inputWrapper}>
            <HiOutlineMail className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              className={styles.inputFieldWithIcon}
              required
              onChange={onChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <RiLockPasswordLine className={styles.inputIcon} />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className={styles.inputFieldWithIcon}
              required
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className={styles.createAccountBtn}
            disabled={isLoading}
          >
            {isLoading
              ? "Processing..."
              : isLoginMode
              ? "Sign In"
              : "Create account"}
          </button>
        </form>

        {/* --- SOCIAL LOGIN (Boilerplate) --- */}
        <div className={styles.dividerContainer}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerText}>OR CONTINUE WITH</span>
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
      </div>
    </div>
  );
};

export default SignUpModal;
