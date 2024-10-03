import React, { useEffect, useState } from "react";
import '../reset/css/home.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Store() {
    return(
        <> 
            <div className="store">
              <section className="hero">
                <div className="container">
                  <h1>Mum Can Code Store</h1>
                  <p>Discover resources and services to support your coding journey</p>
                </div>
              </section>
        
              <div className="container">
                <div className="store-grid">
                  <div className="store-category">
                    <h2>Marketplace</h2>
                    <p>Buy and sell coding resources created by mums, for mums.</p>
                    <Link to="/marketplace" className="cta-button">Explore Marketplace</Link>
                  </div>
                  <div className="store-category">
                    <h2>Free Resources</h2>
                    <p>Access our collection of free coding tutorials, cheat sheets, and guides.</p>
                    <Link to="/free-resources" className="cta-button">View Free Resources</Link>
                  </div>
                  <div className="store-category">
                    <h2>Premium Courses</h2>
                    <p>Take your skills to the next level with our in-depth, guided courses.</p>
                    <Link to="/premium-courses" className="cta-button">Browse Courses</Link>
                  </div>
                  <div className="store-category">
                    <h2>Digital Products</h2>
                    <p>Enhance your coding workflow with our curated digital tools and templates.</p>
                    <Link to="/digital-products" className="cta-button">Shop Digital Products</Link>
                  </div>
                  <div className="store-category">
                    <h2>Web Development Services</h2>
                    <p>Professional web solutions tailored for your business needs.</p>
                    <Link to="/services" className="cta-button">View Services</Link>
                  </div>
                </div>
              </div>
            </div>
      
        
        
        
        </>
    )
}

export default Store;