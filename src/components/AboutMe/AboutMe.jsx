import "./AboutMe.css";
import { useGetAboutMeQuery, useGetHomeDetailsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import abouMeimage from "../../images/decoration/Programmer-pana.png";
import myCV from "../../images/decoration/Shalani_Chethana.pdf"
// import aboutmeimg from "../../images/logo/Programmer-pana.png"

const AboutMe = () => {
  // const { data: aboutData, isFetching } = useGetAboutMeQuery();
  // const [aboutMe, setAboutMe] = useState(aboutData);
  // const img_300 = "https://drive.google.com/uc?id=";

  // const { data: conta2 } = useGetHomeDetailsQuery();
  // const [contacts1Details, setContact2Details] = useState(conta2);
  // const cv = contacts1Details && contacts1Details.map((data1) => data1.cv_link);
  // console.log(cv);
  // console.log(conta2);

  // useEffect(() => {
  //   setAboutMe(aboutData);
  //   setContact2Details(conta2);
  // }, [aboutData, conta2]);

  return (
    <>
      {/* {aboutMe &&
        aboutMe.map((details) => ( */}
          <main id="about" >
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-lg-6 col-md-5 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  <img src={abouMeimage} alt="" />
                </div>
                <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    {/* <h2>{details.title}</h2>
                    <h3>{details.title_2}</h3> */}
                    <h2>What I expect in my caree life</h2>
                    <h3>About Me</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" class="unselectable">
                      <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800" >
                      I am excited to apply for the Associate software engineer position at your company. I have
gained valuable experience in developing, testing, and deploying software applications. Over
the past 6 months, I have successfully contributed to various projects, working collaboratively
with cross-functional teams to deliver high-quality solutions. My technical expertise includes
proficiency in programming languages such as Java, Scala, C, and C++, as well as experience
with modern software development frameworks and tools.

                      </p>
                    </div>
                  </div>

                  <div className="itscv">
                    <a
                      href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
                      download="RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        <a href={myCV} >
                          Download Cv <i class="bx bx-download"></i>
                      </a>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        {/* ))} */}
    </>
  );
};

export default AboutMe;
