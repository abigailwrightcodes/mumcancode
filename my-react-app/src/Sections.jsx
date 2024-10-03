import React, { useEffect, useState } from "react";
import "../src/css/sections.css";
import Navbar from "./Navbar";
import backgroundImage from "../src/assets/images/backgroundImage.png";
import sittingImage from "../src/assets/images/sittingImage.png";
import introBackgroundImage from "../src/assets/images/introBackgroundImage.png";
import experienceImage from "../src/assets/images/experienceImage.png";
import workImage from "../src/assets/images/workImage.png";
import aboutMeImage from "../src/assets/images/aboutMeImage.png";
import aboutLaptop from "../src/assets/images/aboutLaptop.png";
import aboutLightbulb from "../src/assets/images/aboutLightbulb.png";
import aboutTeamwork from "../src/assets/images/aboutTeamwork.png";

function Sections() {
  return (
    <div className="sections-main-container">
      <Navbar />
      <section className="section section-welcome">
        <div className="welcome-section-container">
          <div class="welcome-col-1">
            <div className="welcome-text-container">
              <div className="welcome-text">
                <h1>Hello and Welcome to</h1>
              </div>
              <div className="welcome-logo">
                <h1>Mum can code</h1>
              </div>
            </div>
            <div className="welcome-background-img">
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
                Web Developer and Designer
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
                path for myself and inspiring others to embrace their tech
                aspirations. Ready to dive into this exciting journey? Let's see
                where it takes us!
              </p>
            </div>
            <div className="intro-background-img">
              {" "}
              <img
                src={introBackgroundImage}
                alt=""
                className="introBackgroundImage"
              />
            </div>
            <div className="into-cta-button">
              <button>Join my coding adventure</button>
            </div>
          </div>
          <div className="welcome-col-3">
            <div className="side-html-img">
              <img src={sittingImage} alt="" className="sideHtmlImage" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-skills">
        <div className="experience-section-container">
          <div className="experience-section-row1">
            <h1 className="section-title">SKILLS</h1>
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

        <div className="skills"></div>
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
              <div className="skills-section-img">
                <img src={workImage} alt="" className="workImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-about-me-purple">
        <div className="page-break-container">
          <div className=" box box1"></div>
          <div className=" box box2"></div>
          <div className=" box box3"></div>
        </div>

        <div className="section-title">
          <h1>About Me</h1>
        </div>
        <div className="my-coding-journey">
          <h1>My coding Journey</h1>
          <p>
            My adventure in the world of coding began in 2022. Like many, I
            started with self-study through platforms like freeCodeCamp and
            Codecademy. Inspired by what I learned, I dove deeper, joining a
            frontend web development bootcamp with Bath Spa University. Life, as
            it often does, threw some curveballs my way. I found out I was
            pregnant with my second child, and a difficult pregnancy put my
            coding journey on pause. But I didn't let that stop me. Just before
            my son was born, I signed up for another bootcamp, which I proudly
            completed in February 2024 - juggling newborn snuggles and coding
            challenges!
          </p>

          <div className="aboutMeImageContainer">
            <img src={aboutMeImage} alt="" className="aboutMeImage" />
          </div>
        </div>
      </section>

      <section className="section section-about-me-blue">
        <div className="why-i-code">
          <h1>Why i code?</h1>
          <p>
            As a long-term unemployed carer for my partner who lives with
            schizophrenia, I realized I needed to forge a path that could
            accommodate my family's unique needs. Traditional 9-to-5 jobs aren't
            always feasible when you're juggling childcare and caring
            responsibilities. That's when I decided to take control of my future
            by learning to code and building my own app.
          </p>

          <img src={aboutLaptop} alt="laptop" className="laptopImage" />
        </div>
        <div className="why-a-blog">
          <h1>why a blog?</h1>
          <p>
            Mum Can Code is more than just a blog about coding. It's a testament
            to perseverance, adaptability, and the power of pursuing your
            dreams, no matter the obstacles. Here, I'll be: Sharing my coding
            journey and progress on building my app Holding myself accountable
            to my goals Connecting with other mums, carers, and aspiring
            developers Showing that non-traditional paths in tech are not only
            possible but valuable.
          </p>
          <img src={aboutLightbulb} alt="lightbulb" className="lightbulbImage" />
        </div>
      </section>
      <section className="section section-goal">
        <div className="the-goal">
          <h1>The goal?</h1>
          <p>
            My ultimate aim is to build an app that will be useful for other
            mums. Through this blog, I hope to build a community of supportive,
            like-minded individuals who might one day become the users of my
            app. If you're a mum, a carer, or anyone looking to change your life
            through coding - especially if you feel the traditional routes
            aren't accessible to you - you're in the right place. Let's learn,
            grow, and code together! Remember, if I can code while caring for a
            newborn, you can do it too. Mums really can code!
          </p>
          <img src={aboutTeamwork} alt="" className="teamworkImage" />
        </div>
      </section>

      <section className="section section-projects">
        <div className="projects-section-container">
          <div className="projects-left">
            <div className="section-title">
              <h1>Projects</h1>
            </div>
            <p>Text goes here</p>
          </div>

          <div className="projects-right">
            <div className="projects-grid">
              <div className="project-1 project-title">Project One</div>
              <div className="project-2 project-title">Project Two</div>
              <div className="project-3 project-title">Project Three</div>
              <div className="project-4 project-title">Project Four</div>
              <div className="project-5 project-title">Project Five</div>
              <div className="project-6 project-title">Project Six</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-blog">
        <div className="section-title">
          <h1>Blog</h1>
        </div>
      </section>

      <section className="section section-shop">
        <div className="section-title">
          <h1>Shop</h1>
        </div>
      </section>

      <section className="section section-contact">
        <div className="section-title">
          <h1>Let's Connect</h1>
        </div>
      </section>
    </div>
  );
}

export default Sections;
