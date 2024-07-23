import React from 'react';
import "./Blogs.css";
import Cicd from "../../images/blog/CiCd.png";
import EmailServices from "../../images/blog/FreeEmailServices.png";
import MachineLearning from "../../images/blog/MachineLearning.png";
import shadowIcon from "../../images/decoration/Group-31.png";

const Blogs = () => {

  const serviesList = [
    { icon_image: EmailServices, service_name: "Make email integration easy in your React project with EmailJS", service_description: "In the world of React projects, it’s important to find the right tools to streamline your workflow. One such tool that can make life easier is EmailJS, an easy-to-use email service that requires no trouble on the server side. In this blog, we’ll introduce you to EmailJS and how it can be a game-changer for sending emails in your React applications. Why EmailJS for React? EmailJS stands out for several reasons:", shadow_icon: shadowIcon },
    { icon_image: Cicd, service_name: "How to automate the delivery process with CI/CD pipeline?", service_description: "Intoday’s rapidly evolving technology environment, where businesses demand high-quality software delivery at breakneck speeds, Continuous Integration and Continuous Delivery (CI/CD) pipelines have emerged as indispensable tools These pipelines generate code integration, testing, and deployment processes are automated They can therefore. Let’s examine the complexities of CI/CD pipelines and explore how they are changing software development.", shadow_icon: shadowIcon },
    { icon_image: MachineLearning, service_name: "Machine Learning Power of Supervised Learning & Unsupervised Learning", service_description: "Machine learning is a transformative field that enables computers to learn from data and make intelligent decisions. Let's discuss two main broader classes such as 1. Supervised Learning and 2. Unsupervised Learning In this blog, we’ll dive into these two approaches, explore their contrasts, and applications, and shed light on how they drive the creation in various industries.", shadow_icon: shadowIcon },
  ]

  return (
    <>
      <section id="blogs" className='blogs'>
        <h3>Blogs</h3>
        <h2 className="text-center mb-5">Believe in yourself;<br />knowledge is the greatest weapon.</h2>
        <div className="container">
          <div className="blog-cintainer">
            <div className="blog-row">
              {serviesList &&
                serviesList.map((service) => (
                  <div
                    className="my-blogs"
                    key={service.id}
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <img src={`${service.icon_image}`} className="blog-image" alt="" />
                    <h4 className="web">{service.service_name}</h4>
                    <p className="service-info">{service.service_description}</p>
                  </div>
                ))}
            </div>
          </div>

        </div>
        <p><a class="fs-3 fst-italic mb-5 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://medium.com/@rangika2520">more ...</a></p>



      </section>
    </>
  );
};

export default Blogs;
