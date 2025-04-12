import { useNavigate } from 'react-router-dom'
import './AnimationGallery.css'
import menuAnimationImg from '../assets/menu-animation.png'
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