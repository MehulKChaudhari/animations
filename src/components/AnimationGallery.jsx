import { useNavigate } from 'react-router-dom'
import './AnimationGallery.css'
import menuAnimationImg from '../assets/menu-animation.png'
import statusIndicatorImg from '../assets/status-indicator.png'
import transactionStatusImg from '../assets/transaction-status.png'
import placeholderImg from '../assets/placeholder.svg'

const AnimationGallery = () => {
  const navigate = useNavigate()

  const animations = [
    {
      id: 'menu-liquid',
      title: 'Liquid Menu',
      route: '/menu-liquid-animation',
      description: 'A menu that transforms with natural, liquid-like animations when triggered from the top left corner. Let your creativity shape how it moves, morphs, and settles into place',
      bgColor: '#3b82f6',
      image: menuAnimationImg  
    },
    {
      id: 'status-indicator',
      title: 'Status Indicator',
      route: '/status-indicator',
      description: 'An elegant and informative status indicator with smooth transitions and pulse animations',
      bgColor: '#22c55e',
      image: statusIndicatorImg
    },
    {
      id: 'transaction-status',
      title: 'Transaction Status',
      route: '/transaction-status',
      description: 'An elegant transaction status indicator with loading and result states',
      bgColor: '#3b82f6',
      image: transactionStatusImg
    },
    {
      id: "animated-todo",
      title: "Animated Todo",
      route: "/animated-todo",
      description: "Smooth checkbox interactions with satisfying completion animations",
      bgColor: "#3b82f6",
      image: placeholderImg
    },
    {
      id: "pricing-toggle",
      title: "Pricing Toggle",
      route: "/pricing-toggle",
      description: "A pricing toggle component with smooth animations and interactive features",
      bgColor: "#3b82f6",
      image: placeholderImg
    },
    {
      id: "layout-tabs",
      title: "Layout Tabs",
      route: "/layout-tabs",
      description: "A layout tabs component with smooth animations and interactive features",
      bgColor: "#3b82f6",
      image: placeholderImg
    }
  ]

  const handleImageError = (e) => {
    e.target.src = placeholderImg
    e.target.alt = 'Preview not available'
  }

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">Animation Showcase</h1>
        <p className="gallery-description">
          Collection of beautiful, interactive animations. - By Mehulkc
        </p>
      </div>
      
      <div className="animations-grid">
        {animations.map((animation) => (
          <div
            key={animation.id}
            className="animation-card"
            onClick={() => navigate(animation.route)}
            style={{ '--bg-color': animation.bgColor }}
          >
            <img 
              src={animation.image} 
              alt={`${animation.title} preview`}
              className="animation-image"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="animation-card-content">
              <h2 className="animation-title">{animation.title}</h2>
              <p className="animation-description">{animation.description}</p>
            </div>
            <div className="animation-card-overlay">
              <span>View Animation</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimationGallery 