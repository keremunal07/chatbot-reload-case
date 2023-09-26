import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import React from 'react';

export const About: React.FC = () => {
  return (
    <Container size="large">
      <section className="mx-auto my-24 flex w-full max-w-[840px] flex-col items-center justify-center gap-12 text-center">
        <h1
          data-aos="fade-up"
          className="text-xl font-bold leading-[70px] max-md:text-lg max-md:leading-[35px]"
        >
          Let’s start experiencing the new internet <span className="text-blue">today.</span>
        </h1>
        <Button data-aos="fade-up" variant="secondary" size="xl" className="rounded-xl">
          Get started for free
        </Button>
      </section>
    </Container>
  );
};
