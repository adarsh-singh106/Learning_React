import React, { useState } from "react";
import styles from "./SignUpModal.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import axios from 'axios';

const SignUpModal = ({ onClose }) => {
  const [authMode, setAuthMode] = useState("signup"); // 'signup' or 'signin'
  const [isLoading, setIsLoading] = useState(false);  // UX: Disable button while fetching

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { firstName, lastName, email, password } = formData;

  // 1. Handle Input Changes
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // <--- Requires name="..." on inputs to work
    }));
  };

  // 2. Clear form when switching modes
  const toggleMode = (mode) => {
    setAuthMode(mode);
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
  };

  // 3. Unified Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (authMode === "signup") {
        // --- REGISTER LOGIC ---
        const userData = { firstName, lastName, email, password };
        const response = await axios.post('/api/users/register', userData);
        
        console.log('Register Success:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        alert('Registration Successful!');
        onClose(); // Close modal on success
      } 
      else {
        // --- LOGIN LOGIC ---
        // You need to build this endpoint in your backend next!
        const loginData = { email, password };
        const response = await axios.post('/api/users/login', loginData);
        
        console.log('Login Success:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        alert('Logged in successfully!');
        onClose();
      }

    } catch (error) {
      // Handle axios errors gracefully
      const message = error.response?.data?.message || error.message || 'Something went wrong';
      alert('Error: ' + message);
    } finally {
      setIsLoading(false); // Re-enable button
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose size={24} />
        </button>

        <div className={styles.headerSection}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${authMode === "signup" ? styles.active : ""}`}
              onClick={() => toggleMode("signup")}
            >
              Sign up
            </button>
            <button
              className={`${styles.toggleBtn} ${authMode === "signin" ? styles.active : ""}`}
              onClick={() => toggleMode("signin")}
            >
              Sign in
            </button>
          </div>

          <h2>{authMode === "signup" ? "Create an account" : "Welcome back"}</h2>
          <p className={styles.subText}>
            {authMode === "signup"
              ? "Start your deep work journey today."
              : "Enter your details to access your workspace."}
          </p>
        </div>

        <form className={styles.formContainer} onSubmit={onSubmit}>
          {/* Only show Name fields if Signing Up */}
          {authMode === "signup" && (
            <div className={styles.row}>
              <input
                type="text"
                name="firstName" // <--- FIXED: Added name attribute
                value={firstName}
                placeholder="First name"
                className={styles.inputField}
                required
                onChange={onChange}
              />
              <input
                type="text"
                name="lastName" // <--- FIXED: Added name attribute
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
              name="email" // <--- FIXED: Added name attribute
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
              name="password" // <--- FIXED: Added name attribute
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
            disabled={isLoading} // Disable to prevent double-clicks
          >
            {isLoading 
              ? "Processing..." 
              : (authMode === "signup" ? "Create account" : "Sign In")
            }
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
      </div>
    </div>
  );
};

export default SignUpModal;