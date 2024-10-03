import React, { useEffect, useState } from "react";
import '../reset/css/home.css'
import '../reset/css/about.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function About() {
    return(
        <>

    <section class="aboutHero">
        <div class="container">
            <h1>About Mum Can Code</h1>
            <p>Our journey of empowering mums in the world of technology</p>
        </div>
    </section>

    <section class="founder-section">
        <div class="container">
           
            <div>
                <h2>Meet Our Founder</h2>
                <p>Hi, I'm <span className="Logo-font">Abigail Wright</span>, the creator of Mum Can Code. As a mother, partner, and carer, I understand the unique challenges that come with balancing family responsibilities and career aspirations. My journey into the world of coding began as a search for flexible work options, but it quickly became a passion and a path to empowerment.</p>
                <p>Through Mum Can Code, I aim to share the transformative power of technology with other mums, helping them discover new opportunities and build the future they envision for themselves and their families.</p>
            </div>
        </div>
    </section>

    <section class="timeline-section">
        <div class="container">
            <h2>The Birth of Mum Can Code: A Story of Resilience and Empowerment</h2>
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="content">
                        <h3>A Journey of Love and Responsibility</h3>
                        <p>Life took an unexpected turn when my partner was diagnosed with schizophrenia. This new reality reshaped our lives and future plans, but it also instilled in me a deep sense of resilience and determination.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="content">
                        <h3>Embracing Motherhood</h3>
                        <p>When we were blessed with two beautiful children, my world expanded in ways I never imagined. Balancing the roles of mother and carer was demanding, but it also fueled my desire to create a stable and thriving future for my family.</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="content">
                        <h3>Discovering the World of Code</h3>
                        <p>That's when I discovered coding. It was like a light bulb moment. Here was a skill that could open doors to flexible work opportunities, allow me to exercise my creativity, and potentially pave the way to financial stability.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="content">
                        <h3>The Learning Journey</h3>
                        <p>I threw myself into learning, squeezing in study time during nap times, late nights, and any spare moment I could find. It wasn't easy juggling family responsibilities with my newfound passion, but with each line of code I wrote, I felt myself growing stronger and more confident.</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="content">
                        <h3>Mum Can Code: A Dream Realized</h3>
                        <p>Today, Mum Can Code is more than just a platform – it's a movement. It's a space where mums can come to learn, grow, and support each other. Where they can discover that they're capable of so much more than they ever imagined.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="values-section">
        <div class="container">
            <h2>Our Core Values</h2>
            <div class="values-grid">
                <div class="value-item">
                    <h3>Empowerment</h3>
                    <p>Unlocking potential in every mum</p>
                </div>
                <div class="value-item">
                    <h3>Flexibility</h3>
                    <p>Adapting to the needs of busy mums</p>
                </div>
                <div class="value-item">
                    <h3>Community</h3>
                    <p>Supporting and uplifting each other</p>
                </div>
                <div class="value-item">
                    <h3>Innovation</h3>
                    <p>Embracing new technologies and methods</p>
                </div>
                <div class="value-item">
                    <h3>Inclusivity</h3>
                    <p>Welcoming mums from all backgrounds</p>
                </div>
            </div>
        </div>
    </section>

    <section class="about-cta-section">
        <div class="container">
            <h2>Ready to Start Your Coding Journey?</h2>
            <p>Join our community of mums who are transforming their lives through code.</p>
            <a href="#" class="about-cta-button">Get Your Free Coding Guide</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Mum Can Code. All rights reserved.</p>
        </div>
    </footer>
        </>
    )
}

export default About;