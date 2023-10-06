import "./AboutMe.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import abouMeimage from "../../images/decoration/Programmer-pana.png";
import myCV from "../../images/decoration/Shalani_Chethana.pdf"


const AboutMe = () => {

  return (
    <>
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
                <h2>What I expect in my caree life</h2>
                <h3>About Me</h3>
              </div>
              <div className="about-description">
                <div id="foo" unselectable="on" class="unselectable">
                  <p
                    className="myinfo"
                    data-aos="fade-down"
                    data-aos-duration="1800" >
                    Hi, I am a full-stack developer who is creating my own version of the digital world gradually. 
                    I like to undertake challenges and problem solving even if it's hard as well and I am the type of person who enjoys coding. 
                    I am self-motivated, and hardworking, and try to learn new technologies while living IT industry. 
                    I am building my personality and knowledge to develop high-quality web and mobile applications for real-time problems. 
                    I hope to learn machine learning in the future and grow on that path.
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
    </>
  );
};

export default AboutMe;
