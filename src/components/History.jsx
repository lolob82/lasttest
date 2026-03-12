import React from 'react'

const History = () => {
  const timeline = [
    {
      year: "2023",
      title: "Born in the French Alps",
      description: "Founded with a vision to democratize access to high-quality natural solutions while preserving natural resources for future generations",
      icon: "🏔️"
    },
    {
      year: "2023",
      title: "Ancestral Wisdom Meets Science",
      description: "Developed our patented extraction process preserving the integrity of active ingredients, combining traditional knowledge with modern innovation",
      icon: "🧬"
    },
    {
      year: "2023",
      title: "European Organic Certification",
      description: "Achieved European organic certification and Mission-Driven Company label, establishing complete traceability of our ingredients",
      icon: "🌿"
    },
    {
      year: "2024",
      title: "Premium Product Lines Launch",
      description: "Launched our four signature lines: Vitality, Serenity, Immunity, and Children's supplements with exclusive partnerships with local producers",
      icon: "✨"
    },
    {
      year: "2024",
      title: "Sustainable Commitment",
      description: "Implemented 1% revenue donation to biodiversity preservation, 100% recyclable packaging, and active reforestation program",
      icon: "♻️"
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched personalized online consultations and ecological loyalty program, strengthening our direct relationship with customers",
      icon: "💻"
    }
  ]

  return (
    <section id="history" style={{ background: 'var(--natural-white)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our History: A Family Passion Passed Down Through Generations</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Born in the heart of the French Alps, NatureMama Heritage embodies the meeting 
            of ancestral plant wisdom and modern scientific innovation
          </p>
        </div>

        {/* Family Story Photo Inserts */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {/* Roots - Family Tradition */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Photo placeholder */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #8fbc8f, #556b2f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white'
            }}>
              👨‍👩‍👧‍👦
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{
                background: 'var(--sage)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                Roots
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                Family Tradition
              </h3>
              <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                A family passion for natural remedies passed down through generations 
                in the French countryside.
              </p>
            </div>
          </div>

          {/* 2023 - Foundation */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Photo placeholder */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #7a8471, #9caf88)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white'
            }}>
              🏔️
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{
                background: 'var(--primary)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                2023
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                Foundation
              </h3>
              <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                NatureMama Heritage was born from the meeting of ancestral secrets 
                and modern scientific validation.
              </p>
            </div>
          </div>

          {/* Today - Excellence */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Photo placeholder */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #8b7355, #f5f5f0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white'
            }}>
              🌿
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{
                background: 'var(--earth)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                Today
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                Excellence
              </h3>
              <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                High-quality, certified organic natural food supplements, 
                made in France with complete traceability.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {timeline.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '30px',
                  top: '70px',
                  width: '3px',
                  height: '80px',
                  background: 'linear-gradient(to bottom, var(--sage), var(--primary))',
                  zIndex: 1
                }}></div>
              )}
              
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--sage), var(--primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginRight: '2rem',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                {item.icon}
              </div>
              
              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  border: '1px solid var(--accent)'
                }}>
                  <div style={{ 
                    color: 'var(--earth)', 
                    fontWeight: 'bold', 
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem'
                  }}>
                    {item.year}
                  </div>
                  <h3 style={{ 
                    color: 'var(--primary)', 
                    marginBottom: '1rem',
                    fontSize: '1.4rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--secondary)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy section */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary), var(--sage))',
          color: 'white',
          padding: '3rem',
          borderRadius: '20px',
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            Our Philosophy & Mission
          </h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            NatureMama Heritage is committed to creating food supplements of excellence, 
            in harmony with nature and respectful of the environment. Our mission is to 
            democratize access to high-quality natural solutions while preserving natural 
            resources for future generations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default History