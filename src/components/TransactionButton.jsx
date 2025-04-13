import { useState } from 'react'
import './TransactionButton.css'
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Loader2
} from 'lucide-react'

const TransactionButton = () => {
  const [status, setStatus] = useState('idle');
  
  const simulateTransaction = (finalStatus) => {
    setStatus('analyzing')
    
    setTimeout(() => {
      setStatus(finalStatus)
    }, 2000)
  }

  const statusConfig = {
    idle: {
      text: 'Start Transaction',
      className: 'status-idle'
    },
    analyzing: {
      text: 'Analysing Transaction',
      className: 'status-analysing'
    },
    safe: {
      text: 'Transaction Safe',
      icon: <CheckCircle2 size={18} />,
      className: 'status-safe'
    },
    warning: {
      text: 'Transaction Warning',
      icon: <AlertTriangle size={18} />,
      className: 'status-warning'
    },
    error: {
      text: 'Transaction Failed',
      icon: <XCircle size={18} />,
      className: 'status-error'
    }
  }

  const current = statusConfig[status]

  return (
    <div className="transaction-container">
      <div className="transaction-content">
        <button 
          className={`transaction-button ${current.className}`}
          disabled={status === 'analyzing'}
        >
          {status === 'analyzing' ? (
            <Loader2 size={18} className="loading-spinner" />
          ) : current.icon ? (
            <span className="status-icon">{current.icon}</span>
          ) : null}
          <span className="status-text">{current.text}</span>
        </button>

        <div className="transaction-controls">
          <button 
            className="control-button success"
            onClick={() => simulateTransaction('safe')}
            disabled={status === 'analyzing'}
          >
            Simulate Success
          </button>
          <button 
            className="control-button warning"
            onClick={() => simulateTransaction('warning')}
            disabled={status === 'analyzing'}
          >
            Simulate Warning
          </button>
          <button 
            className="control-button error"
            onClick={() => simulateTransaction('error')}
            disabled={status === 'analyzing'}
          >
            Simulate Error
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionButton
