import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import decor4 from "../../images/decoration/Path-25.png";
import "./Intro.css";
import homeimage from "../../images/decoration/myimageFront1.png"


const Intro = () => {
  // const { data: conta } = useGetSocialMediaQuery();

  // const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  // const [homeDetails, setHomeDetails] = useState(homeData);
  // const [contacts1Details, setContact2Details] = useState(conta);
  // const img_300 = "http://drive.google.com/uc?id=";
  // const title_name = homeDetails && homeDetails.map((detail2) => detail2.name);

  // useEffect(() => {
  //   setHomeDetails(homeData);
  //   setContact2Details(conta);

  //   document.title = title_name;
  // }, [homeDetails, homeData, contacts1Details, conta, title_name]);
  // if (isFetching) return "loading";

  return (
    <>
      {/* {homeDetails &&
        homeDetails.map((detail) => ( */}
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
                      I'm motivated and driven to achieve and overcome any challenge that is in front of me. I am eager to get new experiences and learn new things. I have a passion for coding and prefer developing and problem solving in creative ways. I'm a team player with clear communication that works organized and coordinated,

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
        {/* ))} */}
    </>
  );
};

export default Intro;
