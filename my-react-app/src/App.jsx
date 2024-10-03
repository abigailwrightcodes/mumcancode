import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../src/reset/css/home.css';
import About from './reset/About';
import Home from './reset/Home';
import Resources from './reset/Resources';
import Blog from './reset/Blog';
import Store from './reset/Store';
import Community from './reset/Community';
import Contact from './reset/Contact';
import Marketplace from './reset/Marketplace';
import SellOnMarketplace from './reset/SellMarketplace';
import Services from './reset/Services';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
          
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-resources" element={<Resources />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/sell" element={<SellOnMarketplace />} />
          <Route path="/services" element={<Services />} />
          
          {/* Add routes for other pages when they're ready */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
