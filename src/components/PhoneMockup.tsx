import React from 'react';

export const PhoneMockup: React.FC = () => {
  const originalDimensions={
    height:875,
    width:428
  }
  return (
    <div className="relative">
      {/* Phone frame */}
      <img
        src="/public/Devicedemo.png"
        style={{
          maxHeight:originalDimensions.height*0.8,
          width:"100%",
          height:"100%",
          maxWidth:originalDimensions.width*0.8
        }}

      />
    </div>
  );
};