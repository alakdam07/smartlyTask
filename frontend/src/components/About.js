import React from "react";
import Map from "./Map";

const About = () => {
  return (
    <div className="bg-color">
      <section>
        <div className="display">
          <div>
            <h2 className="sectionOne animated fadeIn delay-2s">
              Powering Beautifully Effective Ads
            </h2>
            <h5 className="sectionOne animated fadeIn delay-1.2s">
              Smartly.io automates every step of social advertising to unlock
              greater performance and creativity.
            </h5>
          </div>
          <div>
            <img
              src="https://www.smartly.io/hubfs/Frontpage%202019/Homepage-illustration-JULY-2019-mobile-2.png"
              alt="pic"
              style={{ width: "600px", height: "600px" }}
            />
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="display1">
          <h2
            className="animated fadeInUp delay-4s"
            style={{ color: "#21234d", fontSize: " 40px", textAlign: "center" }}
          >
            Smartly believes in Diversity, Equality and Sustainable Development.
          </h2>

          <br></br>
          <br></br>
          <img
            src="https://www.smartly.io/hubfs/Careers%20Page%202019/Careers-Picture-collage-3-min.png"
            alt="pic"
            className="image3"
          />
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section>
        <div className="display1">
          <Map />
        </div>
        <br></br>
        <h3
          className="hiding animated fadeInUp delay-3s"
          style={{ color: "#21234d", fontSize: " 30px", textAlign: "center" }}
        >
          Globalization
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default About;
