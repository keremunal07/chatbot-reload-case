'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-5 py-0 text-[15px] font-semibold leading-4  transition duration-300 ease-out hover:ease-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'rounded-lg border border-white bg-white text-black hover:bg-transparent hover:text-white disabled:text-zinc-200',
        secondary:
          'rounded-lg border border-white bg-blue text-black hover:bg-transparent hover:text-white disabled:text-zinc-200',
        outline:
          'rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-black disabled:text-zinc-200',
      },
      size: {
        sm: 'h-7 rounded-sm',
        md: 'h-9 rounded-md',
        lg: 'h-10 rounded-md',
        xl: 'h-12 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withIcon = false, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          'flex gap-2 items-center': withIcon,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
