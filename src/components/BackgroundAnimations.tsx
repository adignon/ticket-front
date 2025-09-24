import React from 'react';

export const BackgroundAnimations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated SVG shapes */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#2ECC71" strokeWidth="2" strokeDasharray="10,5"/>
          </svg>
        </div>
        
        <div className="absolute top-40 right-20 w-32 h-32 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bounce-slow">
            <polygon points="100,20 120,80 180,80 135,120 155,180 100,145 45,180 65,120 20,80 80,80" fill="#2ECC71"/>
          </svg>
        </div>

        {/* Geometric shapes */}
        <div className="absolute bottom-20 left-1/4 w-48 h-48 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="#2ECC71" strokeWidth="3" transform="rotate(45 100 100)"/>
          </svg>
        </div>

        <div className="absolute top-60 left-1/2 w-20 h-20 opacity-15 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="25" fill="#2ECC71"/>
          </svg>
        </div>

        {/* Ticket-like shapes */}
        <div className="absolute bottom-32 right-10 w-40 h-24 opacity-8 animate-sway">
          <svg viewBox="0 0 160 96" className="w-full h-full">
            <path d="M10,10 L150,10 Q160,10 160,20 L160,40 Q155,45 160,50 L160,70 Q160,80 150,80 L10,80 Q0,80 0,70 L0,50 Q5,45 0,40 L0,20 Q0,10 10,10 Z" 
                  fill="none" stroke="#2ECC71" strokeWidth="2" strokeDasharray="5,3"/>
          </svg>
        </div>
      </div>
    </div>
  );
};