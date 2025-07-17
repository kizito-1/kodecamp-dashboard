import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/manual.css";

const Manual = () => {
  const navigate = useNavigate();

  const initialValues = {
    street: "",
    apartment: "",
    city: "",
    code: "",
  };

  const validationSchema = Yup.object({
    street: Yup.string().required("Street is required"),
    apartment: Yup.string(),
    city: Yup.string().required("City is required"),
    code: Yup.string().required("Postal code is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Save address if needed
    navigate("/register/success");
    setSubmitting(false);
  };

  return (
    <>
      <section className="manual-section">
        <div className="manual-container">
          <div className="manual-header">
            <div className="manual-header-text">
              <h2>Add Address</h2>
            </div>
            <div className="manual-header-close">
              <Link to="/register/personal-info">
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
                <div className="street-input">
                  <Field type="text" name="street" placeholder="Street" />
                  <ErrorMessage name="street" component="div" className="form-error" />
                </div>
                <div className="apartment-input">
                  <Field type="text" name="apartment" placeholder="Apartment" />
                  <ErrorMessage name="apartment" component="div" className="form-error" />
                </div>
                <div className="city-input">
                  <Field type="text" name="city" placeholder="City" />
                  <ErrorMessage name="city" component="div" className="form-error" />
                </div>
                <div className="code-input">
                  <Field type="text" name="code" placeholder="Postal Code" />
                  <ErrorMessage name="code" component="div" className="form-error" />
                </div>
                <div className="save-btn">
                  <button type="submit" disabled={isSubmitting}>
                    Save Address
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}

export default Manual