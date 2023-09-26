/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const AnimatedShapes: React.FC = () => {
  return (
    <section className="relative h-[700px] max-md:h-[350px] w-full overflow-hidden">
      <figure className="absolute left-[50%] top-0 w-[200%] min-w-[1500px] translate-x-[-50%] animate-[slide-bottom_8s_ease-in-out_infinite] opacity-40">
        <img className="w-full" src="/images/shape-1.svg" alt="AI Chat Bot" />
      </figure>
      <figure className="absolute left-[45%] top-16 w-[175%] min-w-[1500px] translate-x-[-50%] animate-[slide-right_8s_ease-in-out_infinite]">
        <img className="w-full" src="/images/shape-1.svg" alt="AI Chat Bot" />
      </figure>
      <figure className="absolute left-[55%] top-16 w-[175%] min-w-[1500px] translate-x-[-50%] animate-[slide-left_8s_ease-in-out_infinite] opacity-40">
        <img className="w-full" src="/images/shape-1.svg" alt="AI Chat Bot" />
      </figure>
      <div className="shape-gradient absolute bottom-0 z-10 h-1/2 w-full" />
    </section>
  );
};
