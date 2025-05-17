import { useState } from 'react'
import './LayoutTabs.css'
import { List, LayoutGrid, Layers } from 'lucide-react'

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Cosmic Dreams",
    value: "0.855 ETH",
    number: "#209",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&q=80"
  },
  {
    id: 2, 
    title: "Neon Vibrance",
    value: "0.209 ETH",
    number: "#808",
    image: "https://images.unsplash.com/photo-1641423914598-288fee6cecf2?w=400&h=400&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Digital Pet",
    value: "1.023 ETH",
    number: "#412",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Pixel Dream",
    value: "0.615 ETH",
    number: "#517",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop&q=80"
  }
]

const LayoutTabs = () => {
  const [activeView, setActiveView] = useState('stacked')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const totalValue = MOCK_ITEMS.reduce((sum, item) => {
    const value = parseFloat(item.value.split(' ')[0])
    return sum + value
  }, 0).toFixed(3)

  const handleViewChange = (view) => {
    if (view === activeView || isAnimating) return
    
    setIsAnimating(true)
    setActiveView(view)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 750)
  }

  return (
    <div className="layout-tabs-container">
      <div className="layout-tabs-wrapper">
        <h1>Collectables</h1>
        
        <div className="layout-tabs-header">
          <button
            className={`layout-tab ${activeView === 'list' ? 'active' : ''}`}
            onClick={() => handleViewChange('list')}
          >
            <List size={16} />
            <span>List view</span>
          </button>
          <button
            className={`layout-tab ${activeView === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewChange('grid')}
          >
            <LayoutGrid size={16} />
            <span>Card view</span>
          </button>
          <button
            className={`layout-tab ${activeView === 'stacked' ? 'active' : ''}`}
            onClick={() => handleViewChange('stacked')}
          >
            <Layers size={16} />
            <span>Stacked view</span>
          </button>
        </div>
        
        <div className="layout-tabs-divider"></div>
        
        <div className={`layout-content ${activeView} ${isAnimating ? 'animating' : ''}`}>
          {activeView === 'list' && (
            <div className="items-container list">
              {MOCK_ITEMS.map((item, index) => (
                <div 
                  key={item.id} 
                  className="item"
                  style={{"--index": index}}
                >
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <div className="item-meta">
                      <span className="item-value">{item.value}</span>
                      <span className="item-number">{item.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'grid' && (
            <div className="items-container grid">
              {MOCK_ITEMS.map((item, index) => (
                <div 
                  key={item.id} 
                  className="item"
                  style={{"--index": index}}
                >
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <div className="item-meta">
                      <span className="item-value">{item.value}</span>
                      <span className="item-number">{item.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'stacked' && (
            <div className="stacked-view">
              <div className="stacked-cards-container">
                {MOCK_ITEMS.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="stacked-card"
                    style={{
                      "--index": index,
                      "--total": MOCK_ITEMS.length,
                      zIndex: MOCK_ITEMS.length - index
                    }}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
              </div>
              <div className="stacked-info">
                <h2>{MOCK_ITEMS.length} Collectables</h2>
                <p>{totalValue} ETH</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LayoutTabs