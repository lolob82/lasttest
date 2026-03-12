import React from 'react'

const Hero = () => {
  return (
    <section id="home" style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--sage) 0%, var(--primary) 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Video background placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 1
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>
          NatureMama Heritage
        </h1>
        <p style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent)' }}>
          The power of nature for your well-being
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, lineHeight: '1.6' }}>
          Born in the heart of the French Alps, we combine ancestral plant wisdom 
          with modern scientific innovation to create premium natural food supplements
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
            Discover Our Products
          </a>
          <a href="#history" className="btn" style={{ 
            fontSize: '1.2rem', 
            padding: '1rem 2.5rem',
            background: 'transparent',
            border: '2px solid white',
            color: 'white'
          }}>
            Our Story
          </a>
        </div>
      </div>
      
      {/* Placeholder for full-screen video */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '0.9rem',
        zIndex: 2,
        opacity: 0.7
      }}>
        🎥 French Alps Heritage Video • Ancestral Wisdom Meets Modern Science
      </div>
    </section>
  )
}

export default Hero