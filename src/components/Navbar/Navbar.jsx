import "./Navbar.css";
import Main from "./nav";
import homeIcon from "../../images/logo/w-sing.png"
import { useState } from "react";

const Navbar = () => {
  // const [datavalue, setDatavalue] =useState("home");
  // const redText = (pageValue) => {
  //   setDatavalue(pageValue);
  //   console.log(datavalue);
  // };
  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <Main />
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu">jhhsjas</i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <a href="#home">
                  <img
                    className="nav-homeIcon-img"
                    src={homeIcon}
                    alt=""
                    onClick={() => setActiveLink("home")}
                  />
                </a>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("home")}
                    className={activeLink === "home" ? "active" : ""}

                  >
                    <a href="#home"> Home</a>
                  </li>

                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("about")}
                    className={activeLink === "about" ? "active" : ""}
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("work")}
                    className={activeLink === "work" ? "active" : ""}
                  >
                    <a href="#work">My Work</a>
                  </li>
                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("skills")}
                    className={activeLink === "skills" ? "active" : ""}
                  >
                    <a href="#skills">Skills</a>
                  </li>

                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("services")}
                    className={activeLink === "services" ? "active" : ""}
                  >
                    <a href="#services">Services</a>
                  </li>

                  <li
                    // data-aos="fade-down"
                    data-aos-duration="200"
                    onClick={() => setActiveLink("contact")}
                    className={activeLink === "contact" ? "active" : ""}
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
