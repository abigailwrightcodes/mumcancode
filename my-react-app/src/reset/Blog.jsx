import React, { useEffect, useState } from "react";
import '../reset/css/home.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../reset/css/blog.css';

function Blog() {
    return(
        <>
        <div class="blog-header">
        <h1>Mum Can Code Blog</h1>
        <p>Insights, tips, and stories for coding mums</p>
    </div>

    <nav class="category-nav">
        <button>All Posts</button>
        <button>Coding Tips</button>
        <button>Success Stories</button>
        <button>Tech Insights</button>
        <button>Work-Life Balance</button>
    </nav>

    <div class="blog-grid">
        <div class="blog-card">
          
            <div class="blog-card-content">
                <span class="blog-category">Coding Tips</span>
                <h3>10 Python Tricks Every Coding Mum Should Know</h3>
                <p>Boost your Python skills with these time-saving tips perfect for busy mums...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
        <div class="blog-card">
   
            <div class="blog-card-content">
                <span class="blog-category">Success Stories</span>
                <h3>From Mum to Tech Lead: Sarah's Inspiring Journey</h3>
                <p>Discover how Sarah balanced motherhood and coding to land her dream job...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
        <div class="blog-card">
          
            <div class="blog-card-content">
                <span class="blog-category">Tech Insights</span>
                <h3>The Rise of AI: What It Means for Coding Mums</h3>
                <p>Explore the latest AI trends and how they're shaping the future of coding...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
        <div class="blog-card">
            
            <div class="blog-card-content">
                <span class="blog-category">Work-Life Balance</span>
                <h3>5 Time Management Hacks for Coding Mums</h3>
                <p>Learn how to juggle coding projects and family life with these practical tips...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    
    </div>

    <div class="pagination">
        <button>Previous</button>
        <button>Next</button>
    </div>

    <script>
        // You can add JavaScript here for category filtering and pagination
    </script>
        
        </>
    )
}

export default Blog;