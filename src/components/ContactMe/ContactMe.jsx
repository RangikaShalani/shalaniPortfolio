import React, { useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zfhr45b",
        "template_0iosfbj",
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
  }

  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contactme-t1 pb-3">
            <h2>Newsletter</h2>
          </div>
          <div className="contact-me2-dec"></div>
          <div class="row align-items-center mb-5">
            <div class="col-lg-5 col-md-12">
              <div class="work-togather-text">
                <h2 class="h2-title text-white ">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>

            <form
              action=""
              className="subscribe-form"
              ref={form}
              onSubmit={sendEmail} >
              <div className="email">
                <div class="work-togather-form">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    class="form-input-one subscribe-input"
                    placeholder="Email Address"
                    required=""

                  />
                </div>
              </div>
              <div className="button" >
                <div class="work-togather-form-btn">
                  <button type="submit" class="sec-btn">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
