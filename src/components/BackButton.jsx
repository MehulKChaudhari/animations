import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button 
      className="back-button"
      onClick={() => navigate('/')}
      aria-label="Go back to gallery"
    >
      <ArrowLeft size={20} />
      <span className="back-button-text">Gallery</span>
    </button>
  )
}

export default BackButton 