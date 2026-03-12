import React, { useState } from 'react'

const ShoppingCart = ({ items, onClose, updateQuantity, removeFromCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    country: 'France'
  })

  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', '.'))
    return sum + (price * item.quantity)
  }, 0)

  const shipping = subtotal > 50 ? 0 : 4.90
  const total = subtotal + shipping

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^(?:\+33|0)[1-9](?:[0-9]{8})$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!customerInfo.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!customerInfo.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    if (!customerInfo.city.trim()) {
      newErrors.city = 'City is required'
    }
    
    if (!customerInfo.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required'
    }
    
    if (!customerInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!validatePhone(customerInfo.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid French phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateOrderNumber = () => {
    return 'NMH-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase()
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const orderNumber = generateOrderNumber()
      const orderData = {
        orderNumber,
        customerInfo,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          subtitle: item.subtitle,
          price: item.price,
          quantity: item.quantity,
          total: (parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2)
        })),
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        total: total.toFixed(2),
        orderDate: new Date().toISOString()
      }

      // Call the API Gateway endpoint
      const apiUrl = process.env.REACT_APP_API_URL || 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod'
      
      const response = await fetch(`${apiUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      })

      if (response.ok) {
        alert(`Order placed successfully! Order number: ${orderNumber}\nYou will receive a confirmation email shortly.`)
        onClose()
        // Clear cart items (you might want to pass this function from parent)
        items.forEach(item => removeFromCart(item.id))
      } else {
        throw new Error('Failed to place order')
      }
    } catch (error) {
      console.error('Error placing order:', error)
      alert('There was an error placing your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: '2rem',
          borderBottom: '1px solid var(--accent)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>Shopping Cart</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: 'var(--secondary)'
            }}
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Your cart is empty</h3>
            <p style={{ color: 'var(--secondary)' }}>Add some products to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div style={{ padding: '2rem' }}>
              {items.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem',
                  border: '1px solid var(--accent)',
                  borderRadius: '15px',
                  marginBottom: '1rem'
                }}>
                  <div style={{ fontSize: '2.5rem', marginRight: '1.5rem' }}>
                    {item.image}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      {item.name}
                    </h4>
                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: 'var(--accent)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          cursor: 'pointer'
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'var(--primary)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          cursor: 'pointer'
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div style={{ minWidth: '80px', textAlign: 'right' }}>
                      <strong style={{ color: 'var(--primary)' }}>
                        €{(parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--secondary)',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{
              padding: '2rem',
              borderTop: '1px solid var(--accent)',
              background: 'var(--natural-white)'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Subtotal:</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--sage)', marginBottom: '0.5rem' }}>
                    🎉 Free shipping on orders over €50!
                  </p>
                )}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                  borderTop: '1px solid var(--accent)',
                  paddingTop: '0.5rem'
                }}>
                  <span>Total:</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              {!isCheckingOut ? (
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="btn"
                  style={{ width: '100%', fontSize: '1.1rem' }}
                >
                  Proceed to Checkout
                </button>
              ) : (
                <form onSubmit={handleCheckout}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                    Shipping Information
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={customerInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: errors.fullName ? '2px solid #e74c3c' : '1px solid var(--accent)',
                        borderRadius: '8px',
                        marginBottom: '0.5rem'
                      }}
                    />
                    {errors.fullName && (
                      <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: errors.email ? '2px solid #e74c3c' : '1px solid var(--accent)',
                        borderRadius: '8px',
                        marginBottom: '0.5rem'
                      }}
                    />
                    {errors.email && (
                      <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Street and House Number *"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: errors.address ? '2px solid #e74c3c' : '1px solid var(--accent)',
                        borderRadius: '8px',
                        marginBottom: '0.5rem'
                      }}
                    />
                    {errors.address && (
                      <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                        {errors.address}
                      </p>
                    )}
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Postal Code *"
                        value={customerInfo.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: errors.postalCode ? '2px solid #e74c3c' : '1px solid var(--accent)',
                          borderRadius: '8px',
                          marginBottom: '0.5rem'
                        }}
                      />
                      {errors.postalCode && (
                        <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City *"
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: errors.city ? '2px solid #e74c3c' : '1px solid var(--accent)',
                          borderRadius: '8px',
                          marginBottom: '0.5rem'
                        }}
                      />
                      {errors.city && (
                        <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g., +33 1 23 45 67 89) *"
                      value={customerInfo.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: errors.phoneNumber ? '2px solid #e74c3c' : '1px solid var(--accent)',
                        borderRadius: '8px',
                        marginBottom: '0.5rem'
                      }}
                    />
                    {errors.phoneNumber && (
                      <p style={{ color: '#e74c3c', fontSize: '0.8rem', margin: 0 }}>
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      style={{
                        flex: 1,
                        padding: '0.8rem',
                        background: 'transparent',
                        border: '2px solid var(--primary)',
                        color: 'var(--primary)',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      Back to Cart
                    </button>
                    <button
                      type="submit"
                      className="btn"
                      style={{ 
                        flex: 2,
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : `Place Order - €${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart