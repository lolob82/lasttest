import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const images = [
    { id: 1, src: "🌿", alt: "Natural ingredients", category: "ingredients" },
    { id: 2, src: "👶", alt: "Happy baby", category: "customers" },
    { id: 3, src: "🧴", alt: "Product packaging", category: "products" },
    { id: 4, src: "🌸", alt: "Flower essence", category: "ingredients" },
    { id: 5, src: "👩‍👧‍👦", alt: "Family moments", category: "customers" },
    { id: 6, src: "🏭", alt: "Our facility", category: "behind-scenes" },
    { id: 7, src: "🍃", alt: "Herbal collection", category: "products" },
    { id: 8, src: "🌱", alt: "Growing process", category: "behind-scenes" }
  ]

  const categories = ["all", "products", "ingredients", "customers", "behind-scenes"]
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <section id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        
        {/* Category filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.5rem 1.5rem',
                border: 'none',
                borderRadius: '25px',
                background: activeCategory === category ? 'var(--primary)' : 'var(--light)',
                color: activeCategory === category ? 'white' : 'var(--dark)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}
            >
              {category.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem'
        }}>
          {filteredImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              style={{
                aspectRatio: '1',
                background: 'var(--light)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.borderColor = 'transparent'
              }}
            >
              {image.src}
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              cursor: 'pointer'
            }}
          >
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              textAlign: 'center',
              maxWidth: '500px'
            }}>
              <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>
                {selectedImage.src}
              </div>
              <h3>{selectedImage.alt}</h3>
              <p style={{ color: 'var(--secondary)', textTransform: 'capitalize' }}>
                {selectedImage.category.replace('-', ' ')}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery