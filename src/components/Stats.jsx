import React, { useState, useEffect } from 'react'

const Stats = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    products: 0,
    years: 0,
    reviews: 0
  })

  const finalCounts = {
    customers: 10000,
    products: 150,
    years: 15,
    reviews: 2500
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalCounts).map(key => {
      const increment = finalCounts[key] / steps
      let currentCount = 0

      return setInterval(() => {
        currentCount += increment
        if (currentCount >= finalCounts[key]) {
          currentCount = finalCounts[key]
          clearInterval(intervals.find(interval => interval === this))
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }))
      }, stepDuration)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    { key: 'customers', label: 'Happy Customers', icon: '👥', suffix: '+' },
    { key: 'products', label: 'Natural Products', icon: '🌿', suffix: '+' },
    { key: 'years', label: 'Years of Experience', icon: '⭐', suffix: '' },
    { key: 'reviews', label: '5-Star Reviews', icon: '💝', suffix: '+' }
  ]

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      color: 'white',
      padding: '4rem 0'
    }}>
      <div className="container">
        <h2 style={{ color: 'white', marginBottom: '3rem' }}>Our Impact</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map(stat => (
            <div key={stat.key} style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: 'var(--accent)'
              }}>
                {counts[stat.key].toLocaleString()}{stat.suffix}
              </div>
              <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats