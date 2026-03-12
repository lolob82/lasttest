import React from 'react'

const Commitments = () => {
  const commitments = [
    {
      icon: "🌱",
      title: "Biodiversity Preservation",
      description: "1% of our revenue is donated to biodiversity preservation projects",
      details: "We actively support reforestation programs and partner with local conservation initiatives in the French Alps"
    },
    {
      icon: "♻️",
      title: "100% Recyclable Packaging",
      description: "All our packaging materials are fully recyclable and eco-responsible",
      details: "From glass bottles to cardboard boxes, every element is designed with environmental impact in mind"
    },
    {
      icon: "🏔️",
      title: "Active Reforestation Program",
      description: "For every product sold, we plant a tree in the French Alps",
      details: "Our partnership with local forestry cooperatives helps restore natural habitats and combat climate change"
    },
    {
      icon: "🔬",
      title: "Complete Traceability",
      description: "Full transparency from ingredient sourcing to final product",
      details: "Every batch is tracked with QR codes, allowing customers to trace their product's journey from farm to shelf"
    },
    {
      icon: "🤝",
      title: "Local Producer Partnerships",
      description: "Exclusive partnerships with French Alpine producers",
      details: "We work directly with local farmers and herbalists, ensuring fair trade and supporting rural communities"
    },
    {
      icon: "🏢",
      title: "Mission-Driven Company",
      description: "Officially certified as a Mission-Driven Company",
      details: "Our legal status commits us to social and environmental objectives beyond profit maximization"
    }
  ]

  const certifications = [
    { name: "European Organic", icon: "🌿", description: "EU Organic Certification" },
    { name: "Mission-Driven", icon: "🏢", description: "French Legal Status" },
    { name: "Carbon Neutral", icon: "🌍", description: "Net Zero Operations" },
    { name: "Fair Trade", icon: "🤝", description: "Ethical Sourcing" }
  ]

  return (
    <section id="commitments" style={{ background: 'var(--natural-white)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Commitments</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Our sustainable commitment goes beyond products. We're dedicated to preserving 
            the natural world that inspires our formulations.
          </p>
        </div>

        {/* Main commitments grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {commitments.map((commitment, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              border: '1px solid var(--accent)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                {commitment.icon}
              </div>
              <h3 style={{ 
                color: 'var(--primary)', 
                marginBottom: '1rem', 
                fontSize: '1.4rem',
                textAlign: 'center'
              }}>
                {commitment.title}
              </h3>
              <p style={{ 
                color: 'var(--earth)', 
                marginBottom: '1rem', 
                fontSize: '1.1rem',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {commitment.description}
              </p>
              <p style={{ 
                color: 'var(--secondary)', 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {commitment.details}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications section */}
        <div style={{
          background: 'linear-gradient(135deg, var(--sage), var(--primary))',
          color: 'white',
          padding: '3rem',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.8rem' }}>
            Our Certifications & Labels
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem'
          }}>
            {certifications.map((cert, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '2rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {cert.icon}
                </div>
                <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  {cert.name}
                </h4>
                <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact metrics */}
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          marginTop: '3rem',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>
            Our Environmental Impact
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--sage)', marginBottom: '0.5rem' }}>
                1,247
              </div>
              <p style={{ color: 'var(--secondary)' }}>Trees Planted</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--sage)', marginBottom: '0.5rem' }}>
                100%
              </div>
              <p style={{ color: 'var(--secondary)' }}>Recyclable Packaging</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--sage)', marginBottom: '0.5rem' }}>
                €12,450
              </div>
              <p style={{ color: 'var(--secondary)' }}>Donated to Conservation</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--sage)', marginBottom: '0.5rem' }}>
                0
              </div>
              <p style={{ color: 'var(--secondary)' }}>Carbon Footprint</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Commitments