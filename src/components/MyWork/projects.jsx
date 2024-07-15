import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectimage from "../../images/decoration/project-01.png"
import fitbotimage from "../../images/decoration/Fitbot.jpg"
import flashworkimage from "../../images/decoration/FlashWork.png"
import booklabimage from "../../images/decoration/BookLab.png"

const Projects = () => {
  const projectsDetails = [
    { about_avatar: fitbotimage, language_used: ["HTML |", " CSS |", " JavaScript |", " JQuery |", " AjAx |", " Java |", " MySQL"], Project_info: "FitBot is a gym management system. we developed it to handle the gym members, and branches and store the records about gym equipment and machines and their maintainers. Did all CRUD, payment, and form validation, and used a sorting algorithm to complete that project.", demo_link: "https://dribbble.com/shots/22705353-GYM-Management-System-Landing-page-and-a-few-other-similar-page ", project_link: "https://github.com/FITBOT-Gym-Management-System" },
    { about_avatar: flashworkimage, language_used: ["Node js + Express |", " React |", " TypeScript |", " Material UI |", " MySQL"], Project_info: "Flashwork is a contract basic job advertisements and part-time employees hearing platform. This is a mobile responsive web application. In this, users can publish the advertisements and they also can hear the website registered working employees. ", demo_link: "https://dribbble.com/shots/22692811-Online-Job-Advertisement-Site", project_link: "https://github.com/Flashwork-G28" },
    { about_avatar: booklabimage, language_used: ["Node Js"," React |", " TypeScript |" ," Bootstrap |", " MySQL"], Project_info: "Book lab is a Library management system for managing Book borrow details and storing the Books. Also, the Book lab was given the feature to request the borrow before coming to the library. Users can search their wanted book availability before they come to the Library.", demo_link: "https://dribbble.com/shots/22692811-Online-Job-Advertisement-Site", project_link: "https://github.com/Flashwork-G28" },
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
        <h2>Check Out My Contibuted Projects</h2>

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
