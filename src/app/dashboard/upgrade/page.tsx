'use client';

import { useState } from 'react';

export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Free Starter',
      price: '$0',
      period: '/ month',
      description: 'Essential vocational modules and access to community forums.',
      features: ['Access to 5 core starter courses', 'Public student forum participation', 'Basic task tracker tool', 'Standard resolution video playback'],
      btnText: 'Current Plan',
      isCurrent: true
    },
    {
      id: 'pro',
      name: 'Pro Scholar',
      price: '$19',
      period: '/ month',
      description: 'Full access to professional tracks, mentorship chats, and verified certificates.',
      features: ['Unlimited course access', '1-on-1 Vocational mentor chat channels', 'Verified certificates of completion', 'Downloadable project assets & starter kits', 'Priority assignment code reviews'],
      btnText: 'Upgrade to Pro',
      highlighted: true
    },
    {
      id: 'team',
      name: 'Institutional Lab',
      price: '$49',
      period: '/ month',
      description: 'Dedicated cloud workspace for schools, labs, and student teams.',
      features: ['Up to 10 collaborative seats', 'Classroom analytics dashboard', 'Custom project grading rubric', 'Dedicated support mentor', 'API integration access'],
      btnText: 'Contact Enterprise'
    }
  ];

  return (
    <div className="container-fluid p-0">
      <div className="text-center max-w-lg mx-auto mb-5">
        <h3 className="fw-bold mb-2">Upgrade for Unlimited Learning</h3>
        <p className="text-muted">Accelerate your career readiness with advanced masterclasses, mentorship, and project badges.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {plans.map((plan) => (
          <div key={plan.id} className="col-lg-4 col-md-6">
            <div
              className={`card border-0 rounded-4 p-4 h-100 shadow-sm transition-all ${
                plan.highlighted ? 'border border-2 border-primary' : 'bg-white'
              }`}
              style={plan.highlighted ? { borderColor: '#5e81f4 !important', transform: 'scale(1.02)' } : {}}
            >
              {plan.highlighted && (
                <span
                  className="badge position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill text-white"
                  style={{ backgroundColor: '#5e81f4' }}
                >
                  Most Popular
                </span>
              )}
              <div className="text-center mb-4 pt-2">
                <h5 className="fw-bold mb-1">{plan.name}</h5>
                <p className="text-muted small mb-3">{plan.description}</p>
                <div className="d-flex align-items-baseline justify-content-center">
                  <span className="display-5 fw-bold" style={{ color: '#5e81f4' }}>
                    {plan.price}
                  </span>
                  <span className="text-muted ms-1">{plan.period}</span>
                </div>
              </div>

              <ul className="list-unstyled mb-4 flex-grow-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="mb-2 d-flex align-items-center small text-muted">
                    <i className="bx bx-check-circle text-success fs-5 me-2"></i>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPlan(plan.id)}
                className={`btn w-100 rounded-pill py-2 fw-semibold ${
                  plan.highlighted ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                style={plan.highlighted ? { backgroundColor: '#5e81f4', borderColor: '#5e81f4' } : {}}
              >
                {selectedPlan === plan.id && plan.id === 'pro' ? 'Selected' : plan.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
