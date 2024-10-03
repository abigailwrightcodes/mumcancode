import React from 'react';
import { Link } from 'react-router-dom';


function Community() {
  return (
    <div className="community-page">
      <section className="hero">
        <div className="container">
          <h1>Join Our Coding Community</h1>
          <p>Connect, learn, and grow with like-minded mums in tech</p>
          <Link to="/join" className="cta-button">Become a Member</Link>
        </div>
      </section>

      <section className="community-benefits">
        <div className="container">
          <h2>Why Join Our Community?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Peer Support</h3>
              <p>Connect with other mums on the same coding journey</p>
            </div>
            <div className="benefit-item">
              <h3>Exclusive Resources</h3>
              <p>Access member-only tutorials, webinars, and study groups</p>
            </div>
            <div className="benefit-item">
              <h3>Networking Opportunities</h3>
              <p>Build professional connections in the tech industry</p>
            </div>
            <div className="benefit-item">
              <h3>Mentorship Programs</h3>
              <p>Learn from experienced mums in tech</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-members">
        <div className="container">
          <h2>Member Spotlights</h2>
          <div className="member-grid">
            {/* Replace with actual member data */}
            <div className="member-card">
              <img src="member1.jpg" alt="Member Name" />
              <h3>Jane Doe</h3>
              <p>From beginner to front-end developer in 6 months</p>
            </div>
            <div className="member-card">
              <img src="member2.jpg" alt="Member Name" />
              <h3>Sarah Smith</h3>
              <p>Launched a successful tech startup while raising twins</p>
            </div>
            {/* Add more member cards as needed */}
          </div>
        </div>
      </section>

      <section className="community-events">
        <div className="container">
          <h2>Upcoming Community Events</h2>
          <div className="events-list">
            <div className="event-item">
              <h3>Monthly Code & Coffee Meetup</h3>
              <p>Date: Every first Saturday of the month</p>
              <p>Time: 10:00 AM - 12:00 PM</p>
              <Link to="/events/code-and-coffee" className="event-link">Learn More</Link>
            </div>
            <div className="event-item">
              <h3>Web Development Workshop</h3>
              <p>Date: July 15, 2024</p>
              <p>Time: 2:00 PM - 4:00 PM</p>
              <Link to="/events/web-dev-workshop" className="event-link">Register Now</Link>
            </div>
            {/* Add more events as needed */}
          </div>
        </div>
      </section>

      <section className="community-forum">
        <div className="container">
          <h2>Join the Conversation</h2>
          <p>Our community forum is the perfect place to ask questions, share your progress, and connect with other mums in tech.</p>
          <Link to="/forum" className="cta-button">Visit Forum</Link>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Members Say</h2>
          <div className="testimonial-grid">
            <blockquote>
              "Being part of Mum Can Code has given me the confidence to pursue a career in tech. The support from this community is incredible!"
              <footer>- Emma W., Software Developer</footer>
            </blockquote>
            <blockquote>
              "I've made lifelong friends and found my dream job through this amazing network of mums in tech."
              <footer>- Lisa T., UX Designer</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="join-cta">
        <div className="container">
          <h2>Ready to Start Your Coding Journey?</h2>
          <p>Join our community today and take the first step towards your new career in tech!</p>
          <Link to="/join" className="cta-button">Join Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Community;