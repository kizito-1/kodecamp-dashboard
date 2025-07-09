import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5"
import '../styles/register.css';

const Login = () => {
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
              <Link to="/">
                <IoCloseSharp size={25} />
              </Link>
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

          <form action="">
            <div className="email-input">
              <input type="email" name="" id="" placeholder="Email address" />
            </div>

            <div className="password-input">
              <input type="password" name="" id="" placeholder="Password" />
            </div>

            <div className="create-btn">
              <button>Create account</button>
            </div>

            <div className="checkbox">
              <input type="checkbox" name="" id="" />
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

export default Login;
