import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-cream">
        {/* Brand-accent orbs — soft, pushed to corners, low opacity so content stays readable */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-cyan rounded-full filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] bg-purple rounded-full filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 -left-40 w-[24rem] h-[24rem] bg-cyan rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>

        {/* Floating navy particles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-navy rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-navy rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-navy rounded-full opacity-25 animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-navy rounded-full opacity-20 animate-float animation-delay-5000"></div>
      </div>
    </div>
  );
};
