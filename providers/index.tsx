'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return <>{children}</>;
};
