import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import homeimage from "../../images/decoration/myimageFront1.png"


const Intro = () => {

  return (
    <>
      <section className=" intro-page" id="home" >
        <div className="decorations">
          <div className="decor-dot2">
            <img src={decor3} alt="" />
          </div>

          <div className="parcol"></div>
        </div>
        <div className="small-intro">
          <div className="intro-row">
            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
              <div className="intro-name">
                <h3
                  className="hello"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Software Engineer
                </h3>
                <h3
                  className="name"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Hey! I Am
                </h3>
                <h3
                  className="job  text-animate"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  Shalani Chethana
                </h3>
                <p
                  className="myinfo"
                  data-aos="fade-down"
                  data-aos-duration="1800"
                >
                  Success is the result of relentless effort, complete devotion to the task at hand, and the mindset that we'll give our absolute best, no matter the outcome. The price of success is hard work, dedication, and the determination to excel, always. 💪🌟

                </p>
              </div>
              <div
                className="intro-btns"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <a
                  href="mailto:rangika2520@gmail.com"
                  className="contactMe"
                >
                  <button className="contact-me">
                    Hire me <i class="bx bx-send "></i>
                  </button>
                </a>
              </div>
              <div
                class="intro-contact"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <span>Follow Me:</span>
                <ul className="social-media-icon">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shalani-chethana-9423071a5/"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RangikaShalani"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shalanichethana/"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/ShalaniChethana"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-dribbble" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 left-img "
              data-aos="fade-down-left"
            >
              <div className="ff">
                <img
                  className="intro-img"
                  src={homeimage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
