import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import success from "../assets/images/dev.jpg";
import "../styles/success.css";

const Success = () => {
  return (
    <>
      <div className="success-section">
        <div className="success-container">
          <div className="success-img">
            <img src={success} alt="" />
          </div>

          <div className="success-text">
            <h1>You are successfully registered!</h1>
          </div>

          <div className="login-btn">
            <Link to={"/login"}>
              <button>Go to Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
