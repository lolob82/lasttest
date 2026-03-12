import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && name) {
      // Here you would typically send the data to your backend
      console.log('Newsletter signup:', { name, email })
      setIsSubscribed(true)
      setEmail('')
      setName('')
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      color: 'white',
      padding: '4rem 0'
    }}>
      <div className="container">
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Stay Connected with Nature
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            opacity: 0.9 
          }}>
            Get exclusive offers, wellness tips, and be the first to know about new products
          </p>

          {isSubscribed ? (
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Welcome to the NatureMama Family!</h3>
              <p>Check your email for a special welcome offer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                display: 'grid', 
                gap: '1rem', 
                marginBottom: '2rem' 
              }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    background: 'white',
                    color: 'var(--dark)'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    background: 'white',
                    color: 'var(--dark)'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Join Our Newsletter 🌿
              </button>
              
              <p style={{ 
                fontSize: '0.9rem', 
                marginTop: '1rem', 
                opacity: 0.8 
              }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}

          {/* Benefits */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💌</div>
              <p>Weekly Tips</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎁</div>
              <p>Exclusive Offers</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌟</div>
              <p>New Products</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌿</div>
              <p>Wellness Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter