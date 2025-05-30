import "./MainSection.css";
import { Link } from "react-router-dom";
const MainSection = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero-content grid grid-two--cols">
          <div className="hero-text">
            <span className="hero-sub-title"> I am Hashim </span>
            <h1 className="hero-title">Full Stack + Developer</h1>
            <div className="hero-image addImage">
              <figure>
                <img src="/image.png" alt="" />
              </figure>
            </div>
            <p className="hero-para">
              I break down complex user experience problems to create integrity
              focussed solutions that connect billions of people
            </p>
            <div className="hero-button link">
              <a href="/my-cv.pdf" download className="hero-btn">
                Download CV
              </a>

              <div className="links">
                <Link to={"https://www.facebook.com/share/12MjeiqLxgt/"}>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/muhammad-hashim-45b54b326"}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link className="globe">
                  <i className="fa-solid fa-globe"></i>
                </Link>
                <Link to={"https://github.com/hashimgujjar447"}>
                  <i className="fa-brands fa-github"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-image deleteImage">
            <figure>
              <img src="/image.png" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
