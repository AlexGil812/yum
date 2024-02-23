import React from "react";
import "../Contact.css";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  return (
    <>
      <button className="back-to-home" onClick={Home}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="container">
        <h2>Contact Us</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form id="contact-form">
              <div className="form-group">
                <label type="name">Name:</label>
                <Field type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label type="email">Email:</label>
                <Field type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label type="message">Message:</label>
                <Field as="textarea" id="message" name="message" required />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
