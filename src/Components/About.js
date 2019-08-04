import React from "react";
import './About.css';
import mypic from './abouts.jpg'
import linkedin from "./linkedin.png";
import fiverr from './fiverr.png';
import github from './github.png';


const About = () => {
  return (
    <div>
      <div className="page">
        <p className="para">
          Nipun upekshana, Self learner,technolgy enthusiastic, an
          entrepreneur and a Graphic designer. Most recently, I've learned to
          build modern day web applications using React JS, and Javascript.
          I'm interested in seeking full-time or contract employment building
          the next Great things for the current world.
        </p>
        <div className="imgcon shadow-5">
          <img className="pic" src={mypic} alt="profile" />
        </div>
        <div>
          <h2>Skills</h2>
          <p>
            Adobe Photoshop, Lightroom, React JS, HTML5, CSS, Javascript,
            Angular JS, Git
          </p>
        </div>
        <div className="icons">
          <a href="https://www.fiverr.com/nipz20">
            <img className="fiverr" src={fiverr} alt="fiver" />
          </a>
          <a href="https://github.com/nipunupekshana">
            <img img className="github" src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/nipun-upekshana/">
            <img img className="linkedin" src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>

      <footer className="tc foo">Nipun upekshana © Recipes, 2019</footer>
    </div>
  );
};

export default About;
