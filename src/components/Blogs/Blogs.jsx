import React from 'react';
import "./Blogs.css";
import iconImage from "../../images/decoration/FlashWork.png";
import shadowIcon from "../../images/decoration/Group-31.png";

const Blogs = () => {

  const serviesList = [
    { icon_image: iconImage, service_name: "Frontend & Backend", service_description: "", shadow_icon: shadowIcon },
    { icon_image: iconImage, service_name: "UI/UX Knowledge", service_description: "", shadow_icon: shadowIcon },
    { icon_image: iconImage, service_name: "R & D New tools", service_description: "", shadow_icon: shadowIcon },
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
                    {/* <p className="service-info">{service.service_description}</p> */}
                  </div>
                ))}
            </div>
          </div>

        </div>
        <p><a class="fs-6 fst-italic mb-5 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Underline opacity 10</a></p>



      </section>
    </>
  );
};

export default Blogs;
