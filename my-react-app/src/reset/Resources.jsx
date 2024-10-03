
import React, { useEffect, useState } from "react";
import '../reset/css/resources.css'



function Resources() {
    return(

<>
<div class="header">
<h1>Mum Can Code Resources</h1>
<p>Empowering tools for your coding journey</p>
</div>

<div class="resources-section">
<h2>Nap Time Crash Courses</h2>
<p>Quick, focused lessons you can complete during nap time. Each course is designed to teach you a specific skill in 15-30 minutes.</p>
<div class="crash-course-grid">
    <div class="crash-course-item">
        <div class="crash-course-icon">💻</div>
        <span class="time-tag">15 min</span>
        <h3>HTML Basics</h3>
        <p>Learn the fundamentals of HTML structure.</p>
        <a href="#" class="btn">Start Course</a>
    </div>
    <div class="crash-course-item">
        <div class="crash-course-icon">🎨</div>
        <span class="time-tag">20 min</span>
        <h3>CSS Styling</h3>
        <p>Master the basics of styling your web pages.</p>
        <a href="#" class="btn">Start Course</a>
    </div>
    <div class="crash-course-item">
        <div class="crash-course-icon">🧮</div>
        <span class="time-tag">25 min</span>
        <h3>JavaScript Intro</h3>
        <p>Get started with JavaScript programming.</p>
        <a href="#" class="btn">Start Course</a>
    </div>
    <div class="crash-course-item">
        <div class="crash-course-icon">📱</div>
        <span class="time-tag">30 min</span>
        <h3>Responsive Design</h3>
        <p>Learn to make your sites mobile-friendly.</p>
        <a href="#" class="btn">Start Course</a>
    </div>
</div>
</div>

<div class="resources-section">
<h2>Featured Resources</h2>
<div class="resource-grid">
    <div class="resource-item">
        <div class="resource-icon">📘</div>
        <span class="free-tag">FREE</span>
        <h3>Intro to Web Development for Mums</h3>
        <p>Start your coding journey with our comprehensive guide.</p>
        <a href="#" class="btn">Download Now</a>
    </div>
    <div class="resource-item">
        <div class="resource-icon">📚</div>
        <span class="paid-tag">PAID</span>
        <h3>Advanced Web Dev for Busy Mums</h3>
        <p>Take your skills to the next level with our in-depth ebook.</p>
        <a href="#" class="btn">Buy Now $19.99</a>
    </div>
</div>
</div>

<div class="resources-section">
<h2>Cheatsheets</h2>
<div class="resource-grid">
    <div class="resource-item">
        <div class="resource-icon">📄</div>
        <span class="free-tag">FREE</span>
        <h3>HTML Basics Cheatsheet</h3>
        <p>Quick reference for essential HTML tags.</p>
        <a href="#" class="btn">Download</a>
    </div>
    <div class="resource-item">
        <div class="resource-icon">📄</div>
        <span class="free-tag">FREE</span>
        <h3>CSS Flexbox Cheatsheet</h3>
        <p>Master flexible layouts with this handy guide.</p>
        <a href="#" class="btn">Download</a>
    </div>
    <div class="resource-item">
        <div class="resource-icon">📄</div>
        <span class="paid-tag">PAID</span>
        <h3>JavaScript Functions Cheatsheet</h3>
        <p>Comprehensive guide to JS functions and methods.</p>
        <a href="#" class="btn">Buy Now $4.99</a>
    </div>
    <div class="resource-item">
        <div class="resource-icon">📄</div>
        <span class="paid-tag">PAID</span>
        <h3>Responsive Design Cheatsheet</h3>
        <p>Create mobile-friendly sites with these tips and tricks.</p>
        <a href="#" class="btn">Buy Now $4.99</a>
    </div>
</div>
</div>

<div class="resources-section">
<h2>Why Choose Our Resources?</h2>
<ul>
    <li>Tailored for busy mums with limited study time</li>
    <li>Practical, real-world examples</li>
    <li>Clear, easy-to-follow explanations</li>
    <li>Designed to build your confidence in coding</li>
    <li>Nap Time Crash Courses for quick, focused learning</li>
</ul>
</div>

</>
)
}
export default Resources;