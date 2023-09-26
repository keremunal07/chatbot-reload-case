import React from 'react';
import { About, AnimatedShapes, Characters, Hero, HowItWorks } from './_components';
import { NextPage } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section>
        <Hero />
        <AnimatedShapes />
        <HowItWorks />
        <Characters />
        <About />
      </section>
      <Footer />
    </>
  );
};

export default Home;
