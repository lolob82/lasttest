import React from 'react'

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Headquarters & Production",
      address: "123 Nature Way, Green Valley, CA 90210",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM",
      type: "headquarters",
      icon: "🏢"
    },
    {
      id: 2,
      name: "Retail Store - Downtown",
      address: "456 Main Street, Downtown, CA 90211",
      phone: "(555) 234-5678",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      type: "retail",
      icon: "🏪"
    },
    {
      id: 3,
      name: "Wellness Center",
      address: "789 Wellness Blvd, Harmony Hills, CA 90212",
      phone: "(555) 345-6789",
      hours: "Mon-Sun: 8AM-9PM",
      type: "wellness",
      icon: "🧘‍♀️"
    }
  ]

  return (
    <section id="locations">
      <div className="container">
        <h2>Visit Us</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {locations.map(location => (
            <div key={location.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              border: '1px solid var(--light)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <span style={{ fontSize: '2.5rem' }}>{location.icon}</span>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem' }}>
                  {location.name}
                </h3>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>📍 Address:</strong> {location.address}
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>📞 Phone:</strong> {location.phone}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>🕒 Hours:</strong> {location.hours}
                </p>
              </div>
              
              <button className="btn" style={{ width: '100%' }}>
                Get Directions
              </button>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{
          background: 'var(--light)',
          padding: '4rem',
          borderRadius: '15px',
          textAlign: 'center',
          border: '2px dashed var(--secondary)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
            Interactive Map
          </h3>
          <p style={{ color: 'var(--secondary)' }}>
            Google Maps integration will be added here to show all our locations
          </p>
        </div>
      </div>
    </section>
  )
}

export default Locations