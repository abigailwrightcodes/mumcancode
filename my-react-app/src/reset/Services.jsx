import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../reset/css/services.css';



function Services() {

    return (
        <>
   

 

    <section class="hero">
        <div class="services-container">
            <h1>Web Development and Design Services</h1>
            <p>Professional web solutions tailored for your business needs</p>
        </div>
    </section>

    <section class="services-section">
        <div class="services-container">
            <h2>Our Services</h2>
            <div class="services-grid">
                <div class="service-item">
                    <h3>Custom Website Design</h3>
                    <p>Unique, responsive designs that capture your brand's essence and engage your audience.</p>
                </div>
                <div class="service-item">
                    <h3>E-commerce Solutions</h3>
                    <p>Secure, user-friendly online stores to showcase and sell your products effectively.</p>
                </div>
                <div class="service-item">
                    <h3>WordPress Development</h3>
                    <p>Custom WordPress themes and plugins to power your content-driven website.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="process-section">
        <div class="services-container">
            <h2>Our Process</h2>
            <div class="process-steps">
                <div class="process-step">
                    <h3>1. Consultation</h3>
                    <p>We discuss your vision, goals, and requirements.</p>
                </div>
                <div class="process-step">
                    <h3>2. Design</h3>
                    <p>We create a custom design that reflects your brand.</p>
                </div>
                <div class="process-step">
                    <h3>3. Development</h3>
                    <p>We build your website with clean, efficient code.</p>
                </div>
                <div class="process-step">
                    <h3>4. Launch</h3>
                    <p>We deploy your site and provide training.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio-section">
        <div class="services-container">
            <h2>Our Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="project1.jpg" alt="Project 1"/>
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">E-commerce Site</div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="project2.jpg" alt="Project 2"/>
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">Business Website</div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="project3.jpg" alt="Project 3"/>
                    <div class="portfolio-overlay">
                        <div class="portfolio-text">Blog Design</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonial-section">
        <div class="services-container">
            <h2>What Our Clients Say</h2>
            <blockquote>
                "Mum Can Code transformed my business with a stunning website. Their understanding of my needs as a fellow mum entrepreneur was unparalleled!"
            </blockquote>
            <p>- Sarah J., Boutique Owner</p>
        </div>
    </section>

    <section class="cta-section">
        <div class="services-container">
            <h2>Ready to Start Your Web Project?</h2>
            <p>Let's create a website that works for you and your business.</p>
            <a href="#" class="cta-button">Get a Free Consultation</a>
        </div>
    </section>

    <footer>
        <div class="services-container">
            <p>&copy; 2024 Mum Can Code. All rights reserved.</p>
        </div>
    </footer>

</>

);
}


export default Services;