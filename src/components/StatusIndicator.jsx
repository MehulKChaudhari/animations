import { useState } from 'react'
import './StatusIndicator.css'

const StatusIndicator = () => {
  const [status, setStatus] = useState('online');

  const statuses = [
    {
      id: 'online',
      label: 'Online',
      description: 'Available and ready to collaborate',
      color: '#22c55e',
      pulse: true
    },
    {
      id: 'busy',
      label: 'In a meeting',
      description: 'Will be available in 45 minutes',
      color: '#ef4444',
      pulse: false
    },
    {
      id: 'away',
      label: 'Away',
      description: 'Be right back in 10 minutes',
      color: '#f59e0b',
      pulse: true
    },
    {
      id: 'offline',
      label: 'Offline',
      description: 'Not available until tomorrow',
      color: '#94a3b8',
      pulse: false
    }
  ]

  const currentStatus = statuses.find(s => s.id === status)

  return (
    <div className="status-container">
      <div className="status-card">
        <div
          className={`status-indicator ${currentStatus.pulse ? 'pulse' : ''}`}
          style={{ '--status-color': currentStatus.color }}
        >
          <div className="status-dot"></div>
        </div>

        <div className="status-content">
          <h3 className="status-label">{currentStatus.label}</h3>
          <p className="status-description">{currentStatus.description}</p>
        </div>

        <div className="status-actions">
          {statuses.map(s => (
            <button
              key={s.id}
              className={`status-button ${s.id === status ? 'active' : ''}`}
              onClick={() => setStatus(s.id)}
              style={{ '--status-color': s.color }}
            >
              <span className="status-button-dot"></span>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatusIndicator
