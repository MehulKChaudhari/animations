import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuLiquidAnimation from './components/MenuLiquidAnimation'
import AnimationGallery from './components/AnimationGallery'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationGallery />} />
        <Route path="/menu-liquid-animation" element={<MenuLiquidAnimation />} />
      </Routes>
    </Router>
  )
}

export default App