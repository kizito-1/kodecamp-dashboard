import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp, IoLogoApple } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import "../styles/register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    news: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    news: Yup.boolean(),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      navigate("/register/personal-info");
    } catch (error) {
      setFieldError("email", "Email already in use or invalid");
      console.log(error)
    }
    setSubmitting(false);
  };

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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form>
                <div className="email-input">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="form-error"
                  />
                </div>

                <div className="password-input password-input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
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
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="form-error"
                  />
                </div>

                <div className="create-btn">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create account"}
                  </button>
                </div>

                <div className="checkbox">
                  <Field
                    type="checkbox"
                    name="news"
                    id="news"
                    checked={values.news}
                    onChange={() => setFieldValue("news", !values.news)}
                  />
                  <span>Send me news and promotions</span>
                </div>
              </Form>
            )}
          </Formik>

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
