'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const container = cva(['mx-auto my-0 px-10'], {
  variants: {
    size: {
      small: ['max-w-lg'],
      medium: ['max-w-2xl'],
      modal: ['max-w-3xl'],
      large: ['max-w-[1210px]'],
    },
  },
});

interface IContainerProps extends VariantProps<typeof container> {}

const Container: React.FC<IContainerProps & { children: React.ReactNode; className?: string }> = ({
  size,
  children,
  className,
}) => {
  return <div className={container({ size, className })}>{children}</div>;
};

export default Container;
