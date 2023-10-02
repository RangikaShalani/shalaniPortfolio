import React, { useRef } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_zfhr45b",
        "template_a6b6z26",
        form.current,
        "Fta5Q--L3GJpw-t7o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const contactDetails = [
    { icon: "fa-solid fa-phone-volume", contact_name: "phone", contact_info: "0711936465 / 0760657654", linkurl: "tel:+94711936465" },
    { icon: "fa-regular fa-envelope", contact_name: "Email", contact_info: "rangika2520@gmail.com", linkurl: "mailto:rangika2520@gmail.com" },
    { icon: "fa-solid fa-house-chimney-user", contact_name: "Address", contact_info: "No: 113/01 , Walasmulla", linkurl: "https://maps.app.goo.gl/YE5jjDq3JzUVBbtR7" }
  ]

  return (
    <>
      <div className="reachme-container">
        <div className="reachme-title2">
          <h2>I Want To Hear From You</h2>

          <h3>Contact Me</h3>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="reachme-title">
              <div className="row">
                {contactDetails &&
                  contactDetails.map((details) => (
                    <div className="contact-info  " key={details.id}>
                      <a href={details.linkurl}>
                        <div className="contact-details">
                          <i className={details.icon}></i>
                          <div className="contact-mi">
                            <h4 className="icon-name">{details.contact_name}:</h4>
                            <p className="d-name">{details.contact_info}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 email-me container">
            <form
              action=""
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-12 mb-3 hire-me-title"></div>
                <div className="col-md-6 ">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <textarea
                    name="message"
                    id="message"
                    cols="60"
                    rows="8"
                    placeholder="Your Message"
                  ></textarea>
                  <button className="hire-btn" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
