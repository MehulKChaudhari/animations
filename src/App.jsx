import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuLiquidAnimation from './components/MenuLiquidAnimation'
import AnimationGallery from './components/AnimationGallery'
import StatusIndicator from './components/StatusIndicator'
import TransactionButton from './components/TransactionButton'
import AnimatedTodo from './components/AnimatedTodo'
import './App.css'
import PricingToggle from './components/PricingToggle'
import LayoutTabs from './components/LayoutTabs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationGallery />} />
        <Route path="/menu-liquid-animation" element={<MenuLiquidAnimation />} />
        <Route path="/status-indicator" element={<StatusIndicator />} />
        <Route path="/transaction-status" element={<TransactionButton />} />
        <Route path="/animated-todo" element={<AnimatedTodo />} />
        <Route path="/pricing-toggle" element={<PricingToggle />} />
        <Route path="/layout-tabs" element={<LayoutTabs />} />
      </Routes>
    </Router>
  )
}

export default App