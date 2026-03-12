import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mother of 2",
      text: "NatureMama products have been a game-changer for our family. My kids love the gentle formulas, and I love knowing they're safe and natural.",
      rating: 5,
      avatar: "👩"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "New Dad",
      text: "As a first-time parent, I was overwhelmed by product choices. NatureMama made it easy with their pure, effective solutions.",
      rating: 5,
      avatar: "👨"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Wellness Enthusiast",
      text: "The herbal tea collection is amazing! Each blend is perfectly crafted and has become part of my daily wellness routine.",
      rating: 5,
      avatar: "👩‍🦱"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Father of 3",
      text: "Quality products that actually work. Our whole family uses NatureMama products, and we couldn't be happier with the results.",
      rating: 5,
      avatar: "👨‍🦲"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--light) 0%, white 100%)',
      padding: '4rem 0'
    }}>
      <div className="container">
        <h2>What Our Customers Say</h2>
        
        <div style={{ 
          position: 'relative', 
          maxWidth: '800px', 
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: '15px'
        }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{
                  minWidth: '100%',
                  padding: '3rem',
                  background: 'white',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {testimonial.avatar}
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>⭐</span>
                  ))}
                </div>
                
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontStyle: 'italic', 
                  marginBottom: '2rem',
                  color: 'var(--secondary)',
                  lineHeight: '1.6'
                }}>
                  "{testimonial.text}"
                </p>
                
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {testimonial.name}
                </h4>
                <p style={{ color: 'var(--secondary)' }}>
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              fontSize: '1.5rem'
            }}
          >
            ←
          </button>
          
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              fontSize: '1.5rem'
            }}
          >
            →
          </button>
        </div>

        {/* Dots indicator */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.5rem', 
          marginTop: '2rem' 
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? 'var(--primary)' : 'var(--secondary)',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials