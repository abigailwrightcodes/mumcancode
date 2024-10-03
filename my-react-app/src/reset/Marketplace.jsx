import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../reset/css/marketplace.css';


// Mock data for products
const mockProducts = [
  { id: 1, title: "Responsive Website Template", category: "templates", price: 29.99, author: "Jane Doe", rating: 4.5 },
  { id: 2, title: "JavaScript for Mums eBook", category: "ebooks", price: 19.99, author: "Sarah Smith", rating: 4.8 },
  { id: 3, title: "CSS Animation Pack", category: "graphics", price: 14.99, author: "Emma Johnson", rating: 4.2 },
  { id: 4, title: "React Components Library", category: "code", price: 39.99, author: "Lisa Brown", rating: 4.7 },
  // Add more mock products as needed
];

function Marketplace() {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'all' || product.category === categoryFilter)
  );

  return (
    <div className="marketplace">
      <header className="marketplace-header">
        <h1>Mum Can Code Marketplace</h1>
        <p>Discover and share digital products created by mums in tech</p>
      </header>

      <section className="marketplace-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="category-filter">
          <select value={categoryFilter} onChange={handleCategoryFilter}>
            <option value="all">All Categories</option>
            <option value="templates">Templates</option>
            <option value="ebooks">eBooks</option>
            <option value="graphics">Graphics</option>
            <option value="code">Code</option>
          </select>
        </div>
        <Link to="/marketplace/sell" className="sell-button">Sell Your Product</Link>
      </section>

      <section className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`https://via.placeholder.com/150?text=${product.title}`} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="author">By {product.author}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="rating">
              Rating: {product.rating} / 5
            </div>
            <Link to={`/marketplace/product/${product.id}`} className="view-button">View Details</Link>
          </div>
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="no-results">No products found. Try adjusting your search or filter.</p>
      )}

      <section className="marketplace-info">
        <h2>Why Sell on Mum Can Code Marketplace?</h2>
        <ul>
          <li>Reach a community of tech-savvy mums</li>
          <li>Keep 80% of your sales</li>
          <li>Get support in marketing your products</li>
          <li>Join a supportive community of creators</li>
        </ul>
        <Link to="/marketplace/sell" className="cta-button">Start Selling Today</Link>
      </section>
    </div>
  );
}

export default Marketplace;