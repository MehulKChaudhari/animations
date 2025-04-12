import { useState } from 'react'
import { Menu, X, Home, User, Settings, Mail, Info } from 'lucide-react'
import './MenuLiquidAnimation.css'

const MenuLiquidAnimation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 1, label: 'Home', icon: Home },
    { id: 2, label: 'Profile', icon: User },
    { id: 3, label: 'Settings', icon: Settings },
    { id: 4, label: 'Messages', icon: Mail },
    { id: 5, label: 'About', icon: Info }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const getMenuItemStyle = (index) => {
    return {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
      transitionDelay: isOpen ? `${index * 0.07}s` : '0s',
      zIndex: 50 - index,
      top: `${60 + (index * 40)}px`
    }
  }

  return (
    <div className="menu-container">
      <button className="hamburger-button" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="menu-items-container">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="menu-item"
            style={getMenuItemStyle(index)}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.menu-label').style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.menu-label').style.opacity = '0'
            }}
          >
            <item.icon size={20} />
            <span className="menu-label">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuLiquidAnimation 