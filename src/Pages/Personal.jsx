import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../styles/personal.css";

const Personal = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    gender: "",
    phone: "",
    birthday: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string().required("Phone number is required"),
    birthday: Yup.string().required("Birthday is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Save personal info if needed
    navigate("/register/add-address");
    setSubmitting(false);
  };

  return (
    <section className="personal-section">
      <div className="personal-container">
        <div className="header">
          <div className="header-texts">
            <h2>Personal Information</h2>
            <p>2 of 3</p>
          </div>

          <div className="close">
            <Link to={"/login"}>
              <IoCloseSharp size={25} />
            </Link>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="name-input">
                <Field type="text" name="fullName" placeholder="Full Name" />
              </div>
              <div className="checkbox">
                <p>Gender:</p>
                <div className="male-check">
                  <Field type="radio" name="gender" value="male" />
                  <p>Male</p>
                </div>
                <div className="female-check">
                  <Field type="radio" name="gender" value="female" />
                  <p>Female</p>
                </div>
              </div>
              <div className="warn">
                <MdOutlineInfo />
                <p>The phone number and birthday are only visible to you </p>
              </div>
              <div className="number-section">
                <Field as="select" name="countryCode">
                  <option value="+598">+598</option>
                  {/* Add more country codes if needed */}
                </Field>
                <Field type="tel" name="phone" placeholder="Phone number" />
              </div>
              <div className="b-day">
                <Field type="date" name="birthday" placeholder="Birthday" />
              </div>
              <div className="let">
                <p>Let us know about your birthdays so as not to miss a gift</p>
              </div>
              <div className="save-btn">
                <button type="submit" disabled={isSubmitting}>
                  Save Information
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Personal;
