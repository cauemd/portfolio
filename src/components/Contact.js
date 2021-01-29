import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="title">
        <h2>contact</h2>
      </div>
      <h3>Want to get in touch? Use one of the links below!</h3>
      <div className="contact-panels">
        <div className="panel">
          <div className="panel-icon" style={{ color: "purple" }}>
            <FaGithub />
          </div>
          <h4>Check out some of my work in GitHub</h4>
          <a href="https://github.com/cauemd">https://github.com/cauemd</a>
        </div>
        <div className="panel">
          <div className="panel-icon" style={{ color: "#0a66c2" }}>
            <FaLinkedin />
          </div>
          <h4>Reach out on LinkedIn</h4>
          <a href="https://www.linkedin.com/in/cauemd/">
            https://www.linkedin.com/in/cauemd/
          </a>
        </div>
        <div className="panel">
          <div className="panel-icon" style={{ color: "red" }}>
            <AiOutlineMail />
          </div>
          <h4>Contact me by email</h4>
          <a href="mailto:cauemd91@gmail.com">cauemd91@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
