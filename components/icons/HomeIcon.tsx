
import React from 'react';

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v8.25a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V10.5M9 20.25V12h6v8.25" />
  </svg>
);
export default HomeIcon;
