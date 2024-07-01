import React from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const resume_link = "https://drive.google.com/file/d/1rVSg58rjrM7u0ySVkuiUnoQAJbbVNBs8/view?usp=sharing";

  function handleclick() {
    window.open(resume_link, "_blank");
  }
  
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Anurag 
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleclick}>Download Resume</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
