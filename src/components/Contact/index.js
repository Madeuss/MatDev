import React, { useState } from "react";
import axios from "axios";

import { FaWhatsapp } from "react-icons/fa";

import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import "./styles.css";

import gif from "./assets/giphy.gif";
import astronaut from "./assets/astronaut.png";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("How may I call you?")
    .max(28, "Woow, so long! tell me just your first name")
    .notOneOf(["admin", "administrador"], "'-'"),
  email: Yup.string()
    .required("Email is required")
    .email("A valid email, please"),
  message: Yup.string().required("Don't be shy..."),
});

export default function Contact() {
  const [status, setStatus] = useState("Contact me");
  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit(values) {
      setInterval(() => {
        setStatus("Contact me");
      }, 2500);
      axios.post(`${process.env.REACT_APP_NODEMAILER_URL}/send`, values);
      setTimeout(() => {
        setStatus("Sending...");
      }, 100);
      setTimeout(() => {
        resetForm({});
        setStatus("Thanks :)");
      }, 1200);
    },
  });

  const Span = styled.span`
    color: #31b5ff;
    font-size: 1em;
    opacity: 0.8;
    @media (max-width: 500px) {
      font-size: 2em;
    }
  `;

  return (
    <container className="section-container contact-container">
      <aside className="contact-left">
        <span className="whatsapp-icon">
          <a
            href="https://api.whatsapp.com/send?phone=5511930568060&text=Oi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp id="whatsapp-icon" size={35} color={"#B0B0B0"} />
          </a>
        </span>
        <section
          className="gif"
          data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h1>CONTACT</h1>
          <h1>CONTACT</h1>
          <h1>CONTACT</h1>
          <img src={gif} alt="Hi-five contact" />
        </section>

        <div
          id="astronaut-div"
          data-aos="fade-bottom"
          data-aos-offset="-500"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <img src={astronaut} alt="Astronaut" />
        </div>
      </aside>
      <aside className="form-side">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label>Your name</label>
            <input
              type="text"
              name="name"
              className="contact-input name-input"
              required
              value={values.name || ""}
              onChange={handleChange}
            />
            {errors.name ? <Span>{errors.name}</Span> : null}
          </div>
          <div className="form-item">
            <label>Your email</label>
            <input
              type="text"
              name="email"
              className="contact-input email-input"
              required
              value={values.email || ""}
              onChange={handleChange}
            />
            {errors.email ? <Span>{errors.email}</Span> : null}
          </div>
          <div className="form-item" id="message-item">
            <label>Drop me a line</label>
            <textarea
              type="text"
              name="message"
              className="message-input"
              required
              placeholder="Ex.: Hi, Mat. You're so handsome. I love you!"
              value={values.message || ""}
              onChange={handleChange}
            />
            {errors.message ? <Span>{errors.message}</Span> : null}
            <button className="contact-submit-btn" type="submit">
              {status}
            </button>
          </div>
        </form>

        <section className="social-text">
          <a
            href="https://www.facebook.com/mateus1two3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/mateusdevsouza"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Madeuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>
      </aside>
    </container>
  );
}
