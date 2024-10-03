import React, { useEffect, useState } from "react";
import "../reset/css/home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import introBackgroundImage from "../reset/images/introBackgroundImage.png";
import cssImage from "../reset/images/cssImage.png";
import htmlImage from "../reset/images/htmlImage.png";
import laptopImage from "../reset/images/laptopImage.png";
import spendImage from "../reset/images/spendImage.png";
import talkImage from "../reset/images/talkImage.png";
function Home() {
  return (
    <>
      <div className="home">
        <section className="hero-home">
          <img src={cssImage} alt="" className="cssImage" />
          <div className="home-contain">
            <div className="text-container">
              <p>She's Raising Humans, Now She's Raising the Bar in Tech</p>
              <h1 className="Logo-font">Mum can code</h1>
              <p>Empowering mums to thrive in the world of technology</p>
            </div>
            <div className="primaryButton">
              <Link to="/free-resources" className="cta-button-home primary">
                Get Your Free Coding Guide
              </Link>
            </div>
          </div>

          <img src={htmlImage} alt="" className="htmlImage" />
        </section>

        <section className="services-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Need a Professional Website?</h2>
              <p>
                Let our team of expert mum coders bring your vision to life.
              </p>
              <Link to="/services" className="cta-button secondary">
                Explore Our Web Services
              </Link>
            </div>
            <div className="cta-image">
              {/* Add an image representing web development services */}
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="first-container">
              <div className="feature one">
                <h2>Learn to Code</h2>
                <p>
                  Access our Nap Time Crash Courses and start your coding
                  journey today.
                </p>
              </div>
              <img
                src={laptopImage}
                alt="image of laptop"
                className="laptopImage"
              />
            </div>

            <div className="second-container">
              <img
                src={spendImage}
                alt="image of laptop"
                className="spendImage"
              />

              <div className="feature two">
                <h2>Build Your Business</h2>
                <p>
                  Create and sell digital products in our thriving marketplace.
                </p>
              </div>
            </div>

            <div className="third-container">
            <div className="feature three">
              <h2>Join Our Community</h2>
              <p>
                Connect with like-minded mums and support each other in your
                tech journeys.
              </p>

       
            </div>
       <img
                src={talkImage}
                alt="image of speach bubble"
                className="talkImage"
              />

</div>
          </div>
        </section>

        <section className="crash-courses">
          <div className="container">
            <h2 className="crash-title">Nap Time Crash Courses</h2>
            <p className="crash-title">Quick, focused lessons you can complete during nap time.</p>
            <div className="course-grid">
              <div className="course-item">
                <h3>HTML Basics</h3>
                <p>Learn the fundamentals of HTML structure.</p>
                <Link to="/courses/html-basics" className="cta-button">
                  Start Course
                </Link>
              </div>
              <div className="course-item">
                <h3>CSS Styling</h3>
                <p>Master the basics of styling your web pages.</p>
                <Link to="/courses/css-styling" className="cta-button">
                  Start Course
                </Link>
              </div>
              <div className="course-item">
                <h3>JavaScript Intro</h3>
                <p>Get started with JavaScript programming.</p>
                <Link to="/courses/javascript-intro" className="cta-button">
                  Start Course
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="home-contain">
            <h2>What Our Community Says</h2>
            <blockquote>
              "Mum Can Code changed my life. I went from being a stay-at-home
              mum to launching my own tech startup. The supportive community and
              practical skills I gained were invaluable."
            </blockquote>
            <p>- Sarah M., Web Developer and Entrepreneur</p>
          </div>
        </section>

        <section className="blog-preview">
          <div className="home-contain">
            <h2>Latest from Our Blog</h2>
            <div className="blog-grid">
              <div className="blog-post">
                <h3>10 Time Management Tips for Coding Mums</h3>
                <p>
                  Learn how to balance coding and family life effectively...
                </p>
                <Link to="/blog/time-management-tips">Read More</Link>
              </div>
              <div className="blog-post">
                <h3>From Beginner to Freelancer: A Mum's Journey</h3>
                <p>
                  Discover how Emma turned her coding skills into a thriving
                  freelance career...
                </p>
                <Link to="/blog/beginner-to-freelancer">Read More</Link>
              </div>
              <div className="blog-post">
                <h3>The Rise of Mum-preneurs in Tech</h3>
                <p>
                  Explore the growing trend of mothers launching successful tech
                  startups...
                </p>
                <Link to="/blog/mumpreneurs-in-tech">Read More</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="free-resources-cta">
          <div className="home-contain">
            <h2>Start Your Coding Journey Today</h2>
            <p>
              Access our free coding resources and take the first step towards
              your tech career.
            </p>
            <Link to="/store/free-resources" className="cta-button primary">
              Get Free Resources
            </Link>
          </div>
        </section>

        <footer>
          <div class="home-contain">
            <p>&copy; 2024 Mum Can Code. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
