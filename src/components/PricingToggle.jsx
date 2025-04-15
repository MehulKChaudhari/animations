import React, { useState, useEffect, useRef } from 'react';
import './PricingToggle.css';

const PricingToggle = () => {
  const [planType, setPlanType] = useState('free');
  const [premiumType, setPremiumType] = useState('monthly');
  const toggleRef = useRef(null);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    if (sliderRef.current) {
      if (planType === 'free') {
        sliderRef.current.style.width = '140px';
        sliderRef.current.style.left = '0';
      } else if (planType === 'premium') {
        if (premiumType === 'monthly') {
          sliderRef.current.style.width = '110px';
          sliderRef.current.style.left = '140px';
        } else {
          sliderRef.current.style.width = '110px';
          sliderRef.current.style.left = '250px';
        }
      }
    }
  }, [planType, premiumType]);
  
  const handlePlanChange = (type) => {
    setPlanType(type);
  };
  
  const handlePremiumTypeChange = (type) => {
    setPremiumType(type);
    setPlanType('premium');
  };
  
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Choose Your Plan</h2>
      
      <div className="toggle-section">
        <div className="toggle-container">
          <div 
            ref={toggleRef}
            className={`toggle-switch ${planType === 'premium' ? 'premium-active' : ''}`}
          >
            <div className="slider-bg" ref={sliderRef}></div>
            
            <button 
              className={`toggle-option free ${planType === 'free' ? 'active' : ''}`}
              onClick={() => handlePlanChange('free')}
            >
              Free
            </button>
            
            {planType !== 'premium' ? (
              <button 
                className={`toggle-option premium ${planType === 'premium' ? 'active' : ''}`}
                onClick={() => handlePlanChange('premium')}
              >
                Premium
              </button>
            ) : (
              <div className="premium-group">
                <button 
                  className={`toggle-option monthly ${premiumType === 'monthly' ? 'active' : ''}`}
                  onClick={() => handlePremiumTypeChange('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`toggle-option annual ${premiumType === 'annual' ? 'active' : ''}`}
                  onClick={() => handlePremiumTypeChange('annual')}
                >
                  Annual
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="pricing-card">
        <div className="plan-details">
          <div className="plan-header">
            <h3>{planType === 'free' ? 'Free Plan' : 'Premium Plan'}</h3>
            <div className="price">
              {planType === 'free' ? (
                <>$0<span>/forever</span></>
              ) : (
                premiumType === 'monthly' ? (
                  <>$12<span>/month</span></>
                ) : (
                  <>$115<span>/year</span></>
                )
              )}
            </div>
          </div>
          <ul className="features">
            {planType === 'free' ? (
              <>
                <li>Basic features</li>
                <li>Limited storage</li>
                <li>Community support</li>
              </>
            ) : (
              <>
                <li>All features included</li>
                <li>Unlimited storage</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
                <li>Custom integrations</li>
              </>
            )}
          </ul>
          <button className={`cta-button ${planType === 'premium' ? 'premium' : ''}`}>
            {planType === 'free' ? 'Get Started' : 'Upgrade Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;