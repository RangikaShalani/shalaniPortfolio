import "./Services.css";
import iconImage from "../../images/decoration/FlashWork.png";
import shadowIcon from "../../images/decoration/Group-31.png";

const Services = () => {

  const serviesList = [
    { icon_image: iconImage, service_name: "Frontend & Backend", service_description: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href", learn_more: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.", shadow_icon: shadowIcon },
    { icon_image: iconImage, service_name: "UI/UX Knlolage", service_description: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href", learn_more: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.", shadow_icon: shadowIcon },
    { icon_image: iconImage, service_name: "R & D New tools", service_description: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href", learn_more: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.", shadow_icon: shadowIcon },
    { icon_image: iconImage, service_name: "Presetation", service_description: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href", learn_more: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.", shadow_icon: shadowIcon },
  ]

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service i Offer you</h2>
            <h3>Services</h3>
          </div>

          <div className="service-row">
            {serviesList &&
              serviesList.map((service) => (
                <div
                  className="my-service"
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
      </section>
    </>
  );
};

export default Services;
