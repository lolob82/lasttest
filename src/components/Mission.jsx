import React from 'react'

const Mission = () => {
  return (
    <section id="mission">
      <div className="container">
        <h2>Our Mission</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Nurturing Families Naturally
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              At NatureMama Heritage, we believe in the power of nature to nurture and heal. 
              Our mission is to provide families with pure, natural products that support 
              wellness and create lasting memories.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Every product is crafted with love, using traditional methods passed down 
              through generations, combined with modern safety standards.
            </p>
            
            {/* YouTube video placeholder */}
            <div style={{
              background: '#f0f0f0',
              padding: '3rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px dashed var(--secondary)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📺</div>
              <p>YouTube Video: "Our Story & Mission"</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Embedded video will be added here
              </p>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Our Target Audience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ 
                background: 'var(--light)', 
                padding: '1.5rem', 
                borderRadius: '10px',
                borderLeft: '4px solid var(--accent)'
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>👶 New Parents</h4>
                <p>Seeking safe, natural products for their babies and toddlers</p>
              </div>
              
              <div style={{ 
                background: 'var(--light)', 
                padding: '1.5rem', 
                borderRadius: '10px',
                borderLeft: '4px solid var(--accent)'
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>🌱 Health-Conscious Families</h4>
                <p>Prioritizing wellness and natural living in their daily routines</p>
              </div>
              
              <div style={{ 
                background: 'var(--light)', 
                padding: '1.5rem', 
                borderRadius: '10px',
                borderLeft: '4px solid var(--accent)'
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>♻️ Eco-Conscious Consumers</h4>
                <p>Looking for sustainable, environmentally friendly alternatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission