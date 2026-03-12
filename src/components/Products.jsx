import React from 'react'

const Products = ({ addToCart }) => {
  const productLines = [
    {
      id: 1,
      name: "Vitality Line",
      subtitle: "Natural Energy Boosters",
      price: "€29.90",
      originalPrice: "€35.00",
      image: "⚡",
      description: "Cold-extracted natural ingredients to boost your daily energy and vitality",
      features: ["Ginseng & Rhodiola", "B-Complex Vitamins", "30-day treatment", "Morning formula"],
      certification: "🌿 Organic Certified"
    },
    {
      id: 2,
      name: "Serenity Line",
      subtitle: "Anti-Stress Solutions",
      price: "€32.90",
      originalPrice: "€38.00",
      image: "🧘‍♀️",
      description: "Synergistic blend of adaptogenic plants for natural stress management",
      features: ["Ashwagandha & Passionflower", "Magnesium Complex", "Evening formula", "Sleep support"],
      certification: "🌿 Organic Certified"
    },
    {
      id: 3,
      name: "Immunity Line",
      subtitle: "Natural Defense Reinforcement",
      price: "€27.90",
      originalPrice: "€33.00",
      image: "🛡️",
      description: "Strengthen your natural defenses with our immune-supporting formula",
      features: ["Echinacea & Elderberry", "Vitamin C & Zinc", "Year-round protection", "Family formula"],
      certification: "🌿 Organic Certified"
    },
    {
      id: 4,
      name: "Children's Line",
      subtitle: "Supplements for Younger Users",
      price: "€24.90",
      originalPrice: "€29.00",
      image: "👶",
      description: "Gentle, natural supplements specially formulated for children's needs",
      features: ["Natural fruit flavors", "Age-appropriate dosing", "No artificial additives", "Pediatrician approved"],
      certification: "🌿 Organic Certified"
    }
  ]

  return (
    <section id="products" style={{ background: 'var(--light)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Products</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Premium natural food supplements combining ancestral plant wisdom with modern scientific innovation. 
            Mid-to-premium range, accessible yet high-quality.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem',
          marginTop: '3rem'
        }}>
          {productLines.map(product => (
            <div key={product.id} style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid var(--accent)',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            >
              {/* Certification badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'var(--sage)',
                color: 'white',
                padding: '0.3rem 0.8rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {product.certification}
              </div>

              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                {product.image}
              </div>
              
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                {product.name}
              </h3>
              
              <p style={{ color: 'var(--earth)', marginBottom: '1rem', fontWeight: '500' }}>
                {product.subtitle}
              </p>
              
              <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {product.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '2rem' }}>
                {product.features.map((feature, index) => (
                  <div key={index} style={{
                    background: 'var(--natural-white)',
                    padding: '0.5rem 1rem',
                    margin: '0.3rem',
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '0.9rem',
                    color: 'var(--primary)'
                  }}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 'bold', 
                    color: 'var(--primary)' 
                  }}>
                    {product.price}
                  </span>
                  <span style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--secondary)', 
                    textDecoration: 'line-through' 
                  }}>
                    {product.originalPrice}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginTop: '0.5rem' }}>
                  One month treatment
                </p>
              </div>

              <button 
                onClick={() => addToCart(product)}
                className="btn" 
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Product characteristics */}
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          marginTop: '4rem',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '2rem' }}>
            Our Unique Process
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❄️</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Cold Extraction</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>
                Preserves active ingredient integrity
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Synergistic Formula</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>
                Scientifically optimized combinations
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Natural Preservation</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>
                No artificial preservatives
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Eco-Packaging</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>
                100% recyclable materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products