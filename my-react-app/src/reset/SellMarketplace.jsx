import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SellOnMarketplace() {
  const [step, setStep] = useState('account');
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: ''
  });

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Account Data:', accountData);
    console.log('Product Data:', productData);
    // Move to success state
    setStep('success');
  };

  return (
    <div className="sell-on-marketplace">
      <h1>Sell on Mum Can Code Marketplace</h1>

      <div className="sell-process">
        <div className={`step ${step === 'account' ? 'active' : ''}`}>1. Create Account</div>
        <div className={`step ${step === 'product' ? 'active' : ''}`}>2. List Your Product</div>
        <div className={`step ${step === 'success' ? 'active' : ''}`}>3. Start Selling!</div>
      </div>

      {step === 'account' && (
        <form onSubmit={() => setStep('product')} className="account-form">
          <h2>Create Your Seller Account</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={accountData.name}
              onChange={handleAccountChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={accountData.email}
              onChange={handleAccountChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={accountData.password}
              onChange={handleAccountChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={accountData.confirmPassword}
              onChange={handleAccountChange}
              required
            />
          </div>
          <button type="submit">Next: List Your Product</button>
        </form>
      )}

      {step === 'product' && (
        <form onSubmit={handleSubmit} className="product-form">
          <h2>List Your Product</h2>
          <div className="form-group">
            <label htmlFor="title">Product Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleProductChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleProductChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleProductChange}
              required
            >
              <option value="">Select a category</option>
              <option value="templates">Templates</option>
              <option value="ebooks">eBooks</option>
              <option value="graphics">Graphics</option>
              <option value="code">Code</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price ($):</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleProductChange}
              min="0.99"
              step="0.01"
              required
            />
          </div>
          <button type="submit">List My Product</button>
        </form>
      )}

      {step === 'success' && (
        <div className="success-message">
          <h2>Congratulations!</h2>
          <p>Your product has been successfully listed on the Mum Can Code Marketplace.</p>
          <Link to="/marketplace" className="cta-button">View Marketplace</Link>
        </div>
      )}

      <div className="selling-benefits">
        <h2>Why Sell on Mum Can Code Marketplace?</h2>
        <ul>
          <li>Reach a community of tech-savvy mums</li>
          <li>Keep 80% of your sales</li>
          <li>Get support in marketing your products</li>
          <li>Join a supportive community of creators</li>
        </ul>
      </div>
    </div>
  );
}

export default SellOnMarketplace;