import React, { useState } from 'react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What's your primary concern?",
      options: [
        { value: "baby-care", label: "Baby & child care", icon: "👶" },
        { value: "wellness", label: "Personal wellness", icon: "🧘‍♀️" },
        { value: "skincare", label: "Natural skincare", icon: "✨" },
        { value: "aromatherapy", label: "Aromatherapy & relaxation", icon: "🌸" }
      ]
    },
    {
      id: 2,
      question: "What's your skin type?",
      options: [
        { value: "sensitive", label: "Sensitive", icon: "🌿" },
        { value: "dry", label: "Dry", icon: "💧" },
        { value: "oily", label: "Oily", icon: "☀️" },
        { value: "combination", label: "Combination", icon: "🌓" }
      ]
    },
    {
      id: 3,
      question: "What's most important to you?",
      options: [
        { value: "organic", label: "100% Organic ingredients", icon: "🌱" },
        { value: "effectiveness", label: "Proven effectiveness", icon: "💪" },
        { value: "sustainability", label: "Eco-friendly packaging", icon: "♻️" },
        { value: "tradition", label: "Traditional recipes", icon: "📜" }
      ]
    }
  ]

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getRecommendation = () => {
    const { 1: concern, 2: skinType, 3: priority } = answers
    
    if (concern === 'baby-care') {
      return {
        product: "Organic Baby Care Set",
        reason: "Perfect for gentle baby care with organic ingredients",
        icon: "🧴"
      }
    } else if (concern === 'wellness') {
      return {
        product: "Herbal Tea Collection",
        reason: "Supports your wellness journey with natural herbs",
        icon: "🍃"
      }
    } else if (concern === 'skincare') {
      return {
        product: "Natural Skincare Bundle",
        reason: `Ideal for ${skinType} skin with natural formulations`,
        icon: "🌿"
      }
    } else {
      return {
        product: "Essential Oil Starter Kit",
        reason: "Perfect for aromatherapy and relaxation",
        icon: "🌸"
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
  }

  if (showResult) {
    const recommendation = getRecommendation()
    
    return (
      <section style={{ background: 'var(--light)' }}>
        <div className="container">
          <h2>Your Perfect Match!</h2>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'white',
            padding: '3rem',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
              {recommendation.icon}
            </div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>
              {recommendation.product}
            </h3>
            <p style={{ color: 'var(--secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              {recommendation.reason}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn">View Product</button>
              <button 
                onClick={resetQuiz}
                style={{
                  padding: '0.8rem 2rem',
                  background: 'transparent',
                  color: 'var(--primary)',
                  border: '2px solid var(--primary)',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]

  return (
    <section style={{ background: 'var(--light)' }}>
      <div className="container">
        <h2>Find Your Perfect Product</h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'white',
          padding: '3rem',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Progress bar */}
          <div style={{
            width: '100%',
            height: '8px',
            background: 'var(--light)',
            borderRadius: '4px',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              height: '100%',
              background: 'var(--primary)',
              borderRadius: '4px',
              transition: 'width 0.3s'
            }}></div>
          </div>

          <h3 style={{ 
            color: 'var(--primary)', 
            marginBottom: '2rem', 
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          
          <h4 style={{ 
            marginBottom: '2rem', 
            fontSize: '1.3rem',
            textAlign: 'center'
          }}>
            {question.question}
          </h4>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'var(--light)',
                  border: '2px solid transparent',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--primary)'
                  e.target.style.background = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'transparent'
                  e.target.style.background = 'var(--light)'
                }}
              >
                <span style={{ fontSize: '2rem' }}>{option.icon}</span>
                <span style={{ fontSize: '1.1rem' }}>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz