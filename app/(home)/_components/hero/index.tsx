import React from 'react';
import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <Container size="large">
      <section className="mx-auto mb-16 mt-[90px] flex max-w-lg flex-col items-center justify-center text-center max-md:mt-[45px]">
        <h1 data-aos="zoom-in" className="text-xl font-bold max-md:text-2-lg">
          <span className="text-blue">AI</span> Chatbot
        </h1>
        <p data-aos="fade-up" className="my-3 text-md font-medium text-grey">
          We’ve trained a model called ChatGPT which interacts in a conversational way.
        </p>
        <a href="#how-it-works">
          <Button size="xl" variant="default" className="my-8 w-56">
            Continue
          </Button>
        </a>
      </section>
    </Container>
  );
};
