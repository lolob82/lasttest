import React, { useState } from 'react'
import Hero from './components/Hero'
import History from './components/History'
import Products from './components/Products'
import Commitments from './components/Commitments'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId 
          ? { ...item, quantity }
          : item
      ))
    }
  }

  return (
    <div className="App">
      <nav>
        <div className="container">
          <h1>NatureMama Heritage</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', margin: 0 }}>
            The power of nature for your well-being
          </p>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#history">Our History</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#commitments">Our Commitments</a></li>
            <li>
              <button 
                onClick={() => setShowCart(!showCart)}
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Hero />
      <History />
      <Products addToCart={addToCart} />
      <Commitments />
      
      {showCart && (
        <ShoppingCart 
          items={cartItems}
          onClose={() => setShowCart(false)}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}

      <footer style={{ background: 'var(--primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>NatureMama Heritage</h3>
            <p style={{ opacity: 0.9 }}>Born in the French Alps • Natural Excellence Since 2023</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Contact</h4>
              <p>contact@naturemamaheritage.com</p>
              <p>+33 1 23 45 67 89</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Certifications</h4>
              <p>🌿 European Organic Certified</p>
              <p>🏢 Mission-Driven Company</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Follow Us</h4>
              <p>Instagram • Facebook • LinkedIn</p>
            </div>
          </div>
          <p style={{ opacity: 0.7 }}>&copy; 2024 NatureMama Heritage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App