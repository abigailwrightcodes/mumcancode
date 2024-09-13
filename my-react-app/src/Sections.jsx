import React, { useEffect, useState } from "react";
import "../src/css/sections.css";
import Navbar from "./Navbar";
import backgroundImage from "../src/assets/images/backgroundImage.png";
import sittingImage from "../src/assets/images/sittingImage.png";
import introBackgroundImage from "../src/assets/images/introBackgroundImage.png";
import experienceImage from "../src/assets/images/experienceImage.png";
function Sections() {
  return (
    <div className="sections-main-container">
      <Navbar />
      <section className="section section-welcome">
        <div className="welcome-section-container">
          <div class="welcome-col-1">
            <div className="welcome-text-container">
              <div class="welcome-text">
                <h1>Hello and Welcome to</h1>
              </div>
              <div class="welcome-logo">
                <h1>Mum can code</h1>
              </div>
            </div>
            <div class="welcome-background-img">
              <img
                src={backgroundImage}
                alt=""
                className="welcomeBackgroundImage"
              />
            </div>
          </div>

          <div class="welcome-col-2">
            <div class="intro-text">
              <p>
                Hi I'm Abigail Wright
                <br />
                Web Designer and Developer
                <br />
                Embark on an epic adventure with me - a tech-savvy mum turned
                coding superhero! From school runs to debugging sessions, my
                days are a whirlwind of challenges and triumphs, all in pursuit
                of creating my dream app. I'm on a mission to prove that with
                determination and a passion for learning, anyone can conquer the
                digital realm, no matter their starting point. Join me as I
                break barriers and champion a tech future where diversity drives
                innovation. Through late-night coding sprints and eureka
                moments, I'm not just building an app - I'm carving out a new
                path for myself and inspiring others to embrace theirtech
                aspirations. Ready to dive into this exciting journey? Let's see
                where it takes us!
              </p>
            </div>
            <div class="intro-background-img">
              {" "}
              <img
                src={introBackgroundImage}
                alt=""
                className="introBackgroundImage"
              />
            </div>
            <div class="into-cta-button">
              <button>Join my coding adventure</button>
            </div>
          </div>
          <div class="welcome-col-3">
            <div class="side-html-img">
              <img src={sittingImage} alt="" className="sideHtmlImage" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-skills">
        <div className="experience-section-container">
          <div className="experience-section-row1">
            <h1 className="experience-headline"> What can't she do?</h1>
            <p className="experience-subtext">
              A mum's secret weapon? She's a real-life superhero! I mean, if she
              can bring a whole tiny human into the world, what can't she do?
              Sky's the limit! *cue dramatic music*
            </p>
          </div>

          <div className="experience-section-row2">
            <div className="experience-col1">
              <div className="experience-img">
                <img src={experienceImage} alt="" className="experienceImage" />
              </div>
              <div className="experience-img-text">
                <h2>
                  From ABCs to APIs: Building the Future, One Block at a Time
                </h2>
              </div>
            </div>
            <div className="experience-col2">
              <div className="experience-row1">
                <div className="experience-text-1">
                  <h1>Experience</h1>
                </div>
              </div>
              <div className="experience-row2">
                <div className="experience-text-1">
                  <p>
                    As a full-stack developer, I've built a robust foundation in
                    web technologies. My expertise spans from crafting semantic
                    HTML structures and creating responsive layouts with CSS to
                    developing dynamic user interfaces using React. On the
                    server side, I leverage Node.js to build scalable back-end
                    solutions, while my proficiency in MySQL enables efficient
                    data management and complex queries. Beyond coding, I bring
                    designs to life using Figma, bridging the gap between
                    concept and implementation. My front-end toolkit extends to
                    modern JavaScript frameworks, responsive design principles,
                    accessibility best practices, and performance optimization
                    techniques. Whether it's implementing RESTful APIs,
                    integrating third-party services, or ensuring cross-browser
                    compatibility, I approach each project with a keen eye for
                    detail and a passion for creating seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
       </div>
      </section>



<section className="section section-skills">
<div className="section-skills">
            <div className="skills-section-container">
              <div className="skills-sections-col1">
                <div className="skills-grid">
                  <div className="skills-box-web-developent">
                  <div className="skills-list">
                        <h3>Web Developement</h3>
                        <div className="skill-item html">HTML</div>
                        <div className="skill-item css">CSS</div>
                        <div className="skill-item javascript">JavaScript</div>
                        <div className="skill-item react">React</div>
                        <div className="skill-item node">Node.js</div>
                        <div className="skill-item sql">MySQL</div>
                        <div className="skill-item api">APIs</div>
                  </div>
                  </div>
                  <div className="teal-box"></div>
                  <div className="skills-box-web-design">
                    <div className="skills-list">
                    <h3>Web Design</h3>
                        <div className="skill-item figma">Figma</div>
                        <div className="skill-item ux">Ux</div>
                        <div className="skill-item wireframe">Wireframing</div>
                        <div className="skill-item ui">Ui</div>
                        <div className="skill-item templates">Templates</div>
                        <div className="skill-item wordpress">Wordpress</div>
                       
                    </div>
                  </div>
                  <div className="pink-box"></div>
                </div>
              </div>


              
              <div className="skills-section-col2">
                <div className="skills-section-header"><h1>Skills</h1></div>
                <div className="skills-section-img"></div>
              </div>
            </div>
          </div>
     




</section>
      <section className="section section-about-me"></section>

      <section className="section section-projects"></section>
      <section className="section section-blog"></section>

      <section className="section section-contact"></section>
    </div>
  );
}

export default Sections;
