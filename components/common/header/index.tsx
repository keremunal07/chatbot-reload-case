import React from 'react';
import { LogoMain } from '../../ui/svgs';

export const Header: React.FC = () => {
  return (
    <header className="my-11 flex w-full items-center justify-center">
      <LogoMain />
    </header>
  );
};
