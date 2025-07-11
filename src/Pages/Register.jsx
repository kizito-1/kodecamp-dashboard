import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp, IoLogoApple } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "../styles/register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Show stars for each character, but never update state with stars
  const getMaskedPassword = (value) => "*".repeat(value.length);

  return (
    <>
      <section className="register-section">
        <div className="register-container">
          <div className="header">
            <div className="header-links">
              <div className="register-header">
                <Link to="/register">Register</Link>
              </div>
              <div className="login-header">
                <Link to="/login">Login</Link>
              </div>
            </div>

            <div className="close">
              <IoCloseSharp size={25} />
            </div>
          </div>

          <div className="register-socials">
            <div className="apple-social">
              <IoLogoApple size={17} />
            </div>
            <div className="fb-social">
              <FaFacebookF size={17} color="#3B5998" />
            </div>
            <div className="google-social">
              <FcGoogle size={17} />
            </div>
          </div>

          <div className="reg-text">
            <p>or register with email</p>
          </div>

          <form>
            <div className="email-input">
              <input type="email" placeholder="Email address" />
            </div>

            <div className="password-input password-input-group">
              <input
                type="text"
                placeholder="Password"
                value={showPassword ? password : getMaskedPassword(password)}
                onChange={(e) => {
                  if (showPassword) {
                    setPassword(e.target.value);
                  } else {
                    const prevLength = password.length;
                    const newLength = e.target.value.length;
                    if (newLength > prevLength) {
                      setPassword(password + e.target.value.slice(-1));
                    } else if (newLength < prevLength) {
                      setPassword(password.slice(0, -1));
                    }
                  }
                }}
                autoComplete="new-password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password-visibility"
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </span>
            </div>

            <div className="create-btn">
              <Link to={"/register/personal-info"}>
                <button type="submit">Create account</button>
              </Link>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="news" />
              <span>Send me news and promotions</span>
            </div>
          </form>

          <p className="terms">
            By continuing I agree with the <a href="">Terms & Conditions,</a>
          </p>
          <p className="terms-2">
            and <a href="">Privacy Policy</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
