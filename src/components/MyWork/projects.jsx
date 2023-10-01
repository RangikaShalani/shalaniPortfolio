import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectimage from "../../images/decoration/project-01.png"
import fitbotimage from "../../images/decoration/Fitbot.jpg"
import flashworkimage from "../../images/decoration/FlashWork.png"

const Projects = () => {
  const projectsDetails = [
    { about_avatar: fitbotimage, language_used: ["HTML |", " CSS |", " JavaScript |", " JQuery |", " AjAx |", " Java |", " MySQL"], Project_info: "I am eager to learn more about the Associate software engineer position at your company and how I can contribute to your team's goals and objectives. I would welcome the opportunity to discuss my qualifications further in an interview.", demo_link: "https://dribbble.com/shots/22705353-GYM-Management-System-Landing-page-and-a-few-other-similar-page ", project_link: "https://github.com/FITBOT-Gym-Management-System" },
    { about_avatar: flashworkimage, language_used: ["Node js + Express |", " React |", " TypeScript |", " Material UI |", " MySQL"], Project_info: "I am eager to learn more about the Associate software engineer position at your company and how I can contribute to your team's goals and objectives. I would welcome the opportunity to discuss my qualifications further in an interview.", demo_link: "https://dribbble.com/shots/22692811-Online-Job-Advertisement-Site", project_link: "https://github.com/Flashwork-G28" },
    { about_avatar: projectimage, language_used: ["sjc", "sdkc", "language"], Project_info: "I am eager to learn more about the Associate software engineer position at your company and how I can contribute to your team's goals and objectives. I would welcome the opportunity to discuss my qualifications further in an interview.", demo_link: "youtub link", project_link: "git link" },
  ]
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };


  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsDetails?.map((details) => (
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${details.about_avatar}`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={details.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
