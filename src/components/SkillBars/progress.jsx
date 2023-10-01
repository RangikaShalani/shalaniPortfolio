import "./progress.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";
import java from "../../images/logo/java-logo.webp";
import c from "../../images/logo/c.png";
import html from "../../images/logo/html.png";
import css from "../../images/logo/css.png";
import express from "../../images/logo/express.png";
import flutter from "../../images/logo/flutter.png";
import javascript from "../../images/logo/javascript.png";
import jest from "../../images/logo/jest.png";
import mysql from "../../images/logo/MySQL.png";
import nextJs from "../../images/logo/nextJs.webp";
import nodeJs from "../../images/logo/nodeJs.png";
import react from "../../images/logo/react.png";
import typescript from "../../images/logo/typescript.png";
import wordpress from "../../images/logo/WordPress.png";
import angular from "../../images/logo/Angular.png";

var nav = $("body");
if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {

  const icons = [
    { lang_name: "C++", icon: c, exp_level: "Bigineer" },
    { lang_name: "Java", icon: java, exp_level: "Bigineer" },
    { lang_name: "HTML", icon: html, exp_level: "Bigineer" },
    { lang_name: "CSS", icon: css, exp_level: "Bigineer" },
    { lang_name: "React", icon: react, exp_level: "Bigineer" },
    { lang_name: "Angular", icon: angular, exp_level: "Bigineer" },
    { lang_name: "Javascript", icon: javascript, exp_level: "Bigineer" },
    { lang_name: "Typescript", icon: typescript, exp_level: "Bigineer" },
    { lang_name: "Next Js", icon: nextJs, exp_level: "Bigineer" },
    { lang_name: "MYSQL", icon: mysql, exp_level: "Bigineer" },
    { lang_name: "Node Js", icon: nodeJs, exp_level: "Bigineer" },
    { lang_name: "Express", icon: express, exp_level: "Bigineer" },
    { lang_name: "Flutter", icon: flutter, exp_level: "Bigineer" },
    { lang_name: "Jest", icon: jest, exp_level: "Bigineer" },
    { lang_name: "Word Press", icon: wordpress, exp_level: "Bigineer" },
  ]

  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 7,
    },
    1380: {
      items: 9,
    },
    1512: {
      items: 10,
    },
    1665: {
      items: 11,
    },
    1767: {
      items: 12,
    },
    1870: {
      items: 13,
    },
    2024: {
      items: 14,
    },
    2265: {
      items: 15,
    },
    2380: {
      items: 15,
    },
  };

  const items = icons?.map((detal) => {
    return (
      <div className="mylang" title={detal.lang_name} key={detal.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={detal.icon} alt="" />
          </div>
          <h3>{detal.lang_name}</h3>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>
            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
